import { cn } from '@/lib/utils';

interface Card {
    padding: string;
    className: string;
}

export default function Card({ className, children }) {
    return (
        <div className={cn('rounded bg-card p-4 text-sm', className)}>
            {children}
        </div>
    );
}
