import useDebouncedCallback from "@restart/hooks/useDebouncedCallback";

import { Box, Typography, Container, Stack, Button } from "@mui/material";
import { useEffect } from "react";
import useQuery from "../../hooks/useQuery";

import socket from "../../lib/socket-io";
import { useNavigate } from "react-router-dom";
import TMPlayerStatInput from "../../components/TMPlayerStatInput";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
    TMPlayerData,
    TMPlayerStats,
    TMSetupData,
    selectSetup,
    setPlayerId,
    setProduction,
    setResources,
    setTerraformRating,
} from "./GameSlice";
import { GAME_PATH } from "./constants";

export function Setup() {
    const setupData = useAppSelector(selectSetup);
    const { roomId } = useQuery();
    const dispatch = useAppDispatch();

    const navigate = useNavigate();

    useEffect(() => {
        socket.on("joined-game", (player) => {
            navigate(`${GAME_PATH}?roomId=${roomId}&pid=${player.playerId}`);
        });

        socket.on("player-name-check-status", (isAvailable: boolean) => {
            if (isAvailable) {
                console.log("Name is available");
            } else {
                console.log("Name is not available");
            }
        });

        return () => {
            socket.removeAllListeners();
        };
    }, [roomId]);

    const handleNameChange = useDebouncedCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch({ type: "SET_NAME", payload: event.target.value });
        socket.emit("check-player-name", event.target.value);
    }, 500);

    const handleStatChange = (type: "resources" | "production") => (statType: keyof TMPlayerStats, value: string) => {
        if (type === "production") {
            dispatch(setProduction({ ...setupData.production, [statType]: parseInt(value || "0") }));
        } else {
            dispatch(setResources({ ...setupData.resources, [statType]: parseInt(value || "0") }));
        }
    };

    const handleResourceChange = handleStatChange("resources");
    const handleProductionChange = handleStatChange("production");

    const handleContinue = () => {
        socket.emit("create-tm-player", roomId, setupData);
    };

    return (
        <Container
            maxWidth="sm"
            sx={{
                background: "grey",
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
            }}
        >
            <Stack spacing={1}>
                <Typography py={2} variant="h2" component="h1">
                    Input Starting Stats
                </Typography>

                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                    <Typography sx={{ width: 1 }}>Required</Typography>
                    <TMPlayerStatInput
                        sx={{ flex: 1 }}
                        label="Username"
                        onChange={(value) => dispatch(setPlayerId(value))}
                        value={setupData.playerId}
                    />
                    <TMPlayerStatInput
                        sx={{ flex: 1 }}
                        label="Terraform Rating"
                        onChange={(value) => dispatch(setTerraformRating(parseInt(value || "0")))}
                        value={setupData.terraformRating}
                    />
                </Box>
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                    <Typography sx={{ width: 1 }}>Mega Credits</Typography>
                    <TMPlayerStatInput
                        sx={{ flex: 1 }}
                        label="Starting Amount"
                        onChange={(value) => handleResourceChange("megaCredits", value)}
                        value={setupData.resources.megaCredits}
                    />
                    <TMPlayerStatInput
                        sx={{ flex: 1 }}
                        label="Production"
                        onChange={(value) => handleProductionChange("megaCredits", value)}
                        value={setupData.production.megaCredits}
                    />
                </Box>
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                    <Typography sx={{ width: 1 }}>Steel</Typography>
                    <TMPlayerStatInput
                        sx={{ flex: 1 }}
                        label="Starting Amount"
                        onChange={(value) => handleResourceChange("steel", value)}
                        value={setupData.resources.steel}
                    />
                    <TMPlayerStatInput
                        sx={{ flex: 1 }}
                        label="Production"
                        onChange={(value) => handleProductionChange("steel", value)}
                        value={setupData.production.steel}
                    />
                </Box>
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                    <Typography sx={{ width: 1 }}>Titanium</Typography>
                    <TMPlayerStatInput
                        sx={{ flex: 1 }}
                        label="Starting Amount"
                        onChange={(value) => handleResourceChange("titanium", value)}
                        value={setupData.resources.titanium}
                    />
                    <TMPlayerStatInput
                        sx={{ flex: 1 }}
                        label="Production"
                        onChange={(value) => handleProductionChange("titanium", value)}
                        value={setupData.production.titanium}
                    />
                </Box>
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                    <Typography sx={{ width: 1 }}>Plants</Typography>
                    <TMPlayerStatInput
                        sx={{ flex: 1 }}
                        label="Starting Amount"
                        onChange={(value) => handleResourceChange("plants", value)}
                        value={setupData.resources.plants}
                    />
                    <TMPlayerStatInput
                        sx={{ flex: 1 }}
                        label="Production"
                        onChange={(value) => handleProductionChange("plants", value)}
                        value={setupData.production.plants}
                    />
                </Box>
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                    <Typography sx={{ width: 1 }}>Energy</Typography>
                    <TMPlayerStatInput
                        sx={{ flex: 1 }}
                        label="Starting Amount"
                        onChange={(value) => handleResourceChange("energy", value)}
                        value={setupData.resources.energy}
                    />
                    <TMPlayerStatInput
                        sx={{ flex: 1 }}
                        label="Production"
                        onChange={(value) => handleProductionChange("energy", value)}
                        value={setupData.production.energy}
                    />
                </Box>
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                    <Typography sx={{ width: 1 }}>Heat</Typography>
                    <TMPlayerStatInput
                        sx={{ flex: 1 }}
                        label="Starting Amount"
                        onChange={(value) => handleResourceChange("heat", value)}
                        value={setupData.resources.heat}
                    />
                    <TMPlayerStatInput
                        sx={{ flex: 1 }}
                        label="Production"
                        onChange={(value) => handleProductionChange("heat", value)}
                        value={setupData.production.heat}
                    />
                </Box>
            </Stack>
            <Box sx={{ marginBottom: 2 }}>
                <Button
                    disabled={!setupData.playerId || !setupData.terraformRating}
                    fullWidth
                    variant="contained"
                    color="primary"
                    onClick={handleContinue}
                >
                    Continue to Game
                </Button>
            </Box>
        </Container>
    );
}
