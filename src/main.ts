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
    getCurrentPlayer,
} from "./handlers";
import GameManager from "./data/GameManager";
import moment from "moment";
import logger from "./lib/logger";
import { Socket } from "socket.io";

const app = express();
const server = http.createServer(app);
const PORT = configureApplication(app);
const io = createIOServer(app, server);

io.on("connection", (socket: Socket) => {
    socket.emit("message", "Welcome to Elder Sign Companion");
    socket.on("connect-user", connectUser(socket));
    /** Elder Sign Events */
    socket.on("create-room", createRoom(socket));
    socket.on("join-room", joinRoom(socket));
    socket.on("select-player", selectPlayer(socket));
    socket.on("change-player", changePlayer(socket));
    socket.on("get-player-list", getPlayerList(socket));
    socket.on("get-current-player", getCurrentPlayer(socket));
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
setInterval(() => {
    GameManager.games.forEach((game) => {
        if (moment().isAfter(game.expiresOn)) {
            logger.info(`Removing Expired Game: ${game.room}`);
            GameManager.deleteGame(game.room);
        }
    });
}, 1000 * 3600 * 12); // 12 hours
