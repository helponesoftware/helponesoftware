import { BookDemoButton } from './CtaButtons';

/**
 * CtaBanner – reusable full-width teal call-to-action banner.
 *
 * Props:
 *   title    {string|ReactNode}  – main headline
 *   subtitle {string|ReactNode}  – sub-copy below the headline
 *   buttonText {string}          – button label (default: "Book Your Free Demo Today")
 *   buttonClassName {string}     – optional extra classes for the button
 */
export default function CtaBanner({
    title = "Your mission is too important for average software.",
    subtitle = "Let\u2019s make it extraordinary.",
    buttonText = "Book Your Free Demo Today",
    buttonClassName = "",
}) {
    return (
        <div className="bg-[#00E6C3] text-[#0A1428] py-12 md:py-24 text-center">
            <div className="max-w-2xl mx-auto px-4 md:px-6">
                <h2 data-aos="fade-up" className="heading-font text-3xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
                    {title}
                </h2>
                {subtitle && <p className="text-lg md:text-2xl mt-4 md:mt-6">{subtitle}</p>}
                <BookDemoButton data-aos="fade-up" data-aos-anchor-placement="bottom-bottom"
                    className={`mt-8 md:mt-12 px-8 py-4 md:px-16 md:py-8 bg-[#0A1428] text-white text-base md:text-2xl font-semibold rounded-3xl hover:scale-105 transition-all ${buttonClassName}`}
                >
                    {buttonText}
                </BookDemoButton>
            </div>
        </div>
    );
}
