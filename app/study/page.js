"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { studyModules } from "@/lib/studyData";

const STORAGE_KEY = "study-progress-v1";

export default function StudyPage() {
  const [expanded, setExpanded] = useState(() => ({}));
  const [progress, setProgress] = useState(() => ({}));

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setProgress(JSON.parse(raw));
    } catch (e) {
      // ignore
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  }, [progress]);

  function toggleExpanded(id) {
    setExpanded((s) => ({ ...s, [id]: !s[id] }));
  }

  function toggleComplete(modId, sectionId) {
    setProgress((p) => {
      const next = { ...p };
      next[modId] = next[modId] || {};
      next[modId][sectionId] = { ...(next[modId][sectionId] || {}), completed: !next[modId][sectionId]?.completed };
      return next;
    });
  }

  function toggleStar(modId, sectionId) {
    setProgress((p) => {
      const next = { ...p };
      next[modId] = next[modId] || {};
      next[modId][sectionId] = { ...(next[modId][sectionId] || {}), starred: !next[modId][sectionId]?.starred };
      return next;
    });
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-xl mb-2">Study Materials</h1>
        <p className="text-sm text-ink/60">Choose a subject, mark sections complete, and star items for revision.</p>
      </div>

      <div className="space-y-4">
        {studyModules.map((mod) => {
          const modProgress = progress[mod.id] || {};
          const completedCount = Object.values(modProgress).filter((s) => s.completed).length;
          const total = mod.sections.length;

          return (
            <div key={mod.id} className="card">
              <div
                role="button"
                tabIndex={0}
                onClick={() => toggleExpanded(mod.id)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    toggleExpanded(mod.id);
                  }
                }}
                className="w-full flex items-center justify-between text-left"
              >
                <div>
                  <div className="flex items-center gap-3">
                    <svg className="h-5 w-5 text-ink/60" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M12 5v14M5 12h14" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    <h2 className="font-medium">{mod.title}</h2>
                  </div>
                  <p className="text-xs text-ink/50">{completedCount} / {total} completed</p>
                </div>
                <div className="text-sm text-ink/60">{expanded[mod.id] ? "Collapse" : "Expand"}</div>
              </div>

              {expanded[mod.id] && (
                <div className="mt-4 space-y-2">
                  {mod.sections.map((s) => {
                    const state = modProgress[s.id] || {};
                    return (
                      <div key={s.id} className="flex items-center justify-between gap-3 border-b border-line py-3">
                        <div className="flex items-center gap-3">
                          <input
                            id={`${mod.id}-${s.id}`}
                            type="checkbox"
                            checked={!!state.completed}
                            onChange={() => toggleComplete(mod.id, s.id)}
                            className="h-4 w-4"
                          />
                          <Link href={`/study/view?module=${encodeURIComponent(mod.id)}&topic=${encodeURIComponent(s.id)}`} className="hover:underline">
                            <span className="font-medium">{s.title}</span>
                          </Link>
                        </div>

                        <div className="flex items-center gap-3">
                          <a href={s.resource} target="_blank" rel="noreferrer" className="text-sm text-ink/60 hover:text-signalDark">Resource</a>
                          <button type="button" onClick={() => toggleStar(mod.id, s.id)} className={`text-sm ${state.starred ? 'text-yellow-400' : 'text-ink/60'}`}>
                            {state.starred ? '★' : '☆'}
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
