import axios from "axios";
import { IProductRepository } from "./IProductRepository";
import { Product } from "../../Model/Product";

const API = 'https://api.example.com/products'

export class ProductRepository implements IProductRepository {
    async getProducts(): Promise<Product[]> {
        const response = await axios.get<Product[]>(API);
        return response.data
    }
    updateProduct(id: string, product: Product): Promise<Product> {
        throw new Error("Method not implemented.");
    }
    deleteProduct(id: string): Promise<void> {
        throw new Error("Method not implemented.");
    }
    getProduct(id: string): Promise<Product> {
        throw new Error("Method not implemented");
    }
}