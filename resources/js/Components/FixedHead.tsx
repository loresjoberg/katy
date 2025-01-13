import MappedNav from '@/Components/MappedNav';

function HeaderLogo() {
    return (
        <div className="mt-2 basis-full bg-[url('/storage/katys-logo-color.png')] bg-contain bg-center bg-no-repeat sm:mb-2 lg:mb-2 lg:mr-4 lg:mt-0 lg:basis-[150px] xl:basis-[200px]" />
    );
}

export default function FixedHead() {
    return (
        <div className="fixed z-10 flex w-full flex-col justify-between bg-card shadow-lg">
            <div className="flex h-16 w-full flex-row justify-between sm:h-32">
                <div
                    className="h-full min-w-16 bg-cover"
                    style={{
                        backgroundImage: "url('/storage/contour-a.png')",
                        borderRadius: '0 0 100% 0',
                        flexBasis: '18%',
                    }}
                ></div>
                <div className="flex max-h-32 max-w-4xl flex-col justify-between align-middle sm:basis-[64%] lg:flex-row">
                    <HeaderLogo />
                    <div className="invisible h-0 sm:visible sm:h-auto">
                        <MappedNav />
                    </div>
                </div>
                <div
                    className="h-full min-w-16 bg-cover"
                    style={{
                        backgroundImage: "url('/storage/contour-a.png')",
                        borderRadius: '0 0 0 100%',
                        flexBasis: '18%',
                    }}
                ></div>
            </div>
            <div className="visible h-12 px-4 sm:invisible sm:h-0">
                <MappedNav />
            </div>
        </div>
    );
}
