import Link from "next/link";

export function Navbar() {
  return (
    <header className="backdrop-blur-sm">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-pink-400 to-purple-500 tracking-widest shadow-sm">
        SoulStar
        </Link>
        <div className="flex items-center space-x-4">
          <Link
            href="/kundli-generation"
            className="text-white/90 hover:text-white"
          >
            Kundli Generation
          </Link>
          <Link
            href="/ai-recommendations"
            className="text-white/90 hover:text-white"
          >
            AI Recommendations
          </Link>
          <Link
            href="/horoscope-insights"
            className="text-white/90 hover:text-white"
          >
            Horoscope Insights
          </Link>
        </div>
      </nav>
    </header>
  );
}
