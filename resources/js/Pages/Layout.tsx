import FixedHead from '@/Components/FixedHead';
import FixedHeadMobile from '@/Components/FixedHeadMobile';
import Footer from '@/Components/Footer';
import { Head } from '@inertiajs/react';

export default function Layout({ children }) {
    return (
        <>
            <Head>
                <title>
                    Katy's Corner Cafe | Your Home for Great Coffee and
                    Sandwiches
                </title>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Amatic+SC:wght@400;700&family=Caveat+Brush&family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <div className="relative min-h-[1200px]">
                <div className="md:hidden">
                    <FixedHeadMobile />
                </div>
                <div className="hidden md:block">
                    <FixedHead />
                </div>
                <main className="pt-[5rem]">{children}</main>
                <Footer />
            </div>
        </>
    );
}
