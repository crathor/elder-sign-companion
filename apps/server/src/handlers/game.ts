import { Socket } from "socket.io";
import GameManager from "../data/GameManager";
import investigators from "../db/investigators";
import UserManager from "../data/UserManager";
import Player from "../data/Player";
import ElderSignGame from "../data/ElderSignGame";
import TMPlayer from "../data/TMPlayer";
import TerraformingMarsGame from "../data/TMGame";
import { TMPlayerData } from "@crath0r/terraforming-mars-types";

const GAME_STATE_UPDATE = "game-state-update";

// Shared Handlers
export const leaveGame = (socket: Socket) => (room: string, playerId: string) => {
    const game = GameManager.getGame(room);
    const user = UserManager.getUserBySocketId(socket.id);

    if (!game || !user) {
        return;
    }

    user.removePlayerId();
    const player = game.removePlayer(playerId);

    socket.leave(game.room);
    socket.emit("left-game");
    socket.to(game.room).emit("player-left", player);
    socket.emit(GAME_STATE_UPDATE, game.getGameState());
};

// Elder Sign Handlers
export const selectPlayer = (socket: Socket) => (payload: any) => {
    const user = UserManager.getUserBySocketId(socket.id);
    const game = GameManager.getGame(payload.roomId as string);

    if (!game || !user || game instanceof TerraformingMarsGame) {
        return;
    }
    const investigatorIndex = investigators.findIndex(({ id }) => id === payload.playerId);

    if (investigatorIndex !== -1) {
        const player = game.addPlayer(new Player(investigators[investigatorIndex]));
        user.setPlayerId(player.id);
        socket.emit("player-added", player);
        socket.to(user.room).emit("player-joined", player);
        socket.to(game.room).emit(GAME_STATE_UPDATE, game.getGameState());
    } else {
        socket.emit("no-player-found");
    }
};

export const changePlayer = (socket: Socket) => (room: string, playerId: string) => {
    const game = GameManager.getGame(room);

    if (!game) {
        return;
    }

    const player = game.removePlayer(playerId);

    socket.to(game.room).emit(GAME_STATE_UPDATE, game.getGameState());
    socket.to(game.room).emit("player-left", player);
    socket.emit("change-player", game.room);
};

export const getPlayerList = (socket: Socket) => (room: string) => {
    const game = GameManager.getGame(room);

    if (!game || game instanceof TerraformingMarsGame) {
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

export const getCurrentPlayer = (socket: Socket) => (room: string) => {
    const game = GameManager.getGame(room);
    const user = UserManager.getUserBySocketId(socket.id);

    if (!game || !user) {
        return;
    }

    socket.emit("current-player", game.getPlayer(user.playerId));
};

export const getGameState = (socket: Socket) => (room: string) => {
    const game = GameManager.getGame(room);

    if (!game) {
        return;
    }

    socket.emit(GAME_STATE_UPDATE, game.getGameState());
};

export const decrementPlayerStat = (socket: Socket) => (room: string, playerId: string, statName: string) => {
    const game = GameManager.getGame(room);

    if (!game || game instanceof TerraformingMarsGame) {
        return;
    }

    const player = game.getPlayer(playerId);

    if (!player) {
        return;
    }

    player.decrementStat(statName);

    socket.emit(GAME_STATE_UPDATE, game.getGameState());
    socket.to(game.room).emit(GAME_STATE_UPDATE, game.getGameState());
};

export const incrementStat = (socket: Socket) => (room: string, playerId: string, statName: string) => {
    const game = GameManager.getGame(room);

    if (!game || game instanceof TerraformingMarsGame) {
        return;
    }

    const player = game.getPlayer(playerId);

    if (!player) {
        return;
    }

    player.incrementStat(statName);

    socket.emit(GAME_STATE_UPDATE, game.getGameState());
    socket.to(game.room).emit(GAME_STATE_UPDATE, game.getGameState());
};

export const healPlayer = (socket: Socket) => (room: string, playerId: string, statName: string) => {
    const game = GameManager.getGame(room);

    if (!game || game instanceof TerraformingMarsGame) {
        return;
    }

    const player = game.getPlayer(playerId);

    if (!player) {
        return;
    }

    player.incrementStat(statName);

    socket.emit(GAME_STATE_UPDATE, game.getGameState());
    socket.to(game.room).emit(GAME_STATE_UPDATE, game.getGameState());
};

export const useAbility = (socket: Socket) => (room: string, playerId: string) => {
    const game = GameManager.getGame(room);

    if (!game || game instanceof TerraformingMarsGame) {
        return;
    }

    const player = game.getPlayer(playerId);

    if (!player) {
        return;
    }

    player.usedDailyAbility = true;

    socket.emit(GAME_STATE_UPDATE, game.getGameState());
    socket.to(game.room).emit(GAME_STATE_UPDATE, game.getGameState());
};

export const addAlly = (socket: Socket) => (room: string, playerId: string) => {
    const game = GameManager.getGame(room);

    if (!game || game instanceof TerraformingMarsGame) {
        return;
    }

    const player = game.getPlayer(playerId);

    if (!player) {
        return;
    }

    player.addAlly();

    socket.to(game.room).emit(GAME_STATE_UPDATE, game.getGameState());
    socket.emit(GAME_STATE_UPDATE, game.getGameState());
};

export const addAllyToken = (socket: Socket) => (room: string, playerId: string) => {
    const game = GameManager.getGame(room);

    if (!game || game instanceof TerraformingMarsGame) {
        return;
    }

    const player = game.getPlayer(playerId);

    if (!player) {
        return;
    }

    player.incrementAllyToken();

    socket.to(game.room).emit(GAME_STATE_UPDATE, game.getGameState());
    socket.emit(GAME_STATE_UPDATE, game.getGameState());
};

export const removeAlly = (socket: Socket) => (room: string, playerId: string) => {
    const game = GameManager.getGame(room);

    if (!game || game instanceof TerraformingMarsGame) {
        return;
    }

    const player = game.getPlayer(playerId);

    if (!player) {
        return;
    }

    player.removeAlly();

    socket.to(game.room).emit(GAME_STATE_UPDATE, game.getGameState());
    socket.emit(GAME_STATE_UPDATE, game.getGameState());
};

export const clockPhase = (socket: Socket) => (room: string, direction: string) => {
    const game = GameManager.getGame(room);

    if (!game || game instanceof TerraformingMarsGame) {
        socket.emit("error", {
            type: "game",
            message: "unable to find game session",
        });
        return;
    }

    if (direction === "back") {
        game.prevPhase();
    } else {
        game.nextPhase();
    }

    socket.emit(GAME_STATE_UPDATE, game.getGameState());
    socket.to(game.room).emit(GAME_STATE_UPDATE, game.getGameState());
};

type SetupTMPlayerData = Omit<TMPlayerData, "usedCorporateAbility">;

// Terraforming Mars handlers
export const createTMPlayer = (socket: Socket) => (roomId: string, playerData: SetupTMPlayerData) => {
    const user = UserManager.getUserBySocketId(socket.id);
    const game = GameManager.getGame(roomId);

    if (!game || !user || game instanceof ElderSignGame) {
        return;
    }

    const player = game.addPlayer(new TMPlayer({ ...playerData, usedCorporateAbility: false }));
    user.setPlayerId(playerData.playerId);
    socket.emit("joined-game", player);
    socket.to(user.room).emit("player-joined", player);
    socket.to(game.room).emit(GAME_STATE_UPDATE, game.getGameState());
};
