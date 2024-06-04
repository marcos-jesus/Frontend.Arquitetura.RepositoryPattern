import axios from "axios";
import { IUserRepository } from "./IUserRepository";
import { User } from "../../Model/User";

const API = 'https://api.example.com/users';

export class UserRepository implements IUserRepository {
    async getUsers(): Promise<User[]> {
        const response = await axios.get<User[]>(API)
        return response.data;
    }
    getUserById(id: string): Promise<User> {
        throw new Error("Method not implemented.");
    }
    createUser(user: User): Promise<User> {
        throw new Error("Method not implemented.");
    }
    updateUser(id: string, user: User): Promise<User> {
        throw new Error("Method not implemented.");
    }
    deleteUser(id: string): Promise<void> {
        throw new Error("Method not implemented.");
    }
    
}
