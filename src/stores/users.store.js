import { defineStore } from "pinia";
import { usersService } from "../services/users.service";

export const useUsersStore = defineStore("Users", {
    state: () => ({
        users: [],
        defaultUser: {}
    }),
    actions: {
        getUsers() {
            const users = usersService.fetchUsers();
            if (users) {
                this.users = users;
            }
        },
        selectDefaultUser(userName) {
            const foundedUser = this.users.find((user) => user.name === userName)
            console.log(foundedUser)
            this.defaultUser = foundedUser;
        }
    },
    getters: {
        defaultUser: (state) => state.users.find((user) => user.isDefault === true)
    }
});
