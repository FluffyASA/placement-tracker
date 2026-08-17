import Link from "next/link";

const brandNames = ["OS", "Networks", "DBMS", "Data Structures", "System Design", "ML & AI", "Full Stack"];

export default function LandingPage() {
  return (
    <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#0a0d1d] px-4 py-10 text-white shadow-[0_0_80px_rgba(116,72,255,0.35)] md:px-8 md:py-14">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(147,51,234,0.38),_transparent_35%),radial-gradient(circle_at_top,_rgba(168,85,247,0.2),_transparent_30%),linear-gradient(135deg,#090d1b_0%,#140f29_50%,#0b0f1f_100%)]" />
      <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/25 blur-[110px]" />

      <div className="relative z-10 mx-auto max-w-4xl">
        <div className="mb-8 flex justify-center">
         
        </div>

        <div className="text-center">
          <h1 className="mx-auto max-w-3xl font-display text-5xl leading-none tracking-[-0.06em] text-white md:text-7xl">
            Prepare peacefully,
            <br />
            Track efficiently
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-sm text-slate-300 md:text-base">
            Stay on top of interview deadlines, resume feedback, and coding prep with one clean platform built for placement season.
          </p>

          <div className="mt-8 flex justify-center">
            <Link
              href="/dashboard"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-medium text-slate-900 shadow-[0_12px_35px_rgba(255,255,255,0.2)] transition-opacity hover:opacity-90"
            >
              Go to Dashboard
            </Link>
          </div>
        </div>

        <div className="mt-16">
          <p className="text-center text-xs uppercase tracking-[0.2em] text-slate-400">
            Built for students preparing in software, AI, and systems
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-5 text-slate-200/80">
            {brandNames.map((name) => (
              <div
                key={name}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium tracking-[0.14em] text-slate-200/90 backdrop-blur-sm"
              >
                {name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
