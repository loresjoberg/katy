interface ImageBannerProps {
    imageUrl: string;
    title: string;
}

export default function ImageBanner({ imageUrl, title }: ImageBannerProps) {
    return (
        <div
            className={'h-[178px] border-b border-black bg-cover bg-center'}
            style={{
                backgroundImage: `url(\'${imageUrl}\')`,
            }}
        >
            <div className="h-full w-full">
                <div className="relative mx-auto flex h-full max-w-3xl flex-row justify-end p-4 pt-8">
                    <div className="basis-1/2 text-right font-overlay text-6xl text-card drop-shadow-[2px_2px_3px_rgba(0,0,0,0.75)]">
                        {title}
                    </div>
                </div>
            </div>
        </div>
    );
}
