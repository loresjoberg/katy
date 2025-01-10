import FixedHead from '@/Components/FixedHead';
import Footer from '@/Components/Footer';
import { Head } from '@inertiajs/react';

export default function Layout({ children }) {
    return (
        <>
            <Head>
                <title>Café Four-Top</title>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <div className="relative min-h-[1200px] bg-secondary">
                <FixedHead />
                <main className="main pt-40">{children}</main>
                <Footer />
            </div>
        </>
    );
}
