export interface Product {
    id: string;
    name: string;
    price: number;
    category: Category
}

type Category = {
    id: string;
    name: string;
}