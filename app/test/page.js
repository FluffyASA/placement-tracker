"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { learningTopics } from "@/lib/learningData";

// Previously used a static pool. Now the client requests AI-generated questions.

export default function TestPage() {
  const [selectedTopic, setSelectedTopic] = useState(learningTopics[0]);
  const [questionSet, setQuestionSet] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [loadingQuestions, setLoadingQuestions] = useState(false);
  const [genError, setGenError] = useState(null);
  const [isSaved, setIsSaved] = useState(false);
  const [savedMap, setSavedMap] = useState(() => {
    try {
      if (typeof window === 'undefined') return {};
      const arr = JSON.parse(localStorage.getItem('savedQuestions') || '[]');
      const m = {};
      arr.forEach((it) => { m[`${it.topic}||${it.question}`] = true; });
      return m;
    } catch (e) {
      return {};
    }
  });

  function startNewTest(topic = selectedTopic) {
    setLoadingQuestions(true);
    setGenError(null);
    fetch('/api/generate-questions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ topic, count: 20 }),
    })
      .then((r) => r.json())
      .then((data) => {
        if (data.error) throw new Error(data.error);
        const qs = (data.questions || []).map((q, i) => ({ ...q, tempId: q.id || `${topic}-${i}-${Date.now()}` }));
        setQuestionSet(qs);
        setCurrentIndex(0);
        setAnswers({});
        setSubmitted(false);
        setScore(0);
        setIsSaved(false);
      })
      .catch((err) => setGenError(err.message || String(err)))
      .finally(() => setLoadingQuestions(false));
  }

  useEffect(() => {
    // removed auto-start on topic change — user must explicitly start the test
  }, []);

  const currentQuestion = questionSet[currentIndex];
  const totalQuestions = questionSet.length;
  const answeredCount = Object.keys(answers).length;

  const percentage = useMemo(() => {
    if (!totalQuestions) return 0;
    return Math.round((answeredCount / totalQuestions) * 100);
  }, [answeredCount, totalQuestions]);

  function chooseAnswer(option) {
    if (submitted) return;
    setAnswers((prev) => ({
      ...prev,
      [currentIndex]: option,
    }));
  }

  function nextQuestion() {
    if (currentIndex < totalQuestions - 1) {
      setCurrentIndex((prev) => prev + 1);
      return;
    }
    submitTest();
  }

  function submitTest() {
    const finalScore = questionSet.reduce((total, question, index) => {
      return total + (answers[index] === question.answer ? 1 : 0);
    }, 0);

    setScore(finalScore);
    setSubmitted(true);
  }

  function toggleSaveQuestion(question, idx) {
    try {
      const key = 'savedQuestions';
      const existing = JSON.parse(localStorage.getItem(key) || '[]');
      const identity = `${selectedTopic}||${question.question}`;
      const foundIndex = existing.findIndex((it) => it.topic === selectedTopic && it.question === question.question);

      if (foundIndex >= 0) {
        // remove
        existing.splice(foundIndex, 1);
        localStorage.setItem(key, JSON.stringify(existing));
        setSavedMap((s) => { const copy = { ...s }; delete copy[identity]; return copy; });
      } else {
        const item = {
          id: `q-${selectedTopic}-${idx}-${Date.now()}`,
          topic: selectedTopic,
          date: new Date().toISOString(),
          question: question.question,
          correctAnswer: question.answer,
          savedAnswer: answers[idx] || null,
        };
        existing.push(item);
        localStorage.setItem(key, JSON.stringify(existing));
        setSavedMap((s) => ({ ...s, [identity]: true }));
      }
    } catch (e) {
      // ignore
    }
  }

  // Inline status messages instead of early returns so the user can select topic first
  const statusMessage = loadingQuestions ? (
    <p className="text-sm text-ink/60">Generating questions…</p>
  ) : genError ? (
    <p className="text-sm text-danger">Error: {genError}</p>
  ) : questionSet.length === 0 && !submitted ? (
    <p className="text-sm text-ink/60">No questions yet. Choose a topic and click "Start test".</p>
  ) : null;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-xl mb-2">Practice Test</h1>
        <p className="text-sm text-ink/60">
          Choose a topic, answer 20 questions, and review your final score.
        </p>
      </div>

      <div className="card space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <label className="block text-sm font-medium text-ink/70">Topic</label>
          <Link href="/test/saved" className="btn-secondary">Saved questions</Link>
        </div>
        <select
          className="field w-full min-w-0 sm:w-auto sm:min-w-[180px]"
          value={selectedTopic}
          onChange={(e) => setSelectedTopic(e.target.value)}
        >
          {learningTopics.map((topic) => (
            <option key={topic} value={topic}>
              {topic}
            </option>
          ))}
        </select>
        <div className="mt-3">
          <button
            type="button"
            className="btn-primary"
            onClick={() => startNewTest(selectedTopic)}
            disabled={loadingQuestions}
          >
            Start test
          </button>
        </div>
      </div>

      {statusMessage}

      {!submitted ? (
        questionSet.length > 0 ? (
          <div className="card space-y-5">
            <div className="flex flex-wrap items-center justify-between gap-2 text-sm text-ink/60">
              <span>
                Question {currentIndex + 1} / {totalQuestions}
              </span>
              <span>{percentage}% answered</span>
            </div>

            <div className="h-2 rounded-full bg-line overflow-hidden">
              <div
                className="h-full bg-signalDark rounded-full transition-all"
                style={{ width: `${((currentIndex + 1) / totalQuestions) * 100}%` }}
              />
            </div>

            <div className="space-y-3">
              <p className="text-lg font-medium leading-relaxed">{currentQuestion.question}</p>

              {currentQuestion.options.map((option) => {
                const isSelected = answers[currentIndex] === option;

                return (
                  <button
                    key={option}
                    type="button"
                    onClick={() => chooseAnswer(option)}
                    className={`w-full text-left border rounded-card px-4 py-3 text-sm transition-colors ${
                      isSelected
                        ? "bg-signal/10 border-signalDark text-signalDark"
                        : "bg-card border-line hover:border-ink text-ink/80"
                    }`}
                  >
                    {option}
                  </button>
                );
              })}
            </div>

            <div className="flex justify-end">
              <button
                type="button"
                onClick={nextQuestion}
                className="btn-primary"
                disabled={!answers[currentIndex]}
              >
                {currentIndex === totalQuestions - 1 ? "Submit test" : "Next question"}
              </button>
            </div>
          </div>
        ) : null
      ) : (
        <div className="card space-y-5">
          <div>
            <p className="text-xs uppercase tracking-wide text-ink/50">Results</p>
            <div className="flex flex-wrap items-center gap-3">
              <h2 className="font-display text-2xl mt-2">
                {score} / {totalQuestions}
              </h2>
              <Link href="/test/saved" className="ml-2 text-sm text-ink/60 hover:underline">Saved questions</Link>
              <button
                type="button"
                aria-pressed={isSaved}
                onClick={() => {
                  try {
                    const key = 'savedQuestions';
                    const existing = JSON.parse(localStorage.getItem(key) || '[]');
                    const date = new Date().toISOString();
                    // Save each question + its correct answer + user's answer
                    const toSave = questionSet.map((q, idx) => ({
                      id: `q-${selectedTopic}-${idx}-${Date.now()}`,
                      topic: selectedTopic,
                      date,
                      question: q.question,
                      correctAnswer: q.answer,
                      savedAnswer: answers[idx] || null,
                    }));

                    // append
                    const merged = existing.concat(toSave);
                    localStorage.setItem(key, JSON.stringify(merged));
                    setIsSaved(true);
                  } catch (e) {
                    // ignore
                  }
                }}
                className={`text-2xl ${isSaved ? 'text-amber-400' : 'text-ink/60'}`}
                title={isSaved ? 'Saved' : 'Save questions' }
              >
                {isSaved ? '★' : '☆'}
              </button>
            </div>
            
          </div>

          <p className="text-sm text-ink/70">
            You scored {Math.round((score / totalQuestions) * 100)}% in {selectedTopic}.
          </p>

          <div className="space-y-3">
            {questionSet.map((question, index) => {
              const userAnswer = answers[index];
              const isCorrect = userAnswer === question.answer;

              return (
                <div key={question.tempId} className="border border-line rounded-card p-3">
                  <div className="flex items-start justify-between">
                    <p className="text-sm font-medium mr-4">{index + 1}. {question.question}</p>
                    <button
                      type="button"
                      className={`text-sm ml-2 ${savedMap[`${selectedTopic}||${question.question}`] ? 'text-amber-400' : 'text-ink/60'}`}
                      onClick={() => toggleSaveQuestion(question, index)}
                      title={savedMap[`${selectedTopic}||${question.question}`] ? 'Unsave question' : 'Save question'}
                    >
                      {savedMap[`${selectedTopic}||${question.question}`] ? '★' : '☆'}
                    </button>
                  </div>
                  <p className={`mt-2 text-sm ${isCorrect ? "text-ok" : "text-danger"}`}>
                    {isCorrect ? "Correct" : `Your answer: ${userAnswer || "Not answered"}`} 
                  </p>
                  {!isCorrect && <p className="text-sm text-ink/60">Correct answer: {question.answer}</p>}
                </div>
              );
            })}
          </div>

          <button
            type="button"
            className="btn-primary"
            onClick={() => startNewTest(selectedTopic)}
          >
            Retake test
          </button>
        </div>
      )}
    </div>
  );
}
