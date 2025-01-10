import Card from '@/Components/Card';
import ImageBanner from '@/Components/ImageBanner';
import Listing from '@/Components/Listing';
import NarrowContainer from '@/Components/NarrowContainer';
import Layout from '@/Pages/Layout';

export default function Contact() {
    return (
        <Layout>
            <ImageBanner
                imageUrl={'/storage/fourtop-interior-black-chairs.jpg'}
                title={'Contact'}
            ></ImageBanner>
            <NarrowContainer>
                <div className="flex flex-row justify-between">
                    <Card>
                        <h2 className="mb-4 text-xl font-bold">Contact Info</h2>
                        <Listing label="email:">
                            <div>cafe4top@example.com</div>
                        </Listing>
                        <Listing label="phone:">
                            <div>(206) 555-0121</div>
                        </Listing>
                        <Listing label="address:">
                            <div>1500 16th Ave., Seattle, WA 98122</div>
                        </Listing>
                    </Card>
                    <Card>
                        <h2 className="mb-4 text-xl font-bold">
                            Send us a message
                        </h2>
                        <form className="flex flex-col gap-4">
                            <Listing label="Your Email">
                                <input type="text" name="email" />
                            </Listing>
                            <Listing label="Subject">
                                <input type="text" name="subject" />
                            </Listing>
                            <Listing label="Message">
                                <textarea />
                            </Listing>
                        </form>
                    </Card>
                </div>
            </NarrowContainer>
        </Layout>
    );
}
