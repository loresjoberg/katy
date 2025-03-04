import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface CardProps {
    className?: string;
    children: ReactNode;
}

export default function Card({ className, children }: CardProps) {
    return (
        <div className={cn('rounded bg-card p-4', className)}>{children}</div>
    );
}
