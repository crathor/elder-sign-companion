import Game from "./Game";

class GameManager {
    games: Game[];

    constructor() {
        this.games = [];
    }
    /**
     *
     * @returns new game
     */
    createGame() {
        const room = this.generateRoomId(); // generate unique room

        const game = new Game(room); // create a new game

        this.games.push(game); // save game in memory

        console.log(game);
        return game; // return the game
    }

    getGame(room: string) {
        return this.games.find((game) => game.room === room);
    }

    deleteGame(room: string) {
        this.games = this.games.filter((game) => game.room !== room);
    }

    /**
     *
     * @returns unique room id
     */
    generateRoomId() {
        let room = Math.floor(Math.random() * 1000) + 1000;

        while (this.gameExists(room.toString())) {
            room = Math.floor(Math.random() * 1000) + 1000;
        }

        return room.toString();
    }

    /**
     *
     * @param room roomId
     * @returns true if room exists; false if not
     */
    gameExists(room: string) {
        return this.games.findIndex((game) => game.room === room) !== -1;
    }
}

export default new GameManager();
