import { Box, Container, Button, Typography, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import socket from "../lib/socket-io";
import { useNavigate } from "react-router-dom";
import useQuery from "../hooks/useQuery";
import { Star } from "@mui/icons-material";

export default function SelectPlayer() {
    const [players, setPlayers] = useState<any>([]);
    const [currentPlayer, setCurrentPlayer] = useState<any>(null);
    const { roomId } = useQuery();
    const navigate = useNavigate();

    useEffect(() => {
        socket.emit("get-player-list", roomId);
        socket.emit("get-current-player", roomId);

        socket.on("player-list", (players) => {
            setPlayers(players);
        });

        socket.on("current-player", (player: any) => {
            setCurrentPlayer(player);
        });

        socket.on("player-added", (player) => {
            navigate(`/game?roomId=${roomId}&pid=${player.id}`);
        });

        return () => {
            socket.removeAllListeners();
        };
    }, [roomId]);

    function selectPlayer(id: string) {
        if (currentPlayer) {
            navigate(`/game?roomId=${roomId}&pid=${currentPlayer?.id}`);
        } else {
            socket.emit("select-player", {
                roomId: roomId,
                playerId: id,
            });
        }
    }

    return (
        <Container maxWidth="sm">
            <Box p={2}>
                <Typography textAlign="center" variant="h3" component="h1">
                    Select Investigator
                </Typography>
            </Box>
            <Stack spacing={1}>
                {players.map((player: any) => (
                    <Button
                        endIcon={
                            currentPlayer?.id === player.id ? (
                                <Star color="warning" />
                            ) : null
                        }
                        key={player.id}
                        variant="contained"
                        disabled={
                            (player.selected || currentPlayer) &&
                            currentPlayer?.id !== player.id
                        }
                        sx={{ textAlign: "center" }}
                        onClick={() => selectPlayer(player.id)}
                    >
                        {player.name}
                    </Button>
                ))}
            </Stack>
        </Container>
    );
}
