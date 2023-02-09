import express, { Express } from "express";
// @ts-expect-error
import fallback from "express-history-api-fallback";
// import configureSession from "./session";
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
        const root = path.resolve(__dirname, "../../public");

        app.use(express.static(root));
        app.use(fallback("index.html", { root }));
    }

    app.use(morgan("combined")); // set http logger
    // configureSession(app);
    configureCors(app);

    logger.info("Application Configured");
    return PORT;
}
