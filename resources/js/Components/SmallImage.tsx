interface SmallImageProps {
    imageUrl: string;
}

export default function SmallImage({ imageUrl }: SmallImageProps) {
    return (
        <div
            className={'w-full min-w-8 border-black bg-cover bg-center'}
            style={{ backgroundImage: `url(\'${imageUrl}\')` }}
        ></div>
    );
}
