import { Express } from "express";
import cors from "cors";

export default function configureCors(app: Express) {
    let corsConfig = {
        origin: app.get("originUrl"),
        credentials: true,
    };

    app.set("CORS_CONFIG", corsConfig);
    app.use(cors(corsConfig));
}
