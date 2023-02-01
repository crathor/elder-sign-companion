import { Investigator } from "../types";

class User {
    id: string;
    room: string;
    playerId: string;

    constructor(id: string, room?: string) {
        this.id = id;
        this.room = room || "";
        this.playerId = "";
    }

    setPlayerId(playerId: string) {
        this.playerId = playerId;
    }

    removePlayerId() {
        this.playerId = "";
    }

    setRoom(room: string) {
        this.room = room;
    }

    removeRoom() {
        this.room = "";
    }
}

export default User;
