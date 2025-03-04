import ImageBanner from '@/Components/ImageBanner';
import Layout from '@/Pages/Layout';

export default function HoursAndLocation() {
    return (
        <Layout>
            <ImageBanner
                imageUrl={'/storage/fourtop-cappucino-on-table.jpg'}
                title={'Hours & Location'}
            ></ImageBanner>
            <div className="mx-auto my-12 max-w-6xl p-4">
                <div className="flex min-h-[400px] flex-col justify-center gap-16 align-middle lg:flex-row">
                    <div className="flex flex-col justify-center rounded bg-card p-8">
                        <div className="location-text basis-1/2 bg-card text-center">
                            <h2 className="border-b border-black pb-4">
                                Location
                            </h2>
                            <div className="mt-3 text-xl">
                                2000 E Union Street
                                <br />
                                Seattle, WA 98122
                            </div>
                            <div className="mt-3 text-xl">(206) 329-0121</div>
                        </div>
                        <div className="basis-1/2 bg-card text-center">
                            <h2 className="mt-4 border-b border-black pb-4">
                                Hours
                            </h2>
                            <div className="mt-3 text-xl">
                                Mon-Sat 6:30am-3pm
                            </div>
                            <div className="mt-3 text-xl">Sun 8am-3pm</div>
                        </div>
                    </div>
                    <div>
                        <iframe
                            src="https://www.google.com/maps/embed/v1/place?q=2000+East+Union+Street,+Seattle,+WA,+USA&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
                            className="h-full w-full"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
