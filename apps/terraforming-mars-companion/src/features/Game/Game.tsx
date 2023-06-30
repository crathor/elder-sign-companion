import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { selectGame, setGameState } from "./GameSlice";
import socket from "../../lib/socket-io";
import useQuery from "../../hooks/useQuery";

export function Game() {
    const gameState = useAppSelector(selectGame);
    const dispatch = useAppDispatch();
    const { roomId, pid } = useQuery();

    useEffect(() => {
        if (roomId) {
            socket.emit("get-game-state", roomId);
            socket.on("game-state-update", (gameData) => {
                dispatch(setGameState(gameData));
            });
        }

        return () => {
            socket.removeAllListeners();
        };
    }, [roomId, pid]);

    const player = gameState.players.find((p) => p.playerId === pid);

    if (!player) {
        return <div>loading...</div>;
    }

    return (
        <div>
            <code>{JSON.stringify(player, null, 2)}</code>
        </div>
    );
}
