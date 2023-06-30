import * as winston from "winston";

const logger = winston.createLogger({
    level: "info",
    format: winston.format.json({ space: 2 }),
    transports: [new winston.transports.Console()],
});

export default logger;
