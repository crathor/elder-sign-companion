import { useEffect, useState } from "react";
import socket from "../lib/socket-io";
import {
    Box,
    Button,
    Container,
    TextField,
    Typography,
    Stack,
    Divider,
    Chip,
} from "@mui/material";
import { useNavigate } from "react-router";

export default function GameMenu() {
    const [roomId, setRoomId] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        socket.on("joined-room", (roomId) => {
            navigate(`select-player?roomId=${roomId}`);
        });

        return () => {
            socket.removeAllListeners();
        };
    }, []);

    function createRoom() {
        socket.emit("create-room", roomId);
    }

    function joinRoom() {
        socket.emit("join-room", roomId);
    }

    function handleChange(e: any) {
        if (e.target.value.length > 4) {
            return;
        }

        setRoomId(e.target.value.toUpperCase());
    }

    return (
        <Container
            sx={{
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
            }}
            maxWidth="sm"
        >
            <Box sx={{ p: 2, textAlign: "center" }}>
                <Typography color="text.secondary" variant="h3" component="h1">
                    Elder Sign Companion
                </Typography>
            </Box>

            <Stack sx={{ width: 1, color: "text.secondary" }} spacing={2}>
                <TextField
                    inputProps={{
                        style: { textAlign: "center", fontSize: "large" },
                    }}
                    autoComplete="off"
                    value={roomId}
                    placeholder="Room ID"
                    name="roomId"
                    onChange={handleChange}
                />

                <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    size="large"
                    onClick={joinRoom}
                >
                    Join Game
                </Button>

                <Box>
                    <Divider>
                        <Chip label="OR" />
                    </Divider>
                </Box>

                <Button
                    fullWidth
                    size="large"
                    variant="contained"
                    color="primary"
                    onClick={createRoom}
                >
                    New Game
                </Button>
            </Stack>
        </Container>
    );
}
