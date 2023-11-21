class UsersService {
    constructor() {
        this.usersPromise = this.loadUsers();
    }

    async loadUsers() {
        try {
            const response = await fetch("../../mock/users.json");
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error loading JSON file:', error);
            throw error;
        }
    }

    async getUsers() {
        return await this.usersPromise;
    }
}

export const usersService = new UsersService();
