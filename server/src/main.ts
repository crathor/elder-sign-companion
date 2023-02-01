import * as dotenv from "dotenv";
if (process.env.NODE_ENV !== "production") {
    dotenv.config();
}
import express, { Express, NextFunction, Request, Response } from "express";
import http from "http";
import configureApplication from "./config/application";
import createIOServer from "./config/socket.io";
import { Investigator } from "./types";
import UserManager from "./data/UserManager";

import {
    createRoom,
    decrementPlayerStat,
    getGameState,
    getPlayerList,
    incrementStat,
    joinRoom,
    selectPlayer,
    useAbility,
} from "./handlers";

const app: Express = express();
const server = http.createServer(app);
const PORT = configureApplication(app);
const io = createIOServer(app, server);

const currentInvestigator = {} as Investigator;

app.get("session/token/new", (req: Request, res: Response) => {});

const wrap = (middleware: any) => (socket: any, next: any) =>
    middleware(socket.request, {}, next);

// io.use(wrap(session(app.get("sessionConfig"))));

io.on("connection", (socket) => {
    UserManager.createUser(socket.id);
    socket.emit("message", "Welcome to Elder Sign Companion");
    socket.on("get-player-list", getPlayerList(socket));
    socket.on("select-player", selectPlayer(socket));
    socket.on("get-game-state", getGameState(socket));
    socket.on("decrement-stat", decrementPlayerStat(socket));
    socket.on("increment-stat", incrementStat(socket));
    socket.on("used-ability", useAbility(socket));
    socket.on("join-room", joinRoom(socket));
    socket.on("create-room", createRoom(socket));
    socket.on("disconnect", () => {
        io.emit("message", "Player left");
        UserManager.deleteUser(socket.id);
    });
});

server.listen(PORT, () => {
    console.log(`listening on http://localhost:${PORT}`);
});

// const express = require('express');
// const app = express();
// const server = require('http').createServer(app);
// const io = require('socket.io')(server);
// const session = require('express-session');
// const MemoryStore = require('memorystore')(session);

// app.use(session({
//     store: new MemoryStore({
//         checkPeriod: 86400000 // prune expired entries every 24h
//     }),
//     secret: 'secret',
//     resave: true,
//     saveUninitialized: true
// }));

// app.use(express.static(__dirname + '/public'));

// io.on('connection', (socket) => {
//     // Get the userId from the session
//     const userId = socket.handshake.session.userId;
//     // Assign a unique identifier to the socket
//     socket.userId = userId;
//     // Join the socket to a room named after the userId
//     socket.join(userId);
//     // Send a message to the user
//     socket.emit('message', 'Welcome, User ' + userId + '!');
//     // Listen for messages from the user
//     socket.on('message', (data) => {
//         console.log(userId + ' sent: ' + data);
//     });
//     // Handle disconnection
//     socket.on('disconnect', () => {
//         console.log('User ' + userId + ' disconnected.');
//     });
// });

// server.listen(3000);
// console.log('Server listening on port 3000');
