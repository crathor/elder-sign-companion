import {
    IconButton,
    Box,
    Typography,
    Button,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Drawer,
    List,
    ListItem,
    Paper,
    Divider,
    Toolbar,
} from "@mui/material";
import {
    Add,
    ExpandMore,
    PowerOff,
    Remove,
    Restore,
    Update,
} from "@mui/icons-material";
import Clock from "../components/Clock";
import { useEffect, useMemo, useState } from "react";
import socket from "../lib/socket-io";
import { useSearchParams } from "react-router-dom";

export default function Game() {
    const [showPlayers, setShowPlayers] = useState<boolean>(false);
    const [player, setPlayer] = useState<any | null>(null);
    const [searchParams] = useSearchParams();

    const params = useMemo(() => {
        return {
            roomId: searchParams.get("roomId"),
            pid: searchParams.get("pid"),
        };
    }, [searchParams]);

    useEffect(() => {
        socket.emit("get-game-state", params.roomId);

        socket.on("game-state-updated", (game) => {
            setPlayer(
                game.players.find((player: any) => player.id === params.pid)
            );
        });

        socket.on("update-player-data", (investigator) => {
            console.log("Updated the Player");
            console.log(investigator);
            setPlayer(investigator);
        });

        socket.on("no-player-found", () => {
            setPlayer(null);
        });

        return () => {
            socket.removeAllListeners();
        };
    }, [params]);

    function togglePlayersDrawer() {
        setShowPlayers((showPlayers) => !showPlayers);
    }

    function decrementStat(statName: string) {
        socket.emit("decrement-stat", params.roomId, params.pid, statName);
    }

    function incrementStat(statName: string) {
        socket.emit("increment-stat", params.roomId, params.pid, statName);
    }

    function handleUserAbilityClick(isHealAbility: boolean) {
        if (isHealAbility) {
            console.log("open heal modal");
        } else {
            socket.emit("used-ability");
        }
    }

    if (!player) {
        return <Box sx={{ background: "red" }}>Loading Game...</Box>;
    }

    return (
        <Paper
            elevation={0}
            square
            sx={{
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                color: "text.secondary",
                backgroundColor: "primary.main",
            }}
        >
            <Toolbar sx={{ paddingRight: 1 }}>
                <Typography variant="h4" sx={{ flex: 1 }}>
                    {player.name}
                </Typography>
                <IconButton sx={{ color: "text.secondary" }}>
                    <PowerOff fontSize="medium" />
                </IconButton>
            </Toolbar>
            <Divider sx={{ m: "auto", width: "80%", borderBottomWidth: 1 }} />
            <Accordion
                disableGutters
                elevation={0}
                sx={{
                    backgroundColor: "primary.main",
                    "&:before": {
                        display: "none",
                    },
                }}
            >
                <AccordionSummary expandIcon={<ExpandMore />}>
                    <Typography>{player.title}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>{player.abilityDescription}</Typography>
                    <Typography fontWeight={500}>Starting Items:</Typography>
                    <Typography>{player.startingItems}</Typography>
                </AccordionDetails>
            </Accordion>
            <Box display="flex" flexWrap="wrap">
                <PlayerStat
                    name={`Sanity (${player.maxSanity})`}
                    onIncrement={() => incrementStat("sanity")}
                    onDecrement={() => decrementStat("sanity")}
                    value={player.sanity}
                />
                <Divider orientation="vertical" flexItem />
                <PlayerStat
                    name={`Stamina (${player.maxStamina})`}
                    onIncrement={() => incrementStat("stamina")}
                    onDecrement={() => decrementStat("stamina")}
                    value={player.stamina}
                />
            </Box>

            <Box flex={1} p={1}>
                <Box sx={{ p: 2, display: "flex", justifyContent: "center" }}>
                    <Clock currentHour={3} />
                </Box>
                <Box display="flex" justifyContent="space-between" px={8}>
                    <IconButton
                        sx={{
                            backgroundColor: "primary.dark",
                            color: "text.secondary",
                        }}
                    >
                        <Restore fontSize="large" />
                    </IconButton>
                    <IconButton
                        sx={{
                            backgroundColor: "primary.dark",
                            color: "text.secondary",
                        }}
                    >
                        <Update fontSize="large" />
                    </IconButton>
                </Box>
            </Box>
            {player.hasDailyAbility && (
                <PlayerAbilityButton
                    player={player}
                    onClick={handleUserAbilityClick}
                />
            )}
            <Box display="flex" flexWrap="wrap">
                <PlayerStat
                    name="Clue Notes"
                    onIncrement={() => incrementStat("clueNotes")}
                    onDecrement={() => decrementStat("clueNotes")}
                    value={player.clueNotes}
                />
                <Divider orientation="vertical" flexItem />
                <PlayerStat
                    name="Elder Signs"
                    onIncrement={() => incrementStat("elderSigns")}
                    onDecrement={() => decrementStat("elderSigns")}
                    value={player.elderSigns}
                />
            </Box>
            <Drawer
                anchor="bottom"
                open={showPlayers}
                onClose={togglePlayersDrawer}
            >
                <List>
                    <ListItem>
                        <Typography>Harvey Walters</Typography>
                    </ListItem>
                </List>
            </Drawer>
            <Box p={1} width={1} display="flex">
                <Button
                    fullWidth
                    variant="contained"
                    sx={{ backgroundColor: "primary.dark" }}
                    onClick={togglePlayersDrawer}
                >
                    View Players
                </Button>
            </Box>
        </Paper>
    );
}

export interface PlayerStat {
    name: string;
    onDecrement: React.MouseEventHandler<HTMLAnchorElement>;
    onIncrement: React.MouseEventHandler<HTMLAnchorElement>;
    value: string;
}

function PlayerAbilityButton({ player, onClick }: any) {
    let text = "";
    let isHealAbility = false;

    if (player.dailyAbility.includes("heal")) {
        text = "Heal";
        isHealAbility = true;
    } else if (player.dailyAbility.includes("roll")) {
        text = "Re-Roll 2 Dice";
    }

    return (
        <Box p={1}>
            <Button
                disabled={player.usedDailyAbility}
                fullWidth
                variant="contained"
                sx={{ backgroundColor: "primary.dark" }}
                onClick={() => onClick(isHealAbility)}
            >
                {text}
            </Button>
        </Box>
    );
}

function PlayerStat(props: PlayerStat) {
    return (
        <Box
            sx={{
                display: "flex",
                flex: 1,
                alignItems: "center",
                flexDirection: "column",
                backgroundColor: "primary.dark",
                color: "#C59849",
                py: 1,
            }}
        >
            <Typography variant="h4" component="p">
                {props.name}
            </Typography>
            <Box display="flex" alignItems="center">
                <IconButton
                    href=""
                    sx={{ color: "text.secondary" }}
                    onClick={props.onDecrement}
                >
                    <Remove />
                </IconButton>

                <Typography
                    variant="h2"
                    component="p"
                    sx={{ mx: 1, fontWeight: 500 }}
                >
                    {props.value}
                </Typography>

                <IconButton
                    href=""
                    sx={{ color: "text.secondary" }}
                    onClick={props.onIncrement}
                >
                    <Add />
                </IconButton>
            </Box>
        </Box>
    );
}
