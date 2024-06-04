import { defineStore } from "pinia";
import { User } from '../../Model/User'
import { UserRepository} from '../../repository/UserRepository/UserRepository'

const userRepository = new UserRepository();

export const useUserStore = defineStore('userStore', {
    state: () => ({
        users: [] as User[],
        loading: false as Boolean,
        error: null as string | null
    }),

    actions: {
        async getUsers() {
            this.loading = true;

            try {
                this.users = await userRepository.getUsers();
            } catch(err) {
                this.error = err.message;
            } finally {
                this.loading = false;
            }
        }
    }
})