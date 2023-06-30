import { Socket, io } from "socket.io-client";

let socket: Socket;

if (process.env.NODE_ENV === "production") {
    socket = io();
} else {
    socket = io("http://localhost:4000");
}

export default socket;
