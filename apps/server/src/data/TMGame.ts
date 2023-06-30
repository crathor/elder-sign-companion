import { TERRAFORMING_MARS } from "../constants";
import TMPlayer, { type TMPlayerSnapshot } from "./TMPlayer";
import moment from "moment";

export interface GameHistory {
    players: TMPlayerSnapshot[];
}

class TerraformingMarsGame {
    room: string;
    players: TMPlayer[];
    history: GameHistory[];
    expiresOn: string;
    type: string;

    constructor(room: string) {
        this.room = room;
        this.players = [];
        this.history = [];
        this.expiresOn = moment().add(8, "hours").format();
        this.type = TERRAFORMING_MARS;
    }

    isPlayerInGame(playerId: string) {
        return !!this.players.find((player) => player.playerId === playerId);
    }

    addPlayer(player: TMPlayer) {
        this.players.push(player);
        return player;
    }

    getPlayer(playerId: string) {
        return this.players.find((player) => player.playerId === playerId);
    }

    removePlayer(playerId: string) {
        const playerIndex = this.players.findIndex((p) => p.playerId === playerId);
        const player = this.players.splice(playerIndex, 1);

        return player[0];
    }

    getGameState() {
        return this;
    }

    saveSnapshot() {
        this.history.push(this.getSnapshot());
    }

    loadLastSnapshot() {
        if (this.history.length === 0) {
            return null;
        }
        const history = this.history.pop();
        return history;
    }

    getSnapshot(): GameHistory {
        return {
            players: this.players.map((player) => player.getSnapshot()),
        };
    }
}

export default TerraformingMarsGame;
