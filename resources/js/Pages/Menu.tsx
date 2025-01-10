import Card from '@/Components/Card';
import ImageBanner from '@/Components/ImageBanner';
import NarrowContainer from '@/Components/NarrowContainer';
import { TableLabel } from '@/Components/TableLabel';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
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
            size8: 3.25,
            size12: 4,
            size16: 4.25,
            size20: 4.75,
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
            size8: 4.25,
            size12: 4.9,
            size16: 5.1,
            size20: 5.85,
        },
        {
            name: 'Drip Coffee',
            size8: 4.25,
            size12: 4.9,
            size16: 5.1,
            size20: 5.85,
        },
        {
            name: 'Tea',
            size8: 4.25,
            size12: 4.9,
            size16: 5.1,
            size20: 5.85,
        },
        {
            name: 'Chai',
            size8: 4.25,
            size12: 4.9,
            size16: 5.1,
            size20: 5.85,
        },
        {
            name: 'Cocoa',
            size8: 4.25,
            size12: 4.9,
            size16: 5.1,
            size20: 5.85,
        },
        {
            name: 'Steamer',
            size8: 4.25,
            size12: 4.9,
            size16: 5.1,
            size20: 5.85,
        },
        {
            name: 'Cider',
            size8: 4.25,
            size12: 4.9,
            size16: 5.1,
            size20: 5.85,
        },
        {
            name: 'Cold Brew',
            size8: 4.25,
            size12: 4.9,
            size16: 5.1,
            size20: 5.85,
        },
        {
            name: 'Italian Soda',
            size8: 4.25,
            size12: 4.9,
            size16: 5.1,
            size20: 5.85,
        },
        {
            name: 'Smoothie',
            size8: 4.25,
            size12: 4.9,
            size16: 5.1,
            size20: 5.85,
        },
        {
            name: 'Orange Juice',
            size8: 4.25,
            size12: 4.9,
            size16: 5.1,
            size20: 5.85,
        },
        {
            name: 'Hibiscus Lemonade',
            size8: 4.25,
            size12: 4.9,
            size16: 5.1,
            size20: 5.85,
        },
    ];

    const foods: Food[] = [
        {
            name: 'Our Famous Breakfast Bagel',
            description:
                'Honey ham, swiss cheese, and scrambled egg on your choice of bagel',
            price: 10.6,
        },
        {
            name: 'Turkey Club',
            description:
                'Roast turkey, cripsy lettuce, mayo, and succulent bacon on white, wheat, or rye bread',
            price: 13,
        },
        {
            name: 'BLT',
            description:
                'Succulent bacon, cripsy lettuce, fresh tomato, and mayo on toasted white, wheat, or rye.',
            price: 13.25,
        },
        {
            name: 'Tuna Pita',
            description:
                'Premium albacore tuna, cripsy lettuce, and fresh tomato in a whole wheat pita.',
            price: 13.25,
        },
        {
            name: 'Hot Ham & Cheese',
            description:
                'Broiled honey ham, cheddar cheese, and mayo on your choice of bread or bagel.',
            price: 13.25,
        },
        {
            name: 'Veggie Bagel',
            description:
                'Cucumber, cripsy lettuce, fresh tomato, thin-sliced onion, and cream cheese on a toasted bagel of your choice.',
            price: 9.95,
        },
        {
            name: 'Turkey Cranb rry',
            description:
                'Roast turkey with cranberry sauce, crispy lettuce, and our homemade aioli, on your choice of toasted white, wheat, or rye bread.',
            price: 12.75,
        },
        {
            name: 'Turkey Wrap',
            description:
                'Roast turkey, cripsy lettuce, fresh tomato, and shredded havarti wrapped in a tortilla and served cold.',
            price: 11.75,
        },
        {
            name: 'Tuna Melt',
            description:
                'Premium albacore tuna topped with cheddar cheese, toasted to melty perfection.',
            price: 13.25,
        },
    ];

    const others: Other[] = [
        {
            name: 'Hand-Made Pastry',
            price: 3.15,
        },
        {
            name: 'Home-made Cookie',
            price: 2.65,
        },
        {
            name: 'Vegetarian Quiche',
            price: 6,
        },
        {
            name: 'Fresh Garden Salad',
            price: 4.75,
        },
        {
            name: 'Kettl Chips',
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
            'Extra Shot',
            'Flavor Shot',
            'Soy Milk',
            'Oat Milk',
            'Almond Milk',
            'Coconut Milk',
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
            <NarrowContainer>
                <Card>
                    <TableLabel>Drinks</TableLabel>
                    <Table className="mx-auto mt-2 max-w-2xl">
                        <TableHeader>
                            <TableRow>
                                <TableHead></TableHead>
                                <TableHead>8 oz.</TableHead>
                                <TableHead>12 oz.</TableHead>
                                <TableHead>16 oz.</TableHead>
                                <TableHead>20 oz.</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {drinks.map((item: Drink) => {
                                return (
                                    <TableRow key={item.name}>
                                        <TableCell className="text-base font-bold">
                                            {item.name}
                                        </TableCell>
                                        <TableCell>
                                            {item.size8 &&
                                                USDollar.format(item.size8)}
                                        </TableCell>
                                        <TableCell>
                                            {item.size12 &&
                                                USDollar.format(item.size12)}
                                        </TableCell>
                                        <TableCell>
                                            {item.size16 &&
                                                USDollar.format(item.size16)}
                                        </TableCell>
                                        <TableCell>
                                            {item.size20 &&
                                                USDollar.format(item.size20)}
                                        </TableCell>
                                    </TableRow>
                                );
                            })}
                            <TableRow>
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
                <Card>
                    <TableLabel>Bottled Beverages</TableLabel>
                    <Table className="mx-auto mt-2 max-w-2xl">
                        <TableBody>
                            {beverages.map((item: Other) => {
                                return (
                                    <TableRow key={item.name}>
                                        <TableCell className="text-base font-bold">
                                            {item.name}
                                        </TableCell>
                                        <TableCell>
                                            {USDollar.format(item.price)}
                                        </TableCell>
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                </Card>
                <Card>
                    <TableLabel>Sandwiches</TableLabel>

                    <Table className="mx-auto mt-2 max-w-2xl">
                        <TableBody>
                            {foods.map((item: Food) => {
                                return (
                                    <TableRow key={item.name}>
                                        <TableCell className="font-medium">
                                            <div className="text-base font-bold">
                                                {item.name}
                                            </div>
                                            <div>{item.description}</div>
                                        </TableCell>
                                        <TableCell>
                                            {USDollar.format(item.price)}
                                        </TableCell>
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                </Card>
                <Card>
                    <TableLabel>Sides &amp; Snacks</TableLabel>
                    <div className="mx-auto mt-4 w-1/2">
                        <Table className="mx-auto max-w-2xl">
                            <TableBody>
                                {others.map((item: Other) => {
                                    return (
                                        <TableRow key={item.name}>
                                            <TableCell className="text-base font-bold">
                                                {item.name}
                                            </TableCell>
                                            <TableCell>
                                                {USDollar.format(item.price)}
                                            </TableCell>
                                        </TableRow>
                                    );
                                })}
                            </TableBody>
                        </Table>
                    </div>
                </Card>
            </NarrowContainer>
        </Layout>
    );
}
