import { TableHead } from '@/Components/ui/table';
import { ReactNode } from 'react';

interface KTableHeadProps {
    children: ReactNode;
}
export default function KTableHead({ children }: KTableHeadProps) {
    return <TableHead className="px-1 sm:px-4">{children}</TableHead>;
}
