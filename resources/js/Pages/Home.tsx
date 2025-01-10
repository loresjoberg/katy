import Container from '@/Components/Container';
import SmallImage from '@/Components/SmallImage';
import Layout from '@/Pages/Layout';

export default function Home() {
    return (
        <Layout>
            <div className="h-[600px] border-b border-black bg-[url('/storage/cafe-background-table.png')] bg-cover bg-bottom">
                <div className="mx-auto flex h-full max-w-6xl flex-row justify-end py-4 text-white">
                    <div className="flex w-1/2 flex-col justify-between">
                        <div className="text-5xl font-bold italic">
                            Welcome to Café 4-Top...
                        </div>
                        <div className="text-3xl">
                            We're a community-oriented café providing homemade
                            sandwiches and pastries, excellent coffee, and
                            welcoming service.
                        </div>
                    </div>
                </div>
            </div>
            <Container>
                <h2 className="text-3xl font-bold">Our Offerings</h2>
                <div className="space-between flex flex-row gap-4">
                    <div className="mb-2 mt-6 flex basis-1/4 flex-row gap-2 rounded border-r bg-primary p-4">
                        <SmallImage imageUrl="/storage/fourtop-bagel-on-plate.jpg" />
                        <div>
                            <h3 className="mb-1 text-xl font-bold">Menu</h3>
                            Explore our delicious drinks and scrumptious
                            sandwiches, among other delights.
                        </div>
                    </div>
                    <div className="mb-2 mt-6 flex basis-1/4 flex-row gap-2 rounded border-r bg-primary p-4">
                        <SmallImage imageUrl="/storage/fourtop-cappucino-on-table.jpg" />
                        <div>
                            <h3 className="mb-1 text-xl font-bold">
                                Hours &amp; Location
                            </h3>
                            Find out where we are and when we're open to serve
                            you.
                        </div>
                    </div>
                    <div className="mb-2 mt-6 flex basis-1/4 flex-row gap-2 rounded border-r bg-primary p-4">
                        <SmallImage imageUrl="/storage/fourtop-doppio.jpg" />
                        <div>
                            <h3 className="mb-1 text-xl font-bold">About</h3>
                            Our story, and our staff.
                        </div>
                    </div>

                    <div className="mb-2 mt-6 flex basis-1/4 flex-row gap-2 rounded border-r bg-primary p-4">
                        <SmallImage imageUrl="/storage/fourtop-interior-black-chairs.jpg" />
                        <div>
                            <h3 className="mb-1 text-xl font-bold">Contact</h3>
                            We want to hear from you.
                        </div>
                    </div>
                </div>
            </Container>
        </Layout>
    );
}
