import { useEffect, useMemo, useState } from "react";
import socket from "../lib/socket-io";
import { useNavigate } from "react-router-dom";
import { ElderSignGameBase, ElderSignPlayer } from "crappy-companion-types";

export default function useGame(roomId?: string, playerId?: string) {
    const [gameState, setGameState] = useState<ElderSignGameBase | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        if (roomId) {
            socket.emit("get-game-state", roomId);
            socket.on("game-state-update", (game) => {
                setGameState(game);
            });
            socket.on("player-joined", (player) => {
                console.log(`Player joined: ${player.name}`);
            });
            socket.on("player-left", (player) => {
                console.log(`Player left: ${player.name}`);
            });
            socket.on("left-game", () => {
                navigate(`/`);
            });
            socket.on("change-player", (roomId) => {
                navigate(`/select-player?roomId=${roomId}`);
            });
        }
        return () => {
            socket.removeAllListeners();
        };
    }, [roomId, playerId]);

    const decrementStat = (statName: string) => () => {
        socket.emit("decrement-stat", roomId, playerId, statName);
    };

    const incrementStat = (statName: string) => () => {
        socket.emit("increment-stat", roomId, playerId, statName);
    };

    function useAbility() {
        socket.emit("use-ability", roomId, playerId);
    }

    const handleClockPhase = (direction: string) => () => {
        socket.emit("clock-phase", roomId, direction);
    };

    function handleChangePlayer() {
        socket.emit("change-player", roomId, playerId);
    }

    function handleHealPlayer(playerId: string, statName: string) {
        socket.emit("heal-player", roomId, playerId, statName);
        useAbility();
    }

    function handleLeaveGame() {
        socket.emit("leave-game", roomId, playerId);
    }

    function addAlly() {
        socket.emit("add-ally", roomId, playerId);
    }

    function removeAlly() {
        socket.emit("remove-ally", roomId, playerId);
    }

    function addAllyToken() {
        socket.emit("add-ally-token", roomId, playerId);
    }

    const playerActions = useMemo(() => {
        return {
            incrementSanity: incrementStat("sanity"),
            decrementSanity: decrementStat("sanity"),
            incrementStamina: incrementStat("stamina"),
            decrementStamina: decrementStat("stamina"),
            incrementClueTokens: incrementStat("clueTokens"),
            decrementClueTokens: decrementStat("clueTokens"),
            incrementElderSigns: incrementStat("elderSigns"),
            decrementElderSigns: decrementStat("elderSigns"),
            healPlayer: (playerId: string, statName: string) => handleHealPlayer(playerId, statName),
            useAbility,
            endTurn: handleClockPhase("forward"),
            addAlly,
            removeAlly,
            addAllyToken,
        };
    }, [roomId, playerId]);

    const gameActions = useMemo(() => {
        return {
            handleLeaveGame,
            handleChangePlayer,
            reverseTime: handleClockPhase("back"),
        };
    }, [roomId, playerId]);

    return {
        gameState,
        player: gameState?.players?.find((player: any) => player.id === playerId) || ({} as ElderSignPlayer),
        players: gameState?.players || [],
        playerActions,
        gameActions,
    };
}
