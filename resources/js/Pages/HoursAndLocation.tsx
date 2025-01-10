import ImageBanner from '@/Components/ImageBanner';
import Layout from '@/Pages/Layout';

export default function HoursAndLocation() {
    return (
        <Layout>
            <ImageBanner
                imageUrl={'/storage/fourtop-cappucino-on-table.jpg'}
                title={'Hours & Location'}
            ></ImageBanner>
            <div className="mx-auto my-12 max-w-6xl py-4">
                <div className="mb-8 flex min-h-[400px] flex-row justify-center gap-16 align-middle">
                    <div className="flex flex-col justify-center">
                        <div className="location-text basis-1/2 text-center">
                            <h2 className="border-b border-black pb-4 text-3xl font-bold">
                                Location
                            </h2>
                            <div className="mt-3 text-xl">
                                1500 16th Ave.
                                <br />
                                Seattle, WA 98122
                            </div>
                            <div className="mt-3 text-xl">(206) 555-3232</div>
                        </div>
                        <div className="basis-1/2 pt-4 text-center">
                            <h2 className="mt-8 border-b border-black pb-4 text-3xl font-bold">
                                Hours
                            </h2>
                            <div className="mt-3 text-xl">Mon-Fri 7am-3pm</div>
                            <div className="mt-3 text-xl">Sat-Sun 9am-3pm</div>
                            <div className="mt-3">
                                Closed Thanksgiving, Christmas Eve, and
                                Christmas Day
                            </div>
                        </div>
                    </div>
                    <div>
                        <iframe
                            src="https://www.google.com/maps/embed/v1/place?q=1500+16th+Avenue,+Seattle,+WA,+USA&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
                            width="350"
                            height="400"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
