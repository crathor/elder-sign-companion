let rooms: string[] = [];

function generateRoomId() {
    let roomId = "";

    while (true) {
        const nextRoomId = Array(4)
            .fill("A")
            .map((c) => {
                const charCode = c.charCodeAt();
                const random = Math.floor(Math.random() * 25);

                return String.fromCharCode(charCode + random);
            })
            .join("");

        if (!rooms.includes(nextRoomId)) {
            roomId = nextRoomId;
            break;
        }
    }

    rooms.push(roomId);

    return roomId;
}

function deleteRoomId(roomId: string) {
    rooms = rooms.filter((id) => id !== roomId);
}

export { generateRoomId, deleteRoomId };
