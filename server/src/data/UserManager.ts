import User from "./User";

class UserManager {
    users: User[];
    constructor() {
        this.users = [];
    }

    createUser(socketId: string, userId: string) {
        const user = new User(socketId, userId);

        this.users.push(user);

        return user;
    }

    getUser(userId: string) {
        return this.users.find((user) => user.userId === userId);
    }

    getUserBySocketId(socketId: string) {
        return this.users.find((user) => user.socketId === socketId);
    }

    deleteUser(userId: string) {
        this.users = this.users.filter((user) => user.userId !== userId);
    }
}

export default new UserManager();
