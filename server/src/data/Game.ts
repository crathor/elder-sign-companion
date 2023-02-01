import Investigator from "./Investigator";

class Game {
    room: string;
    players: Investigator[];
    clock: number;
    round: number;
    constructor(room: string) {
        this.room = room;
        this.players = [];
        this.clock = 12;
        this.round = 1;
    }

    isPlayerInGame(playerId: string) {
        return !!this.players.find((player) => player.id === playerId);
    }

    addPlayer(player: Investigator) {
        this.players.push(player);
        return player;
    }

    getPlayer(playerId: string) {
        return this.players.find((player) => player.id === playerId);
    }

    removePlayer(player: Investigator) {
        this.players = this.players.filter((p) => p.id === player.id);
    }
}

export default Game;
