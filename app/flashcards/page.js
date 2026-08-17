"use client";

import { useMemo, useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { learningTopics, sampleLearningData } from "@/lib/learningData";

export default function FlashcardsPage() {
  const [selectedTopic, setSelectedTopic] = useState(learningTopics[0]);
  const [flippedCards, setFlippedCards] = useState({});

  const cards = useMemo(() => {
    return sampleLearningData.flashcards[selectedTopic] || [];
  }, [selectedTopic]);

  function toggleCard(cardId) {
    setFlippedCards((prev) => ({
      ...prev,
      [cardId]: !prev[cardId],
    }));
  }

  const search = useSearchParams();
  const showSavedOnly = !!search?.get("saved");

  const [saved, setSaved] = useState(() => {
    try {
      if (typeof window === "undefined") return {};
      return JSON.parse(localStorage.getItem("savedFlashcards") || "{}");
    } catch (e) {
      return {};
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("savedFlashcards", JSON.stringify(saved));
    } catch (e) {}
  }, [saved]);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-display text-xl mb-2">Flashcards</h1>
          <p className="text-sm text-ink/60">Pick a topic and click any card to flip between the question and the answer.</p>
        </div>
        <div>
          <Link href="/flashcards?saved=true" className="btn-secondary">Saved Flashcards</Link>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 items-center">
        {learningTopics.map((topic) => {
          const slug = topic.toLowerCase().replace(/\s+/g, "-");
          return (
            <Link key={topic} href={`/flashcards/${encodeURIComponent(slug)}`} className={`pill border transition-colors`}>
              {topic}
            </Link>
          );
        })}

        <div className="ml-auto flex items-center gap-2">
          <span className="text-sm text-ink/60">View:</span>
          <button
            className={`pill ${showSavedOnly ? "bg-ink text-paper" : "bg-white text-ink border-line"}`}
            onClick={() => {
              const url = new URL(window.location.href);
              if (showSavedOnly) url.searchParams.delete("saved");
              else url.searchParams.set("saved", "true");
              window.location.href = url.toString();
            }}
          >
            {showSavedOnly ? "Saved" : "All"}
          </button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {(showSavedOnly ? cards.filter((c) => saved[c.id]) : cards).map((card) => {
          const isFlipped = !!flippedCards[card.id];

          return (
            <div key={card.id} className={`relative ${isFlipped ? "is-flipped" : ""}`}>
                <div
                  role="button"
                  tabIndex={0}
                  onClick={() => toggleCard(card.id)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      toggleCard(card.id);
                    }
                  }}
                  className={`flashcard ${isFlipped ? "is-flipped" : ""}`}
                >
                  <div className="flashcard-inner">
                  <div className="flashcard-face flashcard-front">
                    <div className="flex justify-between items-start">
                      <span className="text-xs uppercase tracking-wide text-ink/50">{selectedTopic}</span>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSaved((s) => ({ ...s, [card.id]: !s[card.id] }));
                        }}
                        className="text-sm text-ink/60 bg-transparent border-none"
                      >
                        {saved[card.id] ? "★" : "☆"}
                      </button>
                    </div>
                    <p className="mt-4 text-lg font-medium leading-relaxed">{card.question}</p>
                    <p className="mt-6 text-xs text-ink/50">Click to reveal answer</p>
                  </div>

                  <div className="flashcard-face flashcard-back">
                    <div className="flex justify-between items-start">
                      <span className="text-xs uppercase tracking-wide text-ink/50">Answer</span>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSaved((s) => ({ ...s, [card.id]: !s[card.id] }));
                        }}
                        className="text-sm text-ink/60 bg-transparent border-none"
                      >
                        {saved[card.id] ? "★" : "☆"}
                      </button>
                    </div>
                    <p className="mt-4 text-base leading-relaxed">{card.answer}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
