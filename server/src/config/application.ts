import express, { Express } from "express";
import configureSession from "./session";
import configureCors from "./cors";
import morgan from "morgan";
import logger from "../lib/logger";
import path from "path";

export default function configureApplication(app: Express): number {
    logger.info("Configuring application...");
    const PORT = Number(process.env.PORT) || 4000;
    // app.set("secret", process.env.SESSION_SECRET);
    app.set("env", process.env.NODE_ENV);
    app.set("originUrl", process.env.ORIGIN_URL);

    if (process.env.NODE_ENV === "production") {
        logger.info("serving static content");
        app.use(
            "/",
            express.static(path.resolve(__dirname, "../../", "public"))
        );
    }

    app.use(morgan("combined")); // set http logger
    // configureSession(app);
    configureCors(app);

    logger.info("Application Configured");
    return PORT;
}
