import Card from '@/Components/Card';
import Container from '@/Components/Container';
import ImageBanner from '@/Components/ImageBanner';
import SmallImage from '@/Components/SmallImage';
import Layout from '@/Pages/Layout';

export default function About() {
    return (
        <Layout>
            <ImageBanner
                imageUrl={'/storage/fourtop-doppio.jpg'}
                title={'About'}
            ></ImageBanner>
            <Container className="max-w-xl">
                <Card>
                    <div className="mb-4 mt-2 flex flex-row gap-4">
                        <SmallImage imageUrl="/storage/katys-interior.jpg" />
                        <div>
                            <h2 className="mb-2">The Beginning</h2>
                            <p className="text-lg">
                                In 2006, Katy's Cafe was founded by Katy
                                Leighton. With a passion for great coffee and
                                delicious food, she created a welcoming coffee
                                shop and sandwich cafe for the community to
                                gather and enjoy. Starting with just a few
                                tables and chairs, Katy's Cafe quickly became a
                                popular destination for locals and visitors
                                alike.
                            </p>
                        </div>
                    </div>
                    <hr />
                    <div className="mt-6 flex flex-row gap-4">
                        <div>
                            <h2 className="mb-4">Our Team</h2>
                            <p className="text-lg">
                                Our fantastic team is here to brighten your day
                                and make you feel at home. We take great care in
                                serving great coffee, sandwiches, or pastries
                                just for you. So, come on in and join us for a
                                cozy and friendly atmosphere. We can't wait to
                                meet you!
                            </p>
                        </div>
                        <SmallImage imageUrl="/storage/katys-team.jpg" />
                    </div>
                </Card>
            </Container>
        </Layout>
    );
}
