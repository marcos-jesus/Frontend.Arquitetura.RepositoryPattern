import { Product } from "../../Model/Product";

export interface IProductRepository {
    getProducts(): Promise<Product[]>;
    getProduct(id: string): Promise<Product>;
    updateProduct(id: string, product: Product): Promise<Product>;
    deleteProduct(id: string): Promise<void>;
}