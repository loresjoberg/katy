interface ListingProps {
    label: string;
    children: any;
}

export default function Listing({ label, children }: ListingProps) {
    return (
        <div className="flex w-full flex-row gap-2">
            <div className="basis-24 text-right font-bold">{label}</div>
            <div className="basis-[80%]">{children}</div>
        </div>
    );
}
