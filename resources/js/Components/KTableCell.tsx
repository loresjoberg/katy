import { TableCell } from '@/Components/ui/table';
import { ReactNode } from 'react';

interface KTableCellProps {
    children: ReactNode;
}
export default function KTableCell({ children }: KTableCellProps) {
    return (
        <TableCell className="sm:text-md p-1 text-xs font-medium text-primary-foreground sm:p-4">
            {children}
        </TableCell>
    );
}
