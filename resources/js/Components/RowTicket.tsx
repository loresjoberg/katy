import SmallImage from '@/Components/SmallImage';
import { Link } from '@inertiajs/react';
import { ReactNode } from 'react';

interface RowTicketProps {
    imageUrl: string;
    title: string;
    destination: string;
    children: ReactNode;
}

export function RowTicket({
    imageUrl,
    title,
    destination,
    children,
}: RowTicketProps) {
    return (
        <Link
            href={destination}
            className="flex flex-row gap-4 rounded bg-card p-4 sm:basis-[48%] lg:basis-full"
        >
            <SmallImage imageUrl={imageUrl} />
            <div>
                <h3 className="mb-1">{title}</h3>
                {children}
            </div>
        </Link>
    );
}
