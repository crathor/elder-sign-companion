import { Bolt, Favorite, Psychology, Search, Stars } from "@mui/icons-material";
import {
    Box,
    Button,
    Drawer,
    type DrawerProps,
    Stack,
    Typography,
} from "@mui/material";
import { useMemo } from "react";

export interface PlayerDrawerProps {
    open: boolean;
    onClose: any;
    players: any[];
}

export default function PlayerDrawer({
    open,
    onClose,
    players,
}: PlayerDrawerProps) {
    const totalElderSigns = useMemo(() => {
        return players.reduce(
            (acc: number, player: any) => (acc += +player.elderSigns),
            0
        );
    }, [players]);

    return (
        <Drawer anchor="bottom" open={open} onClose={onClose}>
            <Stack spacing={1} p={2}>
                {players.length === 0 && (
                    <Typography>It's just you!</Typography>
                )}
                {players.map((player: any) => (
                    <Box key={player.id}>
                        <Typography variant="h6" component="p">
                            {player.name}
                        </Typography>

                        <Box
                            sx={{
                                display: "flex",
                            }}
                        >
                            <Box sx={{ textAlign: "center", flex: 1 }}>
                                <Psychology sx={{ color: "#00A7E1" }} />
                                <Typography>
                                    {player.sanity} ({player.maxSanity})
                                </Typography>
                            </Box>

                            <Box sx={{ textAlign: "center", flex: 1 }}>
                                <Favorite sx={{ color: "#DA2C38" }} />
                                <Typography>
                                    {player.stamina} ({player.maxStamina})
                                </Typography>
                            </Box>

                            <Box sx={{ textAlign: "center", flex: 1 }}>
                                <Search sx={{ color: "#F4F3EE" }} />
                                <Typography>{player.clueTokens}</Typography>
                            </Box>

                            <Box sx={{ textAlign: "center", flex: 1 }}>
                                <Stars sx={{ color: "#0E7C7B" }} />
                                <Typography>{player.elderSigns}</Typography>
                            </Box>

                            <Box sx={{ textAlign: "center", flex: 1 }}>
                                {player.hasDailyAbility && (
                                    <>
                                        <Bolt sx={{ color: "#FDE74C" }} />
                                        <Typography>
                                            {player.usedDailyAbility
                                                ? "No"
                                                : "Yes"}
                                        </Typography>
                                    </>
                                )}
                            </Box>
                        </Box>
                    </Box>
                ))}
            </Stack>
            <Box
                sx={{
                    display: "flex",
                    p: 2,
                    alignItems: "center",
                    borderTop: "1px solid",
                }}
            >
                <Typography sx={{ display: "block", flex: 1 }}>
                    Total Elder Signs: {totalElderSigns}
                </Typography>
                <Button
                    onClick={onClose}
                    variant="contained"
                    sx={{ backgroundColor: "primary.dark", flex: 1 }}
                >
                    Close
                </Button>
            </Box>
        </Drawer>
    );
}
