import Container from '@/Components/Container';

interface ImageBannerProps {
    imageUrl: string;
    title: string;
}

export default function ImageBanner({ imageUrl, title }: ImageBannerProps) {
    return (
        <div
            className={'h-[150px] border-b border-black bg-cover bg-center'}
            style={{ backgroundImage: `url(\'${imageUrl}\')` }}
        >
            <Container>
                <div className="flex flex-row justify-end">
                    <div className="max-w-[400px] text-right text-6xl font-bold italic text-white drop-shadow-[2px_2px_2px_rgba(0,0,0,1)]">
                        {title}
                    </div>
                </div>
            </Container>
        </div>
    );
}
