import { Socket } from "socket.io";
import GameManager from "../data/GameManager";
import investigators from "../data/investigators";
import UserManager from "../data/UserManager";
import Investigator from "../data/Investigator";

export const selectPlayer = (socket: Socket) => (payload: any) => {
    const user = UserManager.getUser(socket.id);
    const game = GameManager.getGame(payload.roomId as string);

    if (!game || !user) {
        return;
    }
    // TODO: sanitize input
    const investigatorIndex = investigators.findIndex(
        ({ id }) => id === payload.playerId
    );

    if (investigatorIndex !== -1) {
        const player = game.addPlayer(
            new Investigator(investigators[investigatorIndex])
        );
        user.setPlayerId(player.id);
        socket.emit("player-added", player);
    } else {
        socket.emit("no-player-found");
    }
};

export const getPlayerList = (socket: Socket) => (room: string) => {
    const game = GameManager.getGame(room);

    if (!game) {
        return;
    }

    socket.emit(
        "player-list",
        investigators.map((c) => ({
            id: c.id,
            name: c.name,
            selected: game.isPlayerInGame(c.id),
        }))
    );
};

export const getGameState = (socket: Socket) => (room: string) => {
    const game = GameManager.getGame(room);

    if (!game) {
        return;
    }

    socket.emit("game-state-updated", game);
};

export const decrementPlayerStat =
    (socket: Socket) => (room: string, playerId: string, statName: string) => {
        const game = GameManager.getGame(room);

        if (!game) {
            return;
        }

        const player = game.getPlayer(playerId);

        if (!player) {
            return;
        }

        if (statName === "clueNotes") {
            if (player.clueNotes <= 0) {
                return;
            }
            player.clueNotes -= 1;
        }
        if (statName === "elderSigns") {
            if (player.elderSigns <= 0) {
                return;
            }
            player.elderSigns -= 1;
        }
        if (statName === "sanity") {
            if (player.sanity <= 0) {
                return;
            }
            player.sanity -= 1;
        }
        if (statName === "stamina") {
            if (player.stamina <= 0) {
                return;
            }
            player.stamina -= 1;
        }
        socket.emit("update-player-data", player);
    };

export const incrementStat =
    (socket: Socket) => (room: string, playerId: string, statName: string) => {
        const game = GameManager.getGame(room);

        if (!game) {
            return;
        }

        const player = game.getPlayer(playerId);

        if (!player) {
            return;
        }
        if (statName === "clueNotes") {
            player.clueNotes += 1;
        }
        if (statName === "elderSigns") {
            player.elderSigns += 1;
        }
        if (statName === "sanity") {
            if (player.sanity >= player.maxSanity) {
                return;
            }
            player.sanity += 1;
        }
        if (statName === "stamina") {
            if (player.stamina >= player.maxStamina) {
                return;
            }
            player.stamina += 1;
        }
        socket.emit("update-player-data", player);
    };

export const useAbility =
    (socket: Socket) => (room: string, playerId: string) => {
        const game = GameManager.getGame(room);

        if (!game) {
            return;
        }

        const player = game.getPlayer(playerId);

        if (!player) {
            return;
        }

        player.usedDailyAbility = true;
        socket.emit("update-player-data", player);
    };
