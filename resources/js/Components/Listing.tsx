interface ListingProps {
    label: string;
    children: any;
}

export default function Listing({ label, children }: ListingProps) {
    return (
        <div className="flex flex-row justify-start gap-2">
            <div className="w-24 text-right font-bold">{label}</div>
            <div>{children}</div>
        </div>
    );
}
