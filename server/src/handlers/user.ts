import { Socket } from "socket.io";
import UserManager from "../data/UserManager";

export const connectUser = (socket: Socket) => (userId: string) => {
    let user = UserManager.getUser(userId);

    if (!user) {
        user = UserManager.createUser(socket.id, userId);
    } else {
        user.updateSocketId(socket.id);
    }

    if (user.room) {
        socket.join(user.room);
    }
    console.log(UserManager.users);
};
