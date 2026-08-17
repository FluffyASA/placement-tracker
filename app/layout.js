import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Placement Tracker",
  description: "Track applying deadlines, test dates, and resumes for placement season.",
  manifest: "/manifest.json",
};

export const viewport = {
  themeColor: "#0b0f1f",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-body min-h-screen">
        <div className="flex min-h-screen">
          <aside className="w-64 border-r border-line bg-transparent p-4">
            <div className="mb-6 flex items-center gap-3">
              <a href="/" className="font-display text-lg tracking-tight text-white">placement tracker<span className="text-signal">.</span></a>
            </div>

            <nav className="flex flex-col gap-2 text-sm">
              <Link href="/dashboard" className="px-3 py-2 rounded-md hover:bg-white/10">Dashboard</Link>
              <Link href="/companies" className="px-3 py-2 rounded-md hover:bg-white/10">Companies</Link>
              <Link href="/resume" className="px-3 py-2 rounded-md hover:bg-white/10">Resumes</Link>
              <Link href="/study" className="px-3 py-2 rounded-md hover:bg-white/10">Study</Link>
              <Link href="/flashcards" className="px-3 py-2 rounded-md hover:bg-white/10">Flashcards</Link>
              <Link href="/test" className="px-3 py-2 rounded-md hover:bg-white/10">Test</Link>
            </nav>

            <div className="mt-6 text-xs text-ink/60">v0.1 • Local</div>
          </aside>

          <main className="flex-1 p-8">
            <div className="mx-auto max-w-6xl">{children}</div>
          </main>
        </div>
      </body>
    </html>
  );
}
