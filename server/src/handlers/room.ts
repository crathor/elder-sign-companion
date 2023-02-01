import { Socket } from "socket.io";
import GameManager from "../data/GameManager";
import UserManager from "../data/UserManager";

export const joinRoom = (socket: Socket) => (room: string) => {
    console.log(GameManager.games);
    const user = UserManager.getUser(socket.id);

    if (!user) {
        socket.emit("message", "unable to join game: couldn't find a user");
        return;
    }

    user.setRoom(room);
    socket.join(user.room);
    socket.emit("joined-room", user.room);
};

export const createRoom = (socket: Socket) => () => {
    const user = UserManager.getUser(socket.id);

    if (!user) {
        socket.emit("message", "unable to create game: couldn't find a user");
        return;
    }

    const game = GameManager.createGame();
    user.setRoom(game.room);

    console.log(GameManager.games);
    socket.join(game.room);
    socket.emit("joined-room", game.room);
};
