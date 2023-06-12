import Player, { PlayerSnapshot } from "./Player";
import moment from "moment";

export interface GameHistory {
    players: PlayerSnapshot[];
    clock: number;
    round: number;
}

export interface MappedPlayerSnapshot {
    [key: string]: PlayerSnapshot;
}

class TerraformingMarsGame {
    room: string;
    players: Player[];
    clock: number;
    round: number;
    history: GameHistory[];
    expiresOn: string;

    constructor(room: string) {
        this.room = room;
        this.players = [];
        this.clock = 12;
        this.round = 1;
        this.history = [];
        this.expiresOn = moment().add(8, "hours").format();
    }

    isPlayerInGame(playerId: string) {
        return !!this.players.find((player) => player.id === playerId);
    }

    addPlayer(player: Player) {
        this.players.push(player);
        return player;
    }

    getPlayer(playerId: string) {
        return this.players.find((player) => player.id === playerId);
    }

    removePlayer(playerId: string) {
        const playerIndex = this.players.findIndex((p) => p.id === playerId);
        const player = this.players.splice(playerIndex, 1);

        return player[0];
    }

    getGameState() {
        return this;
    }

    nextPhase() {
        this.saveSnapshot();

        this.clock += 3;
        if (this.clock === 12) {
            this.players = this.players.map((player) => {
                player.usedDailyAbility = false;
                return player;
            });
        }

        if (this.clock > 12) {
            this.clock = 3;
        }
    }

    prevPhase() {
        const history = this.loadLastSnapshot();

        if (history) {
            this.clock = history.clock;
            this.round = history.round;
            this.players.forEach((player) => {
                const playerState = history.players.find(
                    (p) => p.id === player.id
                );
                if (playerState) {
                    player.setStatsFromSnapshot(playerState);
                }
            });
        }
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
            clock: this.clock,
            players: this.players.map((player) => player.getSnapshot()),
            round: this.round,
        };
    }
}

export default TerraformingMarsGame;
