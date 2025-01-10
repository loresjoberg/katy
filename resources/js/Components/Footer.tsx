import { FacebookLogo, InstagramLogo } from '@phosphor-icons/react';

export default function Footer() {
    return (
        <div className="mt-8 min-h-64 bg-background">
            <div className="mx-auto flex max-w-6xl flex-row justify-between px-8 py-4 text-xl">
                <div>Copyright &copy; 2025 Lore Sjöberg</div>
                <div className="flex flex-row justify-between gap-8 text-3xl">
                    <FacebookLogo size={32} weight="fill" />
                    <InstagramLogo size={32} weight="fill" />
                </div>
            </div>
        </div>
    );
}
