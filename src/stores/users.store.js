import { defineStore } from "pinia";
import { usersService } from "../services/users.service";

export const useUsersStore = defineStore("Users", {
    state: () => ({
        users: []
    }),
    actions: {
        async getUsers() {
            try {
                const users = await usersService.getUsers();

                if (users) {
                    this.users = users;
                }
            } catch (error) {
                console.error(error);
            }
        },
    },
    getters: {
        defaultUser: (state) => { state.users.find((user) => user.isDefault === true) }
    }
});
