export default function TrustBar({ items }) {
    return (
        <div className="bg-black/50 py-4 md:py-6 border-b border-white/10">
            <div className="max-w-screen-2xl mx-auto px-4 md:px-6 grid grid-cols-2 md:flex md:flex-wrap justify-center items-center gap-x-6 md:gap-x-12 gap-y-3 md:gap-y-4 opacity-70 text-xs md:text-sm text-center">
                {items.map((item) => (
                    <div key={item}>{item}</div>
                ))}
            </div>
        </div>
    );
}
