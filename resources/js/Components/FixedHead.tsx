import Container from '@/Components/Container';
import { Link } from '@inertiajs/react';

interface NavItem {
    order: number;
    label: string;
    page: string;
}
export default function FixedHead() {
    const currentRoute = route().current() === 'home' ? '' : route().current();
    console.log('currentRoute', currentRoute);
    const navItems: NavItem[] = [
        {
            order: 1,
            label: 'Home',
            page: '/',
        },
        {
            order: 2,
            label: 'Menu',
            page: '/menu',
        },
        {
            order: 3,
            label: 'Hours & Location',
            page: '/hours-and-location',
        },
        {
            order: 4,
            label: 'About',
            page: '/about',
        },
        {
            order: 5,
            label: 'Contact',
            page: '/contact',
        },
    ];

    return (
        <div className="fixed z-10 h-40 w-full border-b-2 border-black bg-primary shadow-lg">
            <Container>
                <div className="flex h-full max-h-32 flex-row justify-between">
                    <div className="header-logo h-full max-h-32">
                        <img
                            className="h-full"
                            src="/storage/cafe-4-top-logo.png"
                            alt="Cafe 4-Top"
                        />
                    </div>
                    <div className="flex h-full w-3/4 flex-row items-center justify-between gap-8 py-4">
                        {navItems.map((item) => {
                            const colorCss =
                                '/' + currentRoute === item.page
                                    ? 'opacity-50'
                                    : 'opacity-100';
                            console.log('colorCss', colorCss);
                            return (
                                <Link
                                    key={item.page}
                                    className={'text-2xl font-bold ' + colorCss}
                                    href={item.page}
                                >
                                    {item.label}
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </Container>
        </div>
    );
}
