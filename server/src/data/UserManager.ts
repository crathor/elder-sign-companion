import User from "./User";

class UserManager {
    users: User[];
    constructor() {
        this.users = [];
    }

    createUser(id: string) {
        const user = new User(id);

        this.users.push(user);

        return user;
    }

    getUser(id: string) {
        return this.users.find((user) => user.id === id);
    }

    deleteUser(id: string) {
        this.users = this.users.filter((user) => user.id !== id);
    }
}

export default new UserManager();
