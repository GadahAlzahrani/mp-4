import Link from "next/link";

export default function Header() {
    const link = "text-lg font-semibold px-4 hover:underline";
    return (
        <header className="flex justify-center gap-6 bg-blue-200 p-4">
            <Link href="/" className={link}>Home</Link>
            <Link href="/about" className={link}>About</Link>
        </header>
    );
}
