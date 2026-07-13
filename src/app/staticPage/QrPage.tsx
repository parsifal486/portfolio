import Image from 'next/image';

type QrPageProps = {
    src: string;
    alt: string;
    caption?: string;
};

export const QrPage = ({ src, alt, caption }: QrPageProps) => {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center gap-6 px-6">
            <div className="border-hairline overflow-hidden rounded-2xl border p-3">
                <Image
                    src={src}
                    alt={alt}
                    width={280}
                    height={280}
                    className="rounded-xl"
                />
            </div>
            {caption && <p className="text-font-secondary text-sm">{caption}</p>}
        </main>
    );
};
