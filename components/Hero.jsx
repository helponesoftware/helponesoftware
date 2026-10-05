import Link from 'next/link';

export default function Hero({
    badge,
    title,
    titleAccent,
    subtitle,
    microLine,
    primaryCtaText = "Schedule Free Demo",
    primaryCtaLink = "/contact-us",
    onPrimaryCtaClick,
    secondaryCtaText = "Claim Founders Rate – $499/mo forever",
    secondaryCtaLink = "/contact-us",
    onSecondaryCtaClick,
    secondaryCtaIcon,
    hideSecondaryCta = false,
    hideButtons = false,
    children
}) {
    const bgImage = "https://picsum.photos/id/1015/2000/1200";
    const isExternalSecondary = secondaryCtaLink && (secondaryCtaLink.startsWith('http://') || secondaryCtaLink.startsWith('https://'));

    return (
        <section className="hero-bg min-h-[60vh] flex items-center relative">
            <div
                className="absolute inset-0 bg-cover opacity-10"
                style={{ backgroundImage: `url('${bgImage}')` }}
            />
            <div className="max-w-screen-2xl mx-auto px-6 pt-20 pb-16 relative z-10 w-full flex justify-center">
                <div className="w-full max-w-5xl text-left">
                    {badge && (
                        <div data-aos="fade-up" className="inline-flex items-center gap-2 bg-[#1a2640]/50 border border-white/10 backdrop-blur-md px-5 py-2 rounded-3xl text-sm mb-8">
                            <div className="w-2 h-2 bg-[#00E6C3] rounded-full animate-pulse"></div>
                            <span className="font-medium text-white/90">{badge}</span>
                        </div>
                    )}
                    <h1 data-aos="fade-up" data-aos-delay="100" className="heading-font text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-none tracking-tighter mb-6">
                        {title}
                        {titleAccent && (
                            <>
                                <br />
                                <span className="text-[#00E6C3]">{titleAccent}</span>
                            </>
                        )}
                    </h1>
                    {subtitle && (
                        <p data-aos="fade-up" data-aos-delay="200" className={`text-xl md:text-2xl text-white/80 max-w-2xl text-left ${microLine ? 'mb-6' : 'mb-12'}`}>
                            {subtitle}
                        </p>
                    )}
                    {microLine && (
                        <p data-aos="fade-up" data-aos-delay="250" className="text-sm md:text-base text-white/60 max-w-2xl mb-12 text-left tracking-wide">
                            {microLine}
                        </p>
                    )}

                    {/* If custom children provided (e.g. FAQ search bar), render them. Otherwise standard buttons.*/}
                    {children ? (
                        <div data-aos="fade-up" data-aos-delay="300" className="flex flex-col sm:flex-row items-center sm:items-start justify-start gap-4 mt-8 w-full">
                            {children}
                        </div>
                    ) : !hideButtons && (
                        <div data-aos="fade-up" data-aos-delay="300" className="flex flex-col sm:flex-row items-stretch sm:items-center justify-start gap-4 mt-8 w-full">
                            {onPrimaryCtaClick ? (
                                <button
                                    type="button"
                                    onClick={onPrimaryCtaClick}
                                    className="w-full sm:w-auto px-8 py-4 md:px-10 md:py-5 bg-[#00E6C3] hover:bg-white text-[#0A1428] text-base md:text-lg font-semibold rounded-2xl flex items-center justify-center gap-3 group transition-colors cursor-pointer"
                                >
                                    {primaryCtaText} <span className="text-lg md:text-xl group-hover:translate-x-1 transition-transform">→</span>
                                </button>
                            ) : (
                                <Link href={primaryCtaLink} className="w-full sm:w-auto px-8 py-4 md:px-10 md:py-5 bg-[#00E6C3] hover:bg-white text-[#0A1428] text-base md:text-lg font-semibold rounded-2xl flex items-center justify-center gap-3 group transition-colors [text-decoration:none]">
                                    {primaryCtaText} <span className="text-lg md:text-xl group-hover:translate-x-1 transition-transform">→</span>
                                </Link>
                            )}
                            {!hideSecondaryCta && (
                                onSecondaryCtaClick ? (
                                    <button
                                        type="button"
                                        onClick={onSecondaryCtaClick}
                                        className="w-full sm:w-auto px-8 py-4 md:px-10 md:py-5 bg-transparent border border-white/60 hover:border-[#00E6C3] hover:bg-white/5 text-white text-base md:text-lg font-semibold rounded-2xl flex items-center justify-center gap-2.5 transition-all cursor-pointer"
                                    >
                                        {secondaryCtaIcon || <i className="fas fa-play text-xs sm:text-sm text-[#00E6C3]"></i>}
                                        {secondaryCtaText}
                                    </button>
                                ) : isExternalSecondary ? (
                                    <a
                                        href={secondaryCtaLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full sm:w-auto px-8 py-4 md:px-10 md:py-5 bg-transparent border border-white/60 hover:border-[#00E6C3] hover:bg-white/5 text-white text-base md:text-lg font-semibold rounded-2xl flex items-center justify-center gap-2 transition-all [text-decoration:none]"
                                    >
                                        {secondaryCtaText}
                                    </a>
                                ) : (
                                    <Link
                                        href={secondaryCtaLink}
                                        className="w-full sm:w-auto px-8 py-4 md:px-10 md:py-5 bg-transparent border border-white/60 hover:border-[#00E6C3] hover:bg-white/5 text-white text-base md:text-lg font-semibold rounded-2xl flex items-center justify-center gap-2 transition-all [text-decoration:none]"
                                    >
                                        {secondaryCtaText}
                                    </Link>
                                )
                            )}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
