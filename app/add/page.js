"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";

export default function AddCompany() {
  const [rawText, setRawText] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [result, setResult] = useState(null);
  const router = useRouter();

  async function handleExtract(e) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setResult(null);
    try {
      const res = await fetch("/api/extract", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ rawText }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong");
      setResult(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  const [showManual, setShowManual] = useState(false);
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [application_deadline, setApplicationDeadline] = useState("");
  const [test_date, setTestDate] = useState("");
  const [manualLoading, setManualLoading] = useState(false);

  async function handleManualSubmit(e) {
    e.preventDefault();
    setManualLoading(true);
    setError(null);
    try {
      const payload = {
        name: name || null,
        role: role || null,
        application_deadline: application_deadline || null,
        test_date: test_date || null,
      };
      const { error: dbError } = await supabase.from("companies").insert(payload);
      if (dbError) throw dbError;
      // go to companies list after adding
      router.push("/companies");
    } catch (err) {
      setError(err.message || String(err));
    } finally {
      setManualLoading(false);
    }
  }

  return (
    <div className="space-y-6">
      <h1 className="font-display text-xl">Add a company</h1>
      <p className="text-sm text-ink/60">
        Paste the placement group message below. Gemini pulls out the company,
        role, applying deadline, and test date automatically.
      </p>

      <form onSubmit={handleExtract} className="card space-y-4">
        <textarea
          className="field h-40 resize-none"
          placeholder="Paste the WhatsApp message here…"
          value={rawText}
          onChange={(e) => setRawText(e.target.value)}
          required
        />
        <button type="submit" className="btn-primary" disabled={loading}>
          {loading ? "Extracting…" : "Extract details"}
        </button>
        {error && <p className="text-sm text-danger">{error}</p>}
      </form>

      <div className="flex flex-wrap items-center gap-3">
        <button className="btn-secondary" onClick={() => setShowManual((s) => !s)}>
          {showManual ? "Hide manual form" : "Enter details manually"}
        </button>
        <button className="btn-secondary" onClick={() => router.push('/companies')}>View companies</button>
      </div>

      {showManual && (
        <form onSubmit={handleManualSubmit} className="card space-y-4">
          <div>
            <label className="text-xs text-ink/60 mb-1 block">Company name</label>
            <input className="field" value={name} onChange={(e) => setName(e.target.value)} placeholder="Company name" required />
          </div>

          <div>
            <label className="text-xs text-ink/60 mb-1 block">Role</label>
            <input className="field" value={role} onChange={(e) => setRole(e.target.value)} placeholder="Role / Position" />
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="text-xs text-ink/60 mb-1 block">Apply by</label>
              <input type="date" className="field" value={application_deadline} onChange={(e) => setApplicationDeadline(e.target.value)} />
            </div>
            <div>
              <label className="text-xs text-ink/60 mb-1 block">Test date</label>
              <input type="date" className="field" value={test_date} onChange={(e) => setTestDate(e.target.value)} />
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2 sm:justify-end">
            <button type="button" className="btn-secondary" onClick={() => setShowManual(false)}>Cancel</button>
            <button type="submit" className="btn-primary" disabled={manualLoading}>{manualLoading ? 'Adding…' : 'Add company'}</button>
          </div>

        </form>
      )}

      {result && (
        <div className="card space-y-3">
          <p className="font-display text-base">Added: {result.company.name}</p>
          <div className="text-sm text-ink/70 space-y-1">
            <p>Role: {result.company.role || "—"}</p>
            <p>
              Apply by:{" "}
              {result.company.application_deadline
                ? new Date(result.company.application_deadline).toLocaleDateString("en-IN")
                : "not mentioned"}
            </p>
            <p>
              Test date:{" "}
              {result.company.test_date
                ? new Date(result.company.test_date).toLocaleDateString("en-IN")
                : "not mentioned"}
            </p>
          </div>
          <p className="text-xs text-ink/50">
            Double-check the dates above — edit directly in Supabase if Gemini misread anything.
          </p>
          <button className="btn-secondary" onClick={() => router.push("/")}>
            Go to dashboard
          </button>
        </div>
      )}
    </div>
  );
}
