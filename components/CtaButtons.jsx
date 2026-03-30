import Link from 'next/link';

const CONTACT_URL = '/contact-us';

// `block` → w-full works; overridden by `flex`/`inline-flex` in className
// `text-center` → centers text; overridden by `text-left`/`text-right` in className if needed
// `[text-decoration:none]` → removes browser anchor underline
const base = 'block text-center [text-decoration:none] cursor-pointer';

export function BookDemoButton({ className, children }) {
    return (
        <Link href={CONTACT_URL} className={`${base} ${className}`}>
            {children}
        </Link>
    );
}

export function ClaimFoundersButton({ className, children }) {
    return (
        <Link href={CONTACT_URL} className={`${base} ${className}`}>
            {children}
        </Link>
    );
}

export function WatchVideoButton({ className, children }) {
    return (
        <Link href={CONTACT_URL} className={`${base} ${className}`}>
            {children}
        </Link>
    );
}
