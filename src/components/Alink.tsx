'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface AlinkProps {
    children: React.ReactNode;
    href: string;
    underline?: boolean;
    active?: boolean;
}

export default function Alink({
    children,
    href,
    underline,
    active,
}: AlinkProps) {
    const pathname = usePathname();
    const c = [
        pathname === href ? 'text-blue-500 font-bold' : '',
        underline ? 'underline' : '',
        active ? 'text-blue-500' : '',
    ]
        .filter(item => item)
        .join(' ');
    return (
        <Link className={c} href={href}>
            {children}
        </Link>
    );
}
