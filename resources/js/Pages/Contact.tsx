import Card from '@/Components/Card';
import Container from '@/Components/Container';
import ImageBanner from '@/Components/ImageBanner';
import Listing from '@/Components/Listing';
import Layout from '@/Pages/Layout';

export default function Contact() {
    return (
        <Layout>
            <ImageBanner
                imageUrl={'/storage/fourtop-interior-black-chairs.jpg'}
                title={'Contact'}
            ></ImageBanner>
            <Container className="max-w-md md:max-w-lg lg:max-w-3xl">
                <div className="mx-auto flex flex-col gap-4 lg:flex-row lg:justify-center">
                    <Card className="basis-1/2">
                        <h2 className="leading-none">Contact Info</h2>
                        <div className="sm:mt-12">
                            <Listing label="email:">
                                <div>katy@example.com</div>
                            </Listing>
                            <Listing label="phone:">
                                <div>(206) 329-0121</div>
                            </Listing>
                            <Listing label="address:">
                                <div>
                                    2000 E Union Street
                                    <br />
                                    Seattle, WA 98122
                                </div>
                            </Listing>
                        </div>
                    </Card>
                    <Card className="basis-1/2">
                        <h2 className="mb-2 leading-none">Send us a message</h2>
                        <form className="flex flex-col justify-stretch gap-2">
                            <Listing label="Your Email">
                                <input
                                    className="w-full"
                                    type="text"
                                    name="email"
                                />
                            </Listing>
                            <Listing label="Subject">
                                <input
                                    className="w-full"
                                    type="text"
                                    name="subject"
                                />
                            </Listing>
                            <Listing label="Message">
                                <textarea className="w-full" />
                            </Listing>
                        </form>
                    </Card>
                </div>
            </Container>
        </Layout>
    );
}
