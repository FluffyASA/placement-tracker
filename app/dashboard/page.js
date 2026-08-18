"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabaseClient";
import { learningTopics } from "@/lib/learningData";

function daysUntil(dateStr) {
  if (!dateStr) return null;
  const diff = new Date(dateStr) - new Date();
  return Math.ceil(diff / (1000 * 60 * 60 * 24));
}

function UrgencyPill({ days }) {
  if (days === null) return <span className="pill bg-line text-ink/60">No date</span>;
  if (days < 0) return <span className="pill bg-danger/10 text-danger">Passed</span>;
  if (days <= 2) return <span className="pill bg-danger/10 text-danger">{days}d left</span>;
  if (days <= 7) return <span className="pill bg-signal/20 text-signalDark">{days}d left</span>;
  return <span className="pill bg-ok/10 text-ok">{days}d left</span>;
}

export default function DashboardPage() {
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState({});

  useEffect(() => {
    async function load() {
      const { data, error } = await supabase
        .from("companies")
        .select("*")
        .order("application_deadline", { ascending: true, nullsFirst: false });
      if (error) setError(error.message);
      else setCompanies(data || []);
      setLoading(false);
    }
    load();
    function onCompanyUpdated(e) {
      try {
        const { id, status } = e.detail || {};
        if (!id) return;
        setCompanies((prev) => prev.map((c) => (c.id === id ? { ...c, status } : c)));
      } catch (err) {}
    }
    window.addEventListener('company-updated', onCompanyUpdated);
    return () => window.removeEventListener('company-updated', onCompanyUpdated);
  }, []);

  async function refresh() {
    setLoading(true);
    const { data, error } = await supabase
      .from("companies")
      .select("*")
      .order("application_deadline", { ascending: true, nullsFirst: false });
    if (error) setError(error.message);
    else setCompanies(data || []);
    setLoading(false);
  }

  async function updateStatus(id, status) {
    await supabase.from("companies").update({ status }).eq("id", id);
    setCompanies((prev) => prev.map((c) => (c.id === id ? { ...c, status } : c)));
  }

  function startEdit(company) {
    setEditingId(company.id);
    setEditForm({
      name: company.name || "",
      role: company.role || "",
      application_deadline: company.application_deadline ? company.application_deadline.split("T")[0] : "",
      test_date: company.test_date ? company.test_date.split("T")[0] : "",
    });
  }

  function cancelEdit() {
    setEditingId(null);
    setEditForm({});
  }

  async function saveEdit(id) {
    try {
      const payload = {
        name: editForm.name,
        role: editForm.role,
        application_deadline: editForm.application_deadline || null,
        test_date: editForm.test_date || null,
      };
      const { error } = await supabase.from("companies").update(payload).eq("id", id);
      if (error) throw error;
      await refresh();
      cancelEdit();
    } catch (err) {
      setError(err.message);
    }
  }

  async function deleteCompany(id) {
    if (!confirm("Delete this company? This action cannot be undone.")) return;
    const { error } = await supabase.from("companies").delete().eq("id", id);
    if (error) setError(error.message);
    else setCompanies((prev) => prev.filter((c) => c.id !== id));
  }

  if (loading) return <p className="text-sm text-ink/50">Loading…</p>;
  if (error) return <p className="text-sm text-danger">{error}</p>;

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h1 className="font-display text-2xl">Dashboard</h1>
        <div className="flex items-center gap-3">
          <button className="btn-primary" onClick={() => refresh()}>Refresh</button>
        </div>
      </div>

      <div className="space-y-6">
        <section>
          <h2 className="font-medium text-lg mb-3">Flash Cards</h2>
          <div className="grid gap-4 md:grid-cols-4">
            {learningTopics.map((t) => {
              const icons = {
                OS: "🖥️",
                Networks: "🌐",
                Fullstack: "🧩",
                ML: "🤖",
                AI: "🧠",
                "System Design": "🗺️",
                "Data Structures and Algorithms": "📚",
                OOPs: "🔁",
                DBMS: "🗄️",
              };
              const slug = t.toLowerCase().replace(/\s+/g, "-");
              return (
                <div key={t} className="card">
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex min-w-0 items-center">
                      <div className="topic-icon" aria-hidden>
                        <span>{icons[t] || "📘"}</span>
                      </div>
                      <div>
                        <p className="font-medium break-words">{t}</p>
                        <p className="text-xs text-ink/60 mt-1">View Flashcards</p>
                      </div>
                    </div>
                    <Link href={`/flashcards/${encodeURIComponent(slug)}`} className="btn-primary">Open</Link>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section>
          <h2 className="font-medium text-lg mb-3">Study Materials</h2>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="card">
              <div className="flex items-center justify-between gap-3">
                <div className="flex min-w-0 items-center">
                  <div className="topic-icon">📖</div>
                  <div>
                    <p className="font-medium">Study Materials</p>
                    <p className="text-xs text-ink/60 mt-1">Explore curated notes and modules</p>
                  </div>
                </div>
                <Link href="/study" className="btn-primary">Explore</Link>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="font-medium text-lg mb-3">Tracked Companies</h2>
          <div className="space-y-3">
            {companies.length === 0 && (
              <div className="card text-center py-8">No companies yet. Add one to get started.</div>
            )}

            {companies.map((c) => {
              const days = daysUntil(c.application_deadline);
              const isEditing = editingId === c.id;

              return (
                <div key={c.id} className="card">
                  {!isEditing ? (
                    <div>
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <p className="font-display text-base">{c.name}</p>
                          {c.role && <p className="text-sm text-ink/60">{c.role}</p>}
                        </div>
                        <UrgencyPill days={days} />
                      </div>

                      <div className="mt-3 flex items-center justify-between flex-wrap gap-3">
                        <div className="flex flex-wrap gap-4 text-sm text-ink/70">
                          {c.application_deadline && (
                            <span>Apply by: {new Date(c.application_deadline).toLocaleDateString("en-IN", { day: "numeric", month: "short" })}</span>
                          )}
                          {c.test_date && (
                            <span>Test: {new Date(c.test_date).toLocaleDateString("en-IN", { day: "numeric", month: "short" })}</span>
                          )}
                        </div>

                        <div className="flex flex-wrap items-center gap-2">
                          <select
                            value={c.status}
                            onChange={(e) => updateStatus(c.id, e.target.value)}
                            className="field text-xs py-1.5 w-auto"
                          >
                            <option value="tracking">Tracking</option>
                            <option value="applied">Applied</option>
                            <option value="test_scheduled">Test scheduled</option>
                            <option value="rejected">Rejected</option>
                            <option value="offer">Offer 🎉</option>
                          </select>

                          <Link href={`/resume?company=${c.id}`} className="text-xs text-ink/60 hover:text-signalDark underline">Resume →</Link>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div>
                      <div className="grid gap-2 md:grid-cols-4">
                        <input className="field" value={editForm.name} onChange={(e) => setEditForm((s) => ({ ...s, name: e.target.value }))} />
                        <input className="field" value={editForm.role} onChange={(e) => setEditForm((s) => ({ ...s, role: e.target.value }))} />
                        <input type="date" className="field" value={editForm.application_deadline} onChange={(e) => setEditForm((s) => ({ ...s, application_deadline: e.target.value }))} />
                        <input type="date" className="field" value={editForm.test_date} onChange={(e) => setEditForm((s) => ({ ...s, test_date: e.target.value }))} />
                      </div>

                      <div className="mt-3 flex flex-wrap gap-2 sm:justify-end">
                        <button className="btn-secondary" onClick={cancelEdit}>Cancel</button>
                        <button className="btn-primary" onClick={() => saveEdit(c.id)}>Save</button>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      </div>

      {/* Duplicate companies block removed - companies are shown above in section */}
    </div>
  );
}
