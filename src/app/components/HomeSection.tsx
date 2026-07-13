import React from 'react';
import { ThemeToggle } from './ThemeToggle';

export const HomeSection = () => {
    return (
        <section id="home" className="mx-auto w-full max-w-2xl px-6 pt-24 pb-16">
            <h1 className="font-hubano text-6xl leading-[0.9] sm:text-8xl">
                <span className="inline-flex items-start gap-3">
                    Ryu
                    <span className="mt-3 sm:mt-4">
                        <ThemeToggle />
                    </span>
                </span>
                <br />
                teakwoo
            </h1>

            <p className="text-font-emphasize mt-2 text-lg font-medium">
                Design Engineer
            </p>
            <p className="text-font-emphasize mt-6 text-lg font-medium leading-relaxed">
                I enjoy learning &amp; crafting.
                <br />
                Currently work at{' '}
                <a
                    href="https://github.com/Bauhinia-AI"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline decoration-1 underline-offset-2 transition-opacity hover:opacity-70"
                >
                    Bauhinia&nbsp;AI
                </a>
                .
            </p>
        </section>
    );
};
