import { User } from "../../Model/User";

export interface IUserRepository {
    getUsers(): Promise<User[]>;
    getUserById(id: string): Promise<User>;
    createUser(user: User): Promise<User>;
    updateUser(id: string, user: User): Promise<User>;
    deleteUser(id: string): Promise<void>;
}