import { Express } from "express";
import { Server } from "socket.io";
import logger from "../lib/logger";

export default function createIOServer(app: Express, server: any) {
    logger.info("Configuring socket-io server...");
    return new Server(server, {
        cors: app.get("CORS_CONFIG"),
    });
}
