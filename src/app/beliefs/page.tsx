import React from 'react';
import Link from 'next/link';

export const metadata = {
    title: 'Things I believe · Ryuteakwoo',
};

const beliefs = [
    {
        title: 'You can learn anything.',
        points: [
            "When something feels hard, you're usually just missing some prerequisite knowledge — or learning it the wrong way.",
            'No one is stupid — only too lazy to think.',
        ],
    },
    {
        title: 'The best way to learn something is by doing.',
        points: [
            "Imitation is a great way to learn — it's just sampling — but always ask why it's done that way.",
        ],
    },
    {
        title: 'Always assume good intent.',
        points: [
            'Communicate with empathy.',
            'They might just be having a bad day.',
            'Criticism is good feedback — if you can take it unemotionally.',
        ],
    },
];

export default function BeliefsPage() {
    return (
        <section className="mx-auto w-full max-w-2xl px-6 pt-24 pb-24">
            <Link
                href="/"
                className="text-font-secondary hover:text-font-emphasize text-sm transition-colors"
            >
                ← Back
            </Link>

            <h1 className="mt-8 text-3xl font-semibold tracking-tight">
                Things I believe
            </h1>

            <div className="mt-10 space-y-10">
                {beliefs.map((belief) => (
                    <div key={belief.title}>
                        <p className="text-font-emphasize text-lg font-medium">
                            {belief.title}
                        </p>
                        {belief.points.length > 0 && (
                            <ul className="mt-3 space-y-1.5">
                                {belief.points.map((point) => (
                                    <li
                                        key={point}
                                        className="text-font-secondary leading-relaxed"
                                    >
                                        {point}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}
