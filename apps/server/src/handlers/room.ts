import { Socket } from "socket.io";
import GameManager from "../data/GameManager";
import UserManager from "../data/UserManager";
import { ELDER_SIGN } from "../constants";

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

export const createRoom = (socket: Socket) => (gameType: string) => {
    const user = UserManager.getUserBySocketId(socket.id);

    if (!user) {
        socket.emit("error", {
            type: "user",
            message: "could not find user",
        });
        return;
    }

    let game;
    if (gameType === ELDER_SIGN) {
        game = GameManager.createElderSignGame();
    } else {
        game = GameManager.createTerraformingMarsGame();
    }

    user.setRoom(game.room);

    socket.join(game.room);
    socket.emit("joined-room", game.room);
};
