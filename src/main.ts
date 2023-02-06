import * as dotenv from "dotenv";
dotenv.config();
import express, { Express } from "express";
import http from "http";
import configureApplication from "./config/application";
import createIOServer from "./config/socket.io";

import {
    clockPhase,
    connectUser,
    createRoom,
    decrementPlayerStat,
    getGameState,
    getPlayerList,
    healPlayer,
    incrementStat,
    joinRoom,
    changePlayer,
    selectPlayer,
    useAbility,
    leaveGame,
    addAlly,
    removeAlly,
    addAllyToken,
} from "./handlers";

const app: Express = express();
const server = http.createServer(app);
const PORT = configureApplication(app);
const io = createIOServer(app, server);

io.on("connection", (socket) => {
    socket.emit("message", "Welcome to Elder Sign Companion");
    socket.on("connect-user", connectUser(socket));
    socket.on("create-room", createRoom(socket));
    socket.on("join-room", joinRoom(socket));
    socket.on("select-player", selectPlayer(socket));
    socket.on("change-player", changePlayer(socket));
    socket.on("get-player-list", getPlayerList(socket));
    socket.on("get-game-state", getGameState(socket));
    socket.on("clock-phase", clockPhase(socket));
    socket.on("decrement-stat", decrementPlayerStat(socket));
    socket.on("increment-stat", incrementStat(socket));
    socket.on("heal-player", healPlayer(socket));
    socket.on("add-ally", addAlly(socket));
    socket.on("remove-ally", removeAlly(socket));
    socket.on("add-ally-token", addAllyToken(socket));
    socket.on("use-ability", useAbility(socket));
    socket.on("leave-game", leaveGame(socket));
    socket.on("disconnect", () => {
        io.emit("message", "Player left");
    });
});

server.listen(PORT, () => {
    console.log(`listening on http://localhost:${PORT}`);
});

// todo: purge games and users that have not been used for 24 hours
// setInterval(() => {
//     console.log(GameManager.games);
// }, 10000);
