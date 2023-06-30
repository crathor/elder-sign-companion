import ElderSignGame from "./ElderSignGame";
import TerraformingMarsGame from "./TMGame";

class GameManager {
    elderSignGames: ElderSignGame[];
    terraformingMarsGames: TerraformingMarsGame[];

    constructor() {
        this.elderSignGames = [];
        this.terraformingMarsGames = [];
    }

    games() {
        return [...this.elderSignGames, ...this.terraformingMarsGames];
    }
    /**
     *
     * @returns new Elder Sign game
     */
    createElderSignGame() {
        const room = this.generateRoomId(); // generate unique room

        const game = new ElderSignGame(room); // create a new game

        this.elderSignGames.push(game); // save game in memory

        return game; // return the game
    }
    /**
     *
     * @returns new Terraforming Mars game
     */
    createTerraformingMarsGame() {
        const room = this.generateRoomId(); // generate unique room

        const game = new TerraformingMarsGame(room); // create a new game

        this.terraformingMarsGames.push(game); // save game in memory

        return game; // return the game
    }

    getGame(room: string) {
        return this.games().find((game) => game.room === room);
    }

    deleteGame(room: string) {
        this.elderSignGames = this.elderSignGames.filter((game) => game.room !== room);
        this.terraformingMarsGames = this.terraformingMarsGames.filter((game) => game.room !== room);
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
        return this.games().findIndex((game) => game.room === room) !== -1;
    }
}

export default new GameManager();
