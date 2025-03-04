import { ReactNode } from 'react';

interface TableLabelProps {
    children: ReactNode;
}

export function TableLabel({ children }: TableLabelProps) {
    return <h2 className="text-center text-primary-foreground">{children}</h2>;
}
