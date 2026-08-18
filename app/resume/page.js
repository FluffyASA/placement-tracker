"use client";

import { useEffect, useState, useRef } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function ResumePage() {
  const [companies, setCompanies] = useState([]);
  const [companyId, setCompanyId] = useState("");
  const [resumes, setResumes] = useState([]);
  const [selectedStoredResume, setSelectedStoredResume] = useState("");
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef(null);

  const [jobDescription, setJobDescription] = useState("");
  const [resumeText, setResumeText] = useState("");
  const [feedback, setFeedback] = useState(null);
  const [feedbackLoading, setFeedbackLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadCompanies() {
      const { data } = await supabase.from("companies").select("id, name").order("name");
      setCompanies(data || []);

      const params = new URLSearchParams(window.location.search);
      const preselect = params.get("company");
      if (preselect) setCompanyId(preselect);
    }
    loadCompanies();
  }, []);

  useEffect(() => {
    async function loadResumes() {
      if (!companyId) {
        setResumes([]);
        return;
      }
      const { data } = await supabase
        .from("resumes")
        .select("*")
        .eq("company_id", companyId)
        .order("created_at", { ascending: false });
      setResumes(data || []);
    }
    loadResumes();
  }, [companyId]);

  async function handleUpload(e) {
    e.preventDefault();
    if (!file || !companyId) return;
    setUploading(true);
    setError(null);
    try {
      const path = `${companyId}/${Date.now()}-${file.name}`;
      const { error: uploadError } = await supabase.storage
        .from("resumes")
        .upload(path, file);
      if (uploadError) throw uploadError;

      const { error: dbError } = await supabase.from("resumes").insert({
        company_id: companyId,
        file_name: file.name,
        storage_path: path,
      });
      if (dbError) throw dbError;

      const { data } = await supabase
        .from("resumes")
        .select("*")
        .eq("company_id", companyId)
        .order("created_at", { ascending: false });
      setResumes(data || []);
      setFile(null);
      // select the newly uploaded resume for feedback by default
      if (data && data[0] && data[0].storage_path) setSelectedStoredResume(data[0].storage_path);
    } catch (err) {
      setError(err.message);
    } finally {
      setUploading(false);
    }
  }

  async function handleDownload(resume) {
    const { data, error } = await supabase.storage
      .from("resumes")
      .createSignedUrl(resume.storage_path, 60);
    if (error) {
      setError(error.message);
      return;
    }
    window.open(data.signedUrl, "_blank");
  }

  async function handleDelete(resume) {
    if (!confirm("Delete this stored resume? This will remove the file and its record.")) return;
    setError(null);
    try {
      // remove from storage
      const { error: removeError } = await supabase.storage.from("resumes").remove([resume.storage_path]);
      if (removeError) throw removeError;

      // remove db record
      const { error: dbError } = await supabase.from("resumes").delete().eq("id", resume.id);
      if (dbError) throw dbError;

      setResumes((s) => s.filter((r) => r.id !== resume.id));
    } catch (err) {
      setError(err.message || String(err));
    }
  }

  async function handleFeedback(e) {
    e.preventDefault();
    setFeedbackLoading(true);
    setError(null);
    setFeedback(null);
    try {
      // If a file is selected and not yet uploaded, prefer parsing the file server-side
      let res;
      if (selectedStoredResume) {
        const form = new FormData();
        form.append('storagePath', selectedStoredResume);
        form.append('jobDescription', jobDescription);
        res = await fetch('/api/parse-resume', { method: 'POST', body: form });
      } else if (file) {
        const form = new FormData();
        form.append('file', file);
        form.append('jobDescription', jobDescription);
        res = await fetch('/api/parse-resume', { method: 'POST', body: form });
      } else {
        res = await fetch('/api/resume-feedback', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ resumeText, jobDescription }),
        });
      }
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Feedback failed');
      setFeedback(data.feedback);
    } catch (err) {
      setError(err.message);
    } finally {
      setFeedbackLoading(false);
    }
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-display text-xl mb-2">Resumes</h1>
        <select
          className="field w-full sm:w-auto"
          value={companyId}
          onChange={(e) => setCompanyId(e.target.value)}
        >
          <option value="">Select a company…</option>
          {companies.map((c) => (
            <option key={c.id} value={c.id}>{c.name}</option>
          ))}
        </select>
      </div>

      {companyId && (
        <>
          <form onSubmit={handleUpload} className="card space-y-3">
            <p className="font-display text-base">Store a resume for this company</p>
            <input
              ref={fileInputRef}
              type="file"
              accept=".doc,.docx,.pdf"
              onChange={(e) => setFile(e.target.files[0])}
              className="text-sm"
            />
            <button type="submit" className="btn-primary" disabled={!file || uploading}>
              {uploading ? "Uploading…" : "Upload"}
            </button>
          </form>

          {resumes.length > 0 && (
            <div className="card space-y-2">
              <p className="font-display text-base mb-2">Stored versions</p>
              {resumes.map((r) => (
                <div key={r.id} className="flex flex-col gap-2 text-sm border-b border-line last:border-0 py-2 sm:flex-row sm:items-center sm:justify-between">
                  <span className="break-all">{r.file_name}</span>
                  <div className="flex items-center gap-3">
                    <button onClick={() => handleDownload(r)} className="text-signalDark hover:underline">
                      Download
                    </button>
                    <button onClick={() => handleDelete(r)} className="text-sm text-danger hover:underline">Delete</button>
                  </div>
                </div>
              ))}
            </div>
          )}

          <form onSubmit={handleFeedback} className="card space-y-3">
            <p className="font-display text-base">AI feedback against a job description</p>
            <p className="text-xs text-ink/50">
              Paste the resume text (open the .docx, select all, copy) and the JD below. If you've uploaded a file it will be used instead; you can clear the file to paste text manually.
            </p>
            <label className="block text-sm font-medium text-ink/70">Resume</label>

            {resumes.length > 0 && (
              <div className="mt-2 text-sm">
                <label className="text-sm">Or use a stored resume:</label>
                <select className="field w-full mt-1" value={selectedStoredResume} onChange={(e) => setSelectedStoredResume(e.target.value)}>
                  <option value="">(none)</option>
                  {resumes.map((r) => (
                    <option key={r.id} value={r.storage_path}>{r.file_name}</option>
                  ))}
                </select>
              </div>
            )}

            {selectedStoredResume ? (
              <div className="space-y-2">
                <p className="text-sm">Using stored resume: <strong>{selectedStoredResume.split('/').pop()}</strong></p>
                <div className="flex gap-2">
                  <button
                    type="button"
                    className="btn-secondary"
                    onClick={() => setSelectedStoredResume("")}
                  >
                    Use pasted text instead
                  </button>
                </div>
              </div>
            ) : file ? (
              <div className="space-y-2">
                <p className="text-sm">Using uploaded file: <strong>{file.name}</strong></p>
                <div className="flex gap-2">
                  <button
                    type="button"
                    className="btn-secondary"
                    onClick={() => {
                      setFile(null);
                      if (fileInputRef.current) fileInputRef.current.value = "";
                      setResumeText("");
                    }}
                  >
                    Use pasted text instead
                  </button>
                </div>
              </div>
            ) : (
              <textarea
                className="field h-32 resize-none"
                placeholder="Paste resume text…"
                value={resumeText}
                onChange={(e) => setResumeText(e.target.value)}
                required
              />
            )}
            
            <textarea
              className="field h-32 resize-none"
              placeholder="Paste job description…"
              value={jobDescription}
              onChange={(e) => setJobDescription(e.target.value)}
              required
            />
            <button type="submit" className="btn-primary" disabled={feedbackLoading}>
              {feedbackLoading ? "Analyzing…" : "Get feedback"}
            </button>
          </form>

          {feedback && (
            <div className="card space-y-4">
              <div>
                <p className="text-xs uppercase tracking-wide text-ink/40 mb-1">Match summary</p>
                <p className="text-sm">{feedback.match_summary}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wide text-ink/40 mb-1">Strengths</p>
                <ul className="text-sm list-disc list-inside space-y-1">
                  {feedback.strengths.map((s, i) => <li key={i}>{s}</li>)}
                </ul>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wide text-ink/40 mb-1">Gaps</p>
                <ul className="text-sm list-disc list-inside space-y-1">
                  {feedback.gaps.map((g, i) => <li key={i}>{g}</li>)}
                </ul>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wide text-ink/40 mb-1">Suggested edits</p>
                <ul className="text-sm list-disc list-inside space-y-1">
                  {feedback.suggested_edits.map((s, i) => <li key={i}>{s}</li>)}
                </ul>
              </div>
            </div>
          )}
        </>
      )}

      {error && <p className="text-sm text-danger">{error}</p>}
    </div>
  );
}
