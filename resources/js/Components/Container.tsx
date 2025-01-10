export default function Container({ children }) {
    return (
        <div className="relative mx-auto h-full w-full max-w-6xl py-4">
            {children}
        </div>
    );
}
