import { cn } from '@/lib/utils';

interface ContainerProps {
    className?: string;
}

export default function Container({ className, children }: ContainerProps) {
    return (
        <div
            className={cn(
                'relative mx-auto my-4 h-full max-w-5xl px-4 py-4',
                className,
            )}
        >
            {children}
        </div>
    );
}
