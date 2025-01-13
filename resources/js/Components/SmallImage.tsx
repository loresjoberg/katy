interface SmallImageProps {
    imageUrl: string;
}

export default function SmallImage({ imageUrl }: SmallImageProps) {
    return (
        <div
            className={
                'shrink-0 grow-0 basis-1/4 border-black bg-cover bg-center'
            }
            style={{ backgroundImage: `url(\'${imageUrl}\')` }}
        ></div>
    );
}
