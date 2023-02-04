import { Socket } from "socket.io";
import GameManager from "../data/GameManager";
import UserManager from "../data/UserManager";

export const joinRoom = (socket: Socket) => (room: string) => {
    const user = UserManager.getUserBySocketId(socket.id);

    if (!user) {
        socket.emit("error", { type: "user", message: "could not find user" });
        return;
    }

    user.setRoom(room);
    socket.join(user.room);
    socket.emit("joined-room", user.room);
};

export const createRoom = (socket: Socket) => () => {
    const user = UserManager.getUserBySocketId(socket.id);

    if (!user) {
        socket.emit("error", { type: "user", message: "could not find user" });
        return;
    }

    const game = GameManager.createGame();
    user.setRoom(game.room);

    socket.join(game.room);
    socket.emit("joined-room", game.room);
};
