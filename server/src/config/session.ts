import { Express } from "express";
import session, { SessionOptions, CookieOptions } from "express-session";
import createMemoryStore from "memorystore";
import logger from "../lib/logger";

const _MemoryStore = createMemoryStore(session);

// override the CookieOptions to not be optional
interface SessionConfig extends SessionOptions {
    cookie: CookieOptions;
}

export default function configureSession(app: Express) {
    let sessionConfig: SessionConfig = {
        name: "sessionToken",
        secret: app.get("secret"),
        store: new _MemoryStore({
            checkPeriod: 86400000, // prune expired entries every 24h
        }),
        resave: false,
        saveUninitialized: false,
        cookie: {},
    };

    if (process.env.NODE_ENV === "production") {
        logger.info("securing cookie");
        sessionConfig.cookie.secure = true;
    }

    app.set("sessionConfig", sessionConfig);
    app.use(session(sessionConfig));
}
