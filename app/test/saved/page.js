"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function SavedQuestionsPage() {
  const [items, setItems] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    try {
      const existing = JSON.parse(localStorage.getItem('savedQuestions') || '[]');
      setItems(existing.reverse());
    } catch (e) {
      setItems([]);
    }
  }, []);

  function removeItem(id) {
    const remaining = items.filter((i) => i.id !== id);
    setItems(remaining);
    localStorage.setItem('savedQuestions', JSON.stringify(remaining.reverse()));
  }

  function updateAnswer(id, value) {
    const next = items.map((it) => (it.id === id ? { ...it, savedAnswer: value } : it));
    setItems(next);
    localStorage.setItem('savedQuestions', JSON.stringify(next.reverse()));
  }

  const visible = items.filter((it) => (filter ? it.topic.toLowerCase().includes(filter.toLowerCase()) || it.question.toLowerCase().includes(filter.toLowerCase()) : true));

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="font-display text-xl">Saved Questions</h1>
          <p className="text-sm text-ink/60">Review or revise saved question-answer pairs.</p>
        </div>
        <div>
          <Link href="/test" className="btn-secondary">Back to Test</Link>
        </div>
      </div>

      <div className="card">
        <input
          className="field w-full"
          placeholder="Filter by topic or question..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
      </div>

      <div className="space-y-3">
        {visible.length === 0 && <p className="text-sm text-ink/60">No saved questions.</p>}
        {visible.map((it) => (
          <div key={it.id} className="card p-3">
            <div className="flex items-start justify-between">
              <div className="w-full">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between sm:gap-3">
                  <strong>{it.topic}</strong>
                  <span className="text-xs text-ink/50">{new Date(it.date).toLocaleString()}</span>
                </div>
                <p className="mt-2 font-medium">{it.question}</p>
                <p className="mt-2 text-sm text-ink/60">Correct: {it.correctAnswer}</p>
                <div className="mt-2 flex flex-col gap-2 sm:flex-row sm:items-center">
                  <label className="text-sm text-ink/60">Your saved answer:</label>
                  <input className="field" value={it.savedAnswer || ""} onChange={(e) => updateAnswer(it.id, e.target.value)} />
                </div>
              </div>
            </div>

            <div className="mt-3 flex justify-end gap-2">
              <button onClick={() => removeItem(it.id)} className="text-sm text-danger">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
