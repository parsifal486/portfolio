import React from 'react';
import Link from 'next/link';

type MenuItem = {
    label: string;
    href: string;
    external?: boolean;
};

const items: MenuItem[] = [
    { label: 'Things I believe', href: '/beliefs' },
    { label: 'Readiamond', href: 'https://readiamond.ryuteakwoo.com', external: true },
    { label: 'Explorations in craft', href: '/craft' },
    { label: 'Adventure of my life', href: '/life' },
    { label: 'Archive', href: '/archive' },
];

export const Menu = () => {
    return (
        <nav className="mx-auto w-full max-w-2xl px-6 py-12">
            <ul className="flex flex-col gap-y-3">
                {items.map((item) => (
                    <li key={item.label}>
                        {item.external ? (
                            <a
                                href={item.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-font-emphasize inline-flex items-center gap-1.5 text-lg font-medium underline-offset-4 hover:underline"
                            >
                                {item.label}
                                <span
                                    aria-hidden="true"
                                    className="text-font-secondary text-sm"
                                >
                                    ↗
                                </span>
                            </a>
                        ) : (
                            <Link
                                href={item.href}
                                className="text-font-emphasize text-lg font-medium underline-offset-4 hover:underline"
                            >
                                {item.label}
                            </Link>
                        )}
                    </li>
                ))}
            </ul>
        </nav>
    );
};
