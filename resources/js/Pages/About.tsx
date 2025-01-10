import Card from '@/Components/Card';
import ImageBanner from '@/Components/ImageBanner';
import NarrowContainer from '@/Components/NarrowContainer';
import SmallImage from '@/Components/SmallImage';
import Layout from '@/Pages/Layout';

export default function About() {
    return (
        <Layout>
            <ImageBanner
                imageUrl={'/storage/fourtop-doppio.jpg'}
                title={'About'}
            ></ImageBanner>
            <NarrowContainer>
                <Card>
                    <div className="mb-8 flex flex-row gap-4">
                        <SmallImage imageUrl="/storage/fourtop-interior-black-chairs.jpg" />
                        <div>
                            <h2 className="mb-2 text-3xl font-bold">
                                The Beginning
                            </h2>
                            <p>
                                Café 4-Top was founded in 2006 by Seattle native
                                Lee Anderson. Driven by equal passions for food,
                                coffee, and hospitality, she created a café for
                                everyone in the community, whether they want to
                                gather and relax, or pick up a hot drink and a
                                delicious sandwich on the go.
                            </p>
                        </div>
                    </div>
                    <hr />
                    <div className="mt-8 flex flex-row gap-4">
                        <div>
                            <h2 className="mb-2 text-3xl font-bold">
                                Our Team
                            </h2>
                            <p>
                                Our team is devoted to creating excellent food
                                and drink, and providing warm and welcoming
                                service no matter the time of day. Please stop
                                by, say hello, and see what we have to offer.
                                We're looking forward to meeting you!
                            </p>
                        </div>
                        <SmallImage imageUrl="/storage/fourtop-pour-over.jpg" />
                    </div>
                </Card>
            </NarrowContainer>
        </Layout>
    );
}
