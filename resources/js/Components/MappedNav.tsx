import { Link } from '@inertiajs/react';

interface NavItem {
    order: number;
    label: string;
    page: string;
}
export default function MappedNav() {
    const currentRoute = route().current() === 'home' ? '' : route().current();
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
        <div className="flex h-full flex-row items-center justify-between whitespace-nowrap">
            {navItems.map((item) => {
                const colorCss =
                    '/' + currentRoute === item.page
                        ? 'opacity-50'
                        : 'opacity-100';
                return (
                    <Link
                        key={item.page}
                        className={
                            'whitespace-nowrap font-display text-[1.25rem] sm:pb-2 md:text-[1.5rem] lg:text-[1.75rem] xl:text-[2rem] ' +
                            colorCss
                        }
                        href={item.page}
                    >
                        {item.label}
                    </Link>
                );
            })}
        </div>
    );
}
