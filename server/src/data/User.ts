class User {
    socketId: string;
    userId: string;
    room: string;
    playerId: string;

    constructor(socketId: string, userId: string, room?: string) {
        this.socketId = socketId;
        this.room = room || "";
        this.userId = userId;
        this.playerId = "";
    }

    setUserId(userId: string) {
        this.userId = userId;
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

    updateSocketId(socketId: string) {
        this.socketId = socketId;
    }
}

export default User;
