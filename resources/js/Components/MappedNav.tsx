import { Link } from '@inertiajs/react';

interface NavItem {
    order: number;
    label: string;
    page: string;
}

interface MappedNavProps {
    className?: string;
}

export default function MappedNav({ className }: MappedNavProps) {
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
        <div className="mappedNav">
            {navItems.map((item) => {
                const colorCss =
                    '/' + currentRoute === item.page
                        ? 'opacity-50'
                        : 'opacity-100';
                return (
                    <Link
                        key={item.page}
                        className={
                            'whitespace-nowrap font-display text-[1.25rem] md:text-[1.75rem] lg:text-[2rem] ' +
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
