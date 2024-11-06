interface Hprops {
    children: React.ReactNode;
}
export default function H({ children }: Hprops) {
    return (
        <h2 className="font-bold">
            <div className="inline-block p-1 bg-yellow-600 text-white mb-2">
                {children}
            </div>
        </h2>
    );
}
