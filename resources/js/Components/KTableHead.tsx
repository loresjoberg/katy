import { TableHead } from '@/Components/ui/table';

export default function KTableHead({ children }) {
    return <TableHead className="px-1 sm:px-4">{children}</TableHead>;
}
