import Link from "next/link";

export function Navbar() {
    return (
        <header className="backdrop-blur-sm">
            <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
                <Link
                    href="/"
                    className="text-3xl font-extrabold text-white bg-clip-text  tracking-widest shadow-sm"
                >
                    SoulStar
                </Link>
                <div className="flex items-center space-x-4">
                    <Link
                        href="/kundli-generation"
                        className="text-white hover:text-white bg-white/10 px-4 py-1.5 rounded-xl shadow-sm text-lg"
                    >
                        Try Now
                    </Link>
                </div>
            </nav>
        </header>
    );
}
