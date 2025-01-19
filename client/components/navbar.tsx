import Link from "next/link";

export function Navbar() {
    return (
        <header className="backdrop-blur-sm py-4">
            <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
                <Link
                    href="/"
                    className="text-3xl font-extrabold text-white bg-clip-text  tracking-widest shadow-sm"
                >
                    SoulStar
                </Link>
            </nav>
        </header>
    );
}
