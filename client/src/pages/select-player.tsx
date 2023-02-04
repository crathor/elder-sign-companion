import { Box, Container, Button, Typography, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import socket from "../lib/socket-io";
import { useNavigate, useSearchParams } from "react-router-dom";

export default function SelectPlayer() {
    const [players, setPlayers] = useState<any>([]);
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();

    useEffect(() => {
        socket.emit("get-player-list", searchParams.get("roomId"));

        socket.on("player-list", (players) => {
            setPlayers(players);
        });

        socket.on("player-added", (player) => {
            navigate(
                `/game?roomId=${searchParams.get("roomId")}&pid=${player.id}`
            );
        });

        return () => {
            socket.removeAllListeners();
        };
    }, [searchParams]);

    function selectPlayer(id: string) {
        socket.emit("select-player", {
            roomId: searchParams.get("roomId"),
            playerId: id,
        });
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
                        key={player.id}
                        variant="contained"
                        disabled={player.selected}
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
