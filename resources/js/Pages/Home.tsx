import Card from '@/Components/Card';
import Container from '@/Components/Container';
import { RowTicket } from '@/Components/RowTicket';
import Layout from '@/Pages/Layout';

export default function Home() {
    return (
        <Layout>
            <div className="h-[300px] border-b border-black bg-[url('/storage/cafe-background-table.png')] bg-cover bg-[60%] sm:h-[550px] sm:bg-center">
                <div className="mx-auto flex h-full max-w-6xl flex-row justify-end py-4 text-white sm:py-8">
                    <div className="my-2 mr-2 flex w-1/2 flex-col justify-between sm:pl-14 md:w-1/2">
                        <div className="font-display text-display-lg leading-tight sm:text-display-xl md:text-display-2xl">
                            Welcome to Katy's Corner Cafe!
                        </div>
                        <div className="text-md leading-snug sm:text-lg sm:leading-normal md:text-2xl">
                            A cozy neighborhood coffee shop and sandwich cafe
                            serving homemade food and great coffee. Central
                            District Proud since 2006!
                        </div>
                    </div>
                </div>
            </div>
            <Container>
                <h2 className="mb-2 font-display text-primary-foreground">
                    Ask Our Customers
                </h2>
                <div className="mx-auto flex max-w-xl flex-col justify-center gap-6 md:flex-row">
                    <Card className="p-6">
                        <div className="text-lg">
                            "I can't say enough about how wonderful the staff
                            here was. They were so welcoming to each and every
                            costumer, be they regular or first timer."
                        </div>
                        <div className="mt-2 text-right text-[1.125rem]">
                            —Trevor K.
                        </div>
                    </Card>
                    <Card className="p-6">
                        <div className="text-lg">
                            "The atmosphere is warm, and the staff really make
                            you feel welcome. Their bagels and sandwiches are
                            fantastic—fresh, flavorful, and clearly made with
                            care."
                        </div>
                        <div className="mt-2 text-right text-[1.125rem]">
                            —Jennifer S.
                        </div>
                    </Card>
                </div>
                <h2 className="mb-2 mt-4 font-display text-primary-foreground">
                    Our Offerings
                </h2>
                <div className="flex flex-col flex-wrap items-stretch gap-4 sm:justify-center md:flex-row lg:flex-nowrap lg:justify-between">
                    <RowTicket
                        imageUrl={'/storage/fourtop-bagel-on-plate.jpg'}
                        title={'Menu'}
                        destination={'/menu'}
                    >
                        Explore our delicious drinks, scrumptious sandwiches,
                        and other delights.
                    </RowTicket>
                    <RowTicket
                        imageUrl={'/storage/fourtop-cappucino-on-table.jpg'}
                        title={'Hours & Location'}
                        destination={'/hours-and-location'}
                    >
                        Find out where we are and when we're open to serve you.
                    </RowTicket>
                    <RowTicket
                        imageUrl={'/storage/fourtop-doppio.jpg'}
                        title={'About'}
                        destination={'/about'}
                    >
                        Our story, and our staff.
                    </RowTicket>
                    <RowTicket
                        imageUrl={'/storage/fourtop-interior-black-chairs.jpg'}
                        title={'Contact'}
                        destination={'/contact'}
                    >
                        We want to hear from you.
                    </RowTicket>
                </div>
            </Container>
        </Layout>
    );
}
