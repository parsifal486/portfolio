export default function ReadiamondPage() {
    return (
        <div className="flex min-h-screen items-center justify-center">
            <div className="rounded-xl p-8 text-center">
                <h1 className="text-font-emphasize font-inter mb-4 text-3xl md:text-4xl">
                    Readiamond
                </h1>
                <p className="text-font-primary font-inter text-lg">
                    软件下载暂未开放，敬请期待
                </p>
                <p className="text-font-primary font-inter mt-4 text-lg">
                    Still in developing, see github page{' '}
                    <a 
                        href="https://github.com/parsifal486/readiamond"
                        className="text-purplespace-300 hover:text-purplespace-400 underline"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        https://github.com/parsifal486/readiamond
                    </a>
                </p>
            </div>
        </div>
    );
}
