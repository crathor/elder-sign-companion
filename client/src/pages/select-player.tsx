import {
    Box,
    Container,
    Divider,
    List,
    ListItemButton,
    Typography,
} from "@mui/material";
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
            console.log(player, "PLAYER");
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
            <List>
                <Divider component="li" />
                {players.map((player: any) => (
                    <>
                        <ListItemButton
                            disabled={player.selected}
                            sx={{ textAlign: "center" }}
                            onClick={() => selectPlayer(player.id)}
                        >
                            {player.name}
                        </ListItemButton>
                        <Divider component="li" />
                    </>
                ))}
            </List>
        </Container>
    );
}
