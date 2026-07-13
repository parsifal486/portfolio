import React from 'react';

export const HomeSection = () => {
    return (
        <section id="home" className="mx-auto w-full max-w-2xl px-6 pt-24 pb-16">
            <h1 className="font-hubano text-6xl leading-[0.9] sm:text-8xl">
                Ryu
                <br />
                teakwoo
            </h1>
            <p className="text-font-secondary mt-2 text-lg">
                Design Engineer
            </p>
            <p className="text-font-secondary mt-6 leading-relaxed">
                I enjoy learning &amp; crafting. Currently work at{' '}
                <a
                    href="https://github.com/Bauhinia-AI"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-font-emphasize underline decoration-1 underline-offset-2 transition-opacity hover:opacity-70"
                >
                    Bauhinia&nbsp;AI
                </a>
                .
            </p>
        </section>
    );
};
