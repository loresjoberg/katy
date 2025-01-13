import { Link } from '@inertiajs/react';
import { FacebookLogo, InstagramLogo } from '@phosphor-icons/react';

export default function Footer() {
    return (
        <div className="mt-8 min-h-64 bg-muted">
            <div className="mx-auto flex max-w-4xl flex-col justify-between px-8 py-4 text-xl sm:flex-row">
                <div className="sm:text-md mb-2 text-sm">
                    Copyright &copy; 2025 Katy's Corner Cafe
                </div>
                <div className="sm:text-md mb-4 flex flex-col text-sm">
                    <Link href="/">Home</Link>
                    <Link href="/menu">Menu</Link>
                    <Link href="/">Hours & Location</Link>
                    <Link href="/menu">About</Link>
                    <Link href="/menu">Contact</Link>
                </div>
                <div className="flex justify-center gap-8 text-3xl sm:flex-row sm:justify-between">
                    <Link href="https://www.facebook.com/katyscornerseattle">
                        <FacebookLogo size={32} weight="fill" />
                    </Link>
                    <Link href="https://www.instagram.com/Katyscafesea/">
                        <InstagramLogo size={32} weight="fill" />
                    </Link>
                </div>
            </div>
        </div>
    );
}
