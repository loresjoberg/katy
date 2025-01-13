import { TableCell } from '@/Components/ui/table';

export default function KTableCell({ children }) {
    return (
        <TableCell className="sm:text-md p-1 text-xs font-medium text-primary-foreground sm:p-4">
            {children}
        </TableCell>
    );
}
