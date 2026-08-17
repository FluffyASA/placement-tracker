"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { findModule, findSection } from "@/lib/studyData";

function StudyViewContent() {
  const params = useSearchParams();

  const moduleId = params.get("module");
  const topicId = params.get("topic");

  const module = moduleId ? findModule(moduleId) : null;
  const section =
    module && topicId ? findSection(moduleId, topicId) : null;

  if (!module || !section) {
    return (
      <div className="card">
        <p className="text-sm text-ink/60">
          Content not found. Go back to{" "}
          <Link href="/study">Study Materials</Link>.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-display text-xl">{section.title}</h1>
          <p className="text-sm text-ink/60">{module.title}</p>
        </div>

        <Link href="/study" className="btn-secondary">
          Back
        </Link>
      </div>

      <div className="card">
        <p className="text-sm text-ink/80">{section.article}</p>
      </div>
    </div>
  );
}

export default function StudyView() {
  return (
    <Suspense fallback={<div>Loading study material...</div>}>
      <StudyViewContent />
    </Suspense>
  );
}