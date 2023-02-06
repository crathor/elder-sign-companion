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
    Dialog,
    DialogTitle,
    ListItemText,
    Stack,
    Menu,
    MenuItem,
} from "@mui/material";
import {
    Add,
    Bolt,
    ExpandMore,
    Favorite,
    Healing,
    Menu as MenuIcon,
    Psychology,
    Remove,
    Restore,
    Search,
    Stars,
    Update,
} from "@mui/icons-material";
import Clock from "../components/Clock";
import { useEffect, useMemo, useState } from "react";
import useQuery from "../hooks/useQuery";
import useGameState from "../hooks/useGameState";
import { useNavigate } from "react-router-dom";

export default function Game() {
    const [showPlayers, setShowPlayers] = useState<boolean>(false);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [showHealModal, setShowHealModal] = useState<boolean>(false);

    const navigate = useNavigate();
    const params = useQuery();

    const showMenu = Boolean(anchorEl);
    function handleMenuClick(event: React.MouseEvent<HTMLElement>) {
        setAnchorEl(event.currentTarget);
    }

    function handleMenuClose() {
        setAnchorEl(null);
    }

    function togglePlayersDrawer() {
        setShowPlayers((showPlayers) => !showPlayers);
    }

    const { gameState, player, players, playerActions, gameActions } =
        useGameState(params.roomId, params.pid);

    if (!gameState) {
        return null;
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
                <IconButton
                    onClick={handleMenuClick}
                    sx={{ color: "text.secondary" }}
                >
                    <MenuIcon fontSize="medium" />
                </IconButton>
                <Menu
                    anchorEl={anchorEl}
                    open={showMenu}
                    onClose={handleMenuClose}
                >
                    <Typography
                        sx={{ p: 1, textAlign: "center", width: "100%" }}
                        component="div"
                        variant="button"
                    >
                        Room ID: {params.roomId}
                    </Typography>

                    <Divider />
                    <MenuItem onClick={gameActions.handleChangePlayer}>
                        Change Character
                    </MenuItem>
                    <MenuItem onClick={gameActions.handleLeaveGame}>
                        Leave Game
                    </MenuItem>
                </Menu>
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
                    <Divider sx={{ my: 1 }} />
                    <Typography sx={{ mt: 1 }} fontWeight={500}>
                        Starting Items:
                    </Typography>
                    <Typography>{player.startingItems}</Typography>
                </AccordionDetails>
            </Accordion>
            <Box display="flex" flexWrap="wrap">
                <PlayerStat
                    name={`Sanity (${player.maxSanity})`}
                    onIncrement={playerActions.incrementSanity}
                    onDecrement={playerActions.decrementSanity}
                    value={player.sanity}
                />
                <Divider orientation="vertical" flexItem />
                <PlayerStat
                    name={`Stamina (${player.maxStamina})`}
                    onIncrement={playerActions.incrementStamina}
                    onDecrement={playerActions.decrementStamina}
                    value={player.stamina}
                />
            </Box>

            <Box flex={1} p={1}>
                <Box sx={{ p: 2, display: "flex", justifyContent: "center" }}>
                    <Clock currentHour={gameState.clock} />
                </Box>
                <Box display="flex" justifyContent="space-between" px={8}>
                    <IconButton
                        onClick={gameActions.reverseTime}
                        sx={{
                            backgroundColor: "primary.dark",
                            color: "text.secondary",
                        }}
                    >
                        <Restore fontSize="large" />
                    </IconButton>
                    <IconButton
                        onClick={playerActions.endTurn}
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
                    onClick={playerActions.useAbility}
                />
            )}
            <Box display="flex" flexWrap="wrap">
                <PlayerStat
                    name="Clue Tokens"
                    onIncrement={playerActions.incrementClueTokens}
                    onDecrement={playerActions.decrementClueTokens}
                    value={player.clueTokens}
                />
                <Divider orientation="vertical" flexItem />
                <PlayerStat
                    name="Elder Signs"
                    onIncrement={playerActions.incrementElderSigns}
                    onDecrement={playerActions.decrementElderSigns}
                    value={player.elderSigns}
                />
            </Box>
            <PlayerDrawer
                open={showPlayers}
                onClose={togglePlayersDrawer}
                players={players}
            />
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
            <HealDialog
                open={showHealModal}
                onClose={() => setShowHealModal(false)}
                players={players}
                player={player}
                onPlayerSelect={playerActions.healPlayer}
            />
        </Paper>
    );
}

export interface PlayerStat {
    name: string;
    onDecrement: React.MouseEventHandler<HTMLAnchorElement>;
    onIncrement: React.MouseEventHandler<HTMLAnchorElement>;
    value: string;
}

function PlayerDrawer({ open, onClose, players }: any) {
    const totalElderSigns = useMemo(() => {
        return players.reduce(
            (acc: number, player: any) => (acc += +player.elderSigns),
            0
        );
    }, [players]);

    return (
        <Drawer anchor="bottom" open={open} onClose={onClose}>
            <Stack spacing={1} p={2}>
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
                                <Psychology />
                                <Typography>
                                    {player.sanity} ({player.maxSanity})
                                </Typography>
                            </Box>

                            <Box sx={{ textAlign: "center", flex: 1 }}>
                                <Favorite />
                                <Typography>
                                    {player.stamina} ({player.maxStamina})
                                </Typography>
                            </Box>

                            <Box sx={{ textAlign: "center", flex: 1 }}>
                                <Search />
                                <Typography>{player.clueTokens}</Typography>
                            </Box>

                            <Box sx={{ textAlign: "center", flex: 1 }}>
                                <Stars />
                                <Typography>{player.elderSigns}</Typography>
                            </Box>

                            <Box sx={{ textAlign: "center", flex: 1 }}>
                                {player.hasDailyAbility && (
                                    <>
                                        <Bolt />
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

function HealDialog({ open, onClose, onPlayerSelect, players, player }: any) {
    if (!player || !player.hasDailyAbility) {
        return null;
    }
    const statName = player.dailyAbility.split(":")[1];

    function getStatData(player: any, statName: string) {
        const isSanity = statName === "sanity";

        return {
            maxStat: isSanity ? player.maxSanity : player.maxStamina,
            currentStat: isSanity ? player.sanity : player.stamina,
            icon: isSanity ? <Psychology /> : <Healing />,
        };
    }

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>
                Which Players <u>{player.dailyAbility.split(":")[1]}</u> do you
                want to heal?
            </DialogTitle>
            <List>
                {players.map((player: any) => {
                    const { maxStat, currentStat, icon } = getStatData(
                        player,
                        statName
                    );

                    return (
                        <ListItem
                            key={player.id}
                            secondaryAction={
                                <IconButton
                                    disabled={currentStat === maxStat}
                                    onClick={() => {
                                        onPlayerSelect(player.id, statName);
                                        onClose();
                                    }}
                                >
                                    {icon}
                                </IconButton>
                            }
                        >
                            <ListItem>
                                <ListItemText
                                    primary={`${player.name} (${currentStat})`}
                                    secondary={`Max ${statName} ${maxStat}`}
                                />
                            </ListItem>
                        </ListItem>
                    );
                })}
            </List>
        </Dialog>
    );
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
