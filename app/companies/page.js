"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabaseClient";

export default function CompaniesPage() {
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState({});

  useEffect(() => {
    load();
  }, []);

  async function load() {
    setLoading(true);
    const { data, error } = await supabase.from("companies").select("*").order("application_deadline", { ascending: true });
    if (!error) setCompanies(data || []);
    setLoading(false);
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
    const payload = {
      name: editForm.name,
      role: editForm.role,
      application_deadline: editForm.application_deadline || null,
      test_date: editForm.test_date || null,
    };
    const { error } = await supabase.from("companies").update(payload).eq("id", id);
    if (!error) await load();
    cancelEdit();
  }

  async function deleteCompany(id) {
    if (!confirm("Delete this company? This action cannot be undone.")) return;
    const { error } = await supabase.from("companies").delete().eq("id", id);
    if (!error) setCompanies((p) => p.filter((c) => c.id !== id));
  }

  async function updateStatus(id, status) {
    const { error } = await supabase.from("companies").update({ status }).eq("id", id);
    if (!error) {
      setCompanies((prev) => prev.map((c) => (c.id === id ? { ...c, status } : c)));
      try {
        window.dispatchEvent(new CustomEvent('company-updated', { detail: { id, status } }));
      } catch (e) {}
    }
  }

  if (loading) return <p className="text-sm text-ink/50">Loading…</p>;

  // prepare visible list with client-side search and sorting
  let visibleList = [...companies];
  if (searchTerm) {
    const q = searchTerm.toLowerCase();
    visibleList = visibleList.filter((c) => (c.name || "").toLowerCase().includes(q) || (c.role || "").toLowerCase().includes(q));
  }
  if (sortBy === "apply_desc") {
    visibleList.sort((a, b) => {
      const ta = a.application_deadline ? new Date(a.application_deadline).getTime() : 0;
      const tb = b.application_deadline ? new Date(b.application_deadline).getTime() : 0;
      return tb - ta;
    });
  } else if (sortBy === "test_desc") {
    visibleList.sort((a, b) => {
      const ta = a.test_date ? new Date(a.test_date).getTime() : 0;
      const tb = b.test_date ? new Date(b.test_date).getTime() : 0;
      return tb - ta;
    });
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="font-display text-2xl">Companies</h1>
        <div className="flex items-center gap-3">
          <Link href="/add" className="btn-primary">Add Company</Link>
          <button className="btn-secondary" onClick={() => load()}>Refresh</button>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <input
          placeholder="Search companies or roles…"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="field w-full md:w-1/3"
        />

        <div className="flex items-center gap-2">
          <label className="text-sm text-ink/60">Sort:</label>
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="field text-sm">
            <option value="">None</option>
            <option value="apply_desc">Latest apply by</option>
            <option value="test_desc">Latest test date</option>
          </select>
        </div>
      </div>

      <div className="space-y-3">
        {companies.length === 0 && <div className="card">No companies yet.</div>}

        {visibleList.map((c) => {
          const isEditing = editingId === c.id;
          return (
            <div key={c.id} className="card">
              {!isEditing ? (
                <div>
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="font-display text-base">{c.name}</p>
                      {c.role && <p className="text-sm text-ink/60">{c.role}</p>}
                      <div className="mt-2 text-sm text-ink/70">
                        {c.application_deadline && (
                          <div>Apply by: {new Date(c.application_deadline).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: 'numeric' })}</div>
                        )}
                        {c.test_date && (
                          <div>Test: {new Date(c.test_date).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: 'numeric' })}</div>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
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

                      <button className="btn-secondary" onClick={() => startEdit(c)}>Edit</button>
                      <button className="btn-secondary" onClick={() => deleteCompany(c.id)}>Delete</button>
                      <Link href={`/resume?company=${c.id}`} className="text-xs text-ink/60 hover:text-signalDark underline">Resume →</Link>
                    </div>
                  </div>
                </div>
              ) : (
                <div>
                  <div className="grid gap-4 md:grid-cols-4">
                    <div>
                      <label className="text-xs text-ink/60 mb-1 block">Company name</label>
                      <input className="field" value={editForm.name} onChange={(e) => setEditForm((s) => ({ ...s, name: e.target.value }))} placeholder="Company name" />
                    </div>

                    <div>
                      <label className="text-xs text-ink/60 mb-1 block">Role</label>
                      <input className="field" value={editForm.role} onChange={(e) => setEditForm((s) => ({ ...s, role: e.target.value }))} placeholder="Role / Position" />
                    </div>

                    <div>
                      <label className="text-xs text-ink/60 mb-1 block">Apply by</label>
                      <input type="date" className="field" value={editForm.application_deadline} onChange={(e) => setEditForm((s) => ({ ...s, application_deadline: e.target.value }))} />
                    </div>

                    <div>
                      <label className="text-xs text-ink/60 mb-1 block">Test date</label>
                      <input type="date" className="field" value={editForm.test_date} onChange={(e) => setEditForm((s) => ({ ...s, test_date: e.target.value }))} />
                    </div>
                  </div>

                  <div className="mt-3 flex gap-2 justify-end">
                    <button className="btn-secondary" onClick={cancelEdit}>Cancel</button>
                    <button className="btn-primary" onClick={() => saveEdit(c.id)}>Save</button>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
