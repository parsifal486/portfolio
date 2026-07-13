'use client';
import { useEffect, useState } from 'react';
import { FiMoon, FiSun } from 'react-icons/fi';

type Theme = 'light' | 'dark';

export const ThemeToggle = () => {
    const [theme, setTheme] = useState<Theme | null>(null);

    useEffect(() => {
        const stored = document.documentElement.dataset.theme;
        const initial: Theme =
            stored === 'light' || stored === 'dark'
                ? stored
                : window.matchMedia('(prefers-color-scheme: dark)').matches
                  ? 'dark'
                  : 'light';
        setTheme(initial);
    }, []);

    const toggle = () => {
        const next: Theme = theme === 'dark' ? 'light' : 'dark';
        document.documentElement.dataset.theme = next;
        try {
            localStorage.setItem('theme', next);
        } catch {}
        setTheme(next);
    };

    return (
        <button
            type="button"
            onClick={toggle}
            aria-label="Toggle color theme"
            className="hover:bg-emphasize-transparent flex h-9 w-9 cursor-pointer items-center justify-center rounded-full transition-colors"
        >
            {/* Placeholder keeps size stable until the theme is resolved on mount */}
            {theme === null ? (
                <span className="block h-[18px] w-[18px]" />
            ) : theme === 'dark' ? (
                <FiSun size={18} />
            ) : (
                <FiMoon size={18} />
            )}
        </button>
    );
};
