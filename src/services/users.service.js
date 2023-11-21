class UsersService {
    fetchUsers() {
        fetch("../../mock/users.json")
        .then(response => response.json())
        .then(data => {
            // Work with your JSON data here
            console.log(data);
        })
        .catch(error => {
            console.error('Error loading JSON file:', error);
        });
    }
};

export const usersService = new UsersService();
