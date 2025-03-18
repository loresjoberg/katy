import Card from '@/Components/Card';
import Container from '@/Components/Container';
import ImageBanner from '@/Components/ImageBanner';
import KTableCell from '@/Components/KTableCell';
import KTableHead from '@/Components/KTableHead';
import { TableLabel } from '@/Components/TableLabel';
import {
    Table,
    TableBody,
    TableCell,
    TableHeader,
    TableRow,
} from '@/Components/ui/table';
import Layout from '@/Pages/Layout';

interface Drink {
    name: string;
    size8?: number;
    size12?: number;
    size16?: number;
    size20?: number;
}

interface Food {
    name: string;
    description: string;
    price: number;
}

interface Other {
    name: string;
    price: number;
}

export default function Menu() {
    const drinks: Drink[] = [
        {
            name: 'Americano',
            size8: 3.5,
            size12: 4.25,
            size16: 4.3,
            size20: 4.95,
        },
        {
            name: 'Latte',
            size8: 4.25,
            size12: 4.9,
            size16: 5.1,
            size20: 5.85,
        },
        {
            name: 'Mocha',
            size8: 4.9,
            size12: 5.65,
            size16: 5.85,
            size20: 6.6,
        },
        {
            name: 'Espresso',
            size12: 3.65,
        },
        {
            name: 'Cappucino',
            size8: 4.25,
            size12: 4.9,
            size16: 5.1,
            size20: 5.85,
        },
        {
            name: 'Macchiato',
            size12: 3.85,
        },
        {
            name: 'Drip Coffee',
            size8: 2.25,
            size12: 3.1,
            size16: 3.5,
            size20: 3.85,
        },
        {
            name: 'Hot Tea',
            size8: 3.25,
            size12: 3.55,
            size16: 3.85,
            size20: 4.2,
        },
        {
            name: 'Chai Latte (vanilla or spicy)',
            size8: 4.25,
            size12: 4.75,
            size16: 5.25,
            size20: 5.75,
        },
        {
            name: 'Cocoa',
            size8: 3.25,
            size12: 3.95,
            size16: 4.45,
            size20: 4.95,
        },
        {
            name: 'Steamer',
            size8: 3.25,
            size12: 3.95,
            size16: 4.45,
            size20: 4.95,
        },
        {
            name: 'Cider',
            size8: 2.75,
            size12: 3.25,
            size16: 3.75,
            size20: 4.25,
        },
        {
            name: 'Cold Brew',
            size12: 4,
            size16: 4.75,
            size20: 5.5,
        },
        {
            name: 'Italian Soda',
            size12: 4,
            size16: 4.75,
            size20: 5.5,
        },
        {
            name: 'Smoothie (ask for flavors)',
            size12: 5.25,
            size16: 6,
            size20: 6.75,
        },
        {
            name: 'Orange Juice',
            size12: 3.5,
            size16: 4,
            size20: 4.5,
        },
        {
            name: 'Lotus/Lavender Lemonade',
            size12: 5.25,
            size16: 5.75,
            size20: 6.25,
        },
    ];

    const foods: Food[] = [
        {
            name: "Katy's Famous Breakfast Bagel",
            description:
                'Black Forest ham, cheddar cheese, and a scrambled egg with a thin layer of cream cheese on your choice of bagel. Try substituting ham for turkey. bacon, or tomato!',
            price: 10.6,
        },
        {
            name: 'Tuna Pita',
            description:
                "Can't go wrong with this Katy's favorite. Albacore tuna, mayo, salt and pepper in a warm wheat pita layered with cool, crisp lettuce and freshly-sliced tomato.",
            price: 13,
        },
        {
            name: 'Turkey Club',
            description:
                'The classic! Lettuce, tomato, mayo, and crispy bacon stacked atop thin-sliced roasted turkey on your choice of white or wheat toast. Mustard available on request.',
            price: 13,
        },
        {
            name: 'Southwest Turkey Wrap',
            description:
                'Give your day some kick! Thin-sliced roasted turkey, toma-toes, lettuce, shredded cheddar, and salsa cream cheese wrapped in a jalapeno cheddar tortilla. Served cold.',
            price: 13,
        },
        {
            name: 'BLT',
            description:
                'A lunchtime favorite! Crispy bacon, cool lettuce, fresh-sliced tomato and a thin spread of mayo on your choice of white or Wheat toast',
            price: 13.25,
        },
        {
            name: 'Roasted Veggie',
            description:
                'Zucchini, onion, and red peppers lightly seasoned, tossed in olive oil and oven roasted, layered with house-made pesto, cheddar, lettuce, and tomato. Fresh veggies are roasted to order; this sandwich can take up to 20 mins to prepare.',
            price: 13,
        },
        {
            name: 'Veggie Bagel',
            description:
                "Fast and fresh! Cucumber, lettuce, tomato, onion, hummus, and cream cheese on your choice of toasted bagel. You can also sub vegan cream cheese if that's your jam!",
            price: 9.95,
        },
        {
            name: 'Turkey Cranberry',
            description:
                'Thin-sliced roasted turkey, with thick cranberry sauce, cool, crisp lettuce, and our incredible house-made pesto on your choice of white or wheat toast.',
            price: 12.75,
        },
        {
            name: 'Hot Ham & Cheese',
            description:
                'Black Forest ham broiled to perfection, with cheddar and a thin spread of mayo on white or wheat toast. Try it with fresh-sliced tomatoes, available on request!',
            price: 13.25,
        },
        {
            name: 'Tuna Melt',
            description:
                'Tuna salad made to order, topped with gooey melted cheddar on your choice of white or wheat toast. Tomatoes and lettuce also available on request.',
            price: 13.25,
        },
    ];

    const others: Other[] = [
        {
            name: 'Hand-Made Pastry',
            price: 3.15,
        },
        {
            name: 'Homemade Cookie',
            price: 2.65,
        },
        {
            name: 'Vegetarian Quiche',
            price: 6,
        },
        {
            name: 'Salad',
            price: 4.75,
        },
        {
            name: 'Potato Chips',
            price: 2,
        },
        {
            name: 'Clif Bar',
            price: 2.5,
        },
    ];

    const adds = {
        price: 0.75,
        items: [
            'Extra Espresso Shot',
            'Flavor Shot',
            'Soy Milk',
            'Oat Milk',
            'Hemp Milk',
            'Almond Milk',
            'Coconut Milk',
            'Breve',
            'White Coffee',
        ],
    };

    const beverages: Other[] = [
        {
            name: 'Coke • Diet Coke • Sprite',
            price: 3,
        },
        {
            name: 'Apple Juice',
            price: 3,
        },
        {
            name: 'Red Bull',
            price: 3.25,
        },
        {
            name: 'Bottled Water',
            price: 2.6,
        },
    ];

    const USDollar = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });

    return (
        <Layout>
            <ImageBanner
                imageUrl={'/storage/fourtop-bagel-on-plate.jpg'}
                title={'Menu'}
            ></ImageBanner>
            <Container>
                <Card className={'mx-auto mb-4 max-w-lg p-4'}>
                    <div className="mb-2 text-center font-display text-display-lg font-bold text-primary-foreground">
                        Drink Special of the Month
                    </div>
                    <div className="text-center text-lg">
                        Hazelnut Irish Cream Latte
                    </div>
                </Card>
                <Card className={'mb-8 p-2 pt-8'}>
                    <TableLabel>Beverages</TableLabel>
                    <Table className="mx-auto mt-2 max-w-[250px] max-w-sm sm:max-w-2xl">
                        <TableHeader>
                            <TableRow>
                                <KTableHead>&nbsp;</KTableHead>
                                <KTableHead>
                                    <span className="sm:text-md whitespace-nowrap text-xs">
                                        8 oz.
                                    </span>
                                </KTableHead>
                                <KTableHead>
                                    <span className="sm:text-md whitespace-nowrap text-xs">
                                        12 oz.
                                    </span>
                                </KTableHead>
                                <KTableHead>
                                    <span className="sm:text-md whitespace-nowrap text-xs">
                                        16 oz.
                                    </span>
                                </KTableHead>
                                <KTableHead>
                                    <span className="sm:text-md whitespace-nowrap text-xs">
                                        20 oz.
                                    </span>
                                </KTableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {drinks.map((item: Drink) => {
                                return (
                                    <TableRow
                                        className="border-b-background"
                                        key={item.name}
                                    >
                                        <KTableCell>
                                            <span className="text-xs font-bold">
                                                {item.name}
                                            </span>
                                        </KTableCell>
                                        <KTableCell>
                                            {item.size8 &&
                                                USDollar.format(item.size8)}
                                        </KTableCell>
                                        <KTableCell>
                                            {item.size12 &&
                                                USDollar.format(item.size12)}
                                        </KTableCell>
                                        <KTableCell>
                                            {item.size16 &&
                                                USDollar.format(item.size16)}
                                        </KTableCell>
                                        <KTableCell>
                                            {item.size20 &&
                                                USDollar.format(item.size20)}
                                        </KTableCell>
                                    </TableRow>
                                );
                            })}
                            <TableRow className="border-b-background">
                                <TableCell className="text-base font-bold">
                                    Add for {adds.price}
                                </TableCell>
                                <TableCell colSpan={4}>
                                    {adds.items.join(' • ')}
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </Card>
                <Card className={'mb-8 pt-8'}>
                    <TableLabel>Bottled Beverages</TableLabel>
                    <Table className="mx-auto mt-2 max-w-sm">
                        <TableBody>
                            {beverages.map((item: Other) => {
                                return (
                                    <TableRow
                                        className="border-b-background"
                                        key={item.name}
                                    >
                                        <TableCell className="text-base font-bold">
                                            {item.name}
                                        </TableCell>
                                        <TableCell className="font-medium text-primary-foreground">
                                            {USDollar.format(item.price)}
                                        </TableCell>
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                </Card>
                <Card className={'mb-8 pt-8'}>
                    <TableLabel>Sandwiches</TableLabel>

                    <Table className="mx-auto mt-2 max-w-2xl">
                        <TableBody>
                            {foods.map((item: Food) => {
                                return (
                                    <TableRow
                                        className="border-b-background"
                                        key={item.name}
                                    >
                                        <TableCell className="font-medium">
                                            <div className="text-base font-bold">
                                                {item.name}
                                            </div>
                                            <div>{item.description}</div>
                                        </TableCell>
                                        <TableCell className="font-medium text-primary-foreground">
                                            {USDollar.format(item.price)}
                                        </TableCell>
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                </Card>
                <Card className={'mb-8 pt-8'}>
                    <TableLabel>Sides &amp; Snacks</TableLabel>
                    <div className="mx-auto mt-4 lg:w-1/2">
                        <Table className="mx-auto max-w-sm">
                            <TableBody>
                                {others.map((item: Other) => {
                                    return (
                                        <TableRow
                                            className="border-b-background"
                                            key={item.name}
                                        >
                                            <TableCell className="text-base font-bold">
                                                {item.name}
                                            </TableCell>
                                            <TableCell className="font-medium text-primary-foreground">
                                                {USDollar.format(item.price)}
                                            </TableCell>
                                        </TableRow>
                                    );
                                })}
                            </TableBody>
                        </Table>
                    </div>
                </Card>
            </Container>
        </Layout>
    );
}
