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
        <div className="min-h-screen md:flex">
          <aside className="border-b border-line bg-transparent px-4 py-3 md:w-64 md:border-b-0 md:border-r md:p-4">
            <div className="flex items-center justify-between md:mb-6 md:block">
              <a href="/" className="font-display text-lg tracking-tight text-white">placement tracker<span className="text-signal">.</span></a>
            </div>

            <nav className="-mx-1 mt-3 flex gap-1 overflow-x-auto pb-1 text-sm md:mx-0 md:mt-0 md:flex-col md:gap-2 md:overflow-visible md:pb-0">
              <Link href="/dashboard" className="whitespace-nowrap rounded-md px-3 py-2 hover:bg-white/10">Dashboard</Link>
              <Link href="/companies" className="whitespace-nowrap rounded-md px-3 py-2 hover:bg-white/10">Companies</Link>
              <Link href="/resume" className="whitespace-nowrap rounded-md px-3 py-2 hover:bg-white/10">Resumes</Link>
              <Link href="/study" className="whitespace-nowrap rounded-md px-3 py-2 hover:bg-white/10">Study</Link>
              <Link href="/flashcards" className="whitespace-nowrap rounded-md px-3 py-2 hover:bg-white/10">Flashcards</Link>
              <Link href="/test" className="whitespace-nowrap rounded-md px-3 py-2 hover:bg-white/10">Test</Link>
            </nav>

            <div className="mt-6 hidden text-xs text-ink/60 md:block">v0.1 • Local</div>
          </aside>

          <main className="min-w-0 flex-1 p-4 sm:p-6 md:p-8">
            <div className="mx-auto max-w-6xl">{children}</div>
          </main>
        </div>
      </body>
    </html>
  );
}
