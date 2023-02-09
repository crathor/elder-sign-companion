import {
    IconButton,
    Box,
    Typography,
    Button,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Paper,
    Divider,
    Toolbar,
    Menu,
    MenuItem,
} from "@mui/material";
import {
    ExpandMore,
    Menu as MenuIcon,
    Restore,
    Update,
} from "@mui/icons-material";
import Clock from "../components/Clock";
import { useState } from "react";
import useQuery from "../hooks/useQuery";
import useGame from "../hooks/useGame";
import PlayerDrawer from "../components/PlayerDrawer";
import PlayerStat from "../components/PlayerStat";
import PlayerHealDialog from "../components/PlayerHealDialog";
import PlayerAbilityButton from "../components/PlayerAbilityButton";
import { Stack } from "@mui/system";
import PlayerAllyButton from "../components/PlayerAllyButton";

export default function Game() {
    const [showPlayers, setShowPlayers] = useState<boolean>(false);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [showHealModal, setShowHealModal] = useState<boolean>(false);
    const showMenu = Boolean(anchorEl);

    const params = useQuery();

    const { gameState, player, players, playerActions, gameActions } = useGame(
        params.roomId,
        params.pid
    );

    function handleMenuClick(event: React.MouseEvent<HTMLElement>) {
        setAnchorEl(event.currentTarget);
    }

    function handleMenuClose() {
        setAnchorEl(null);
    }

    function togglePlayersDrawer() {
        setShowPlayers((showPlayers) => !showPlayers);
    }

    function handleUsePlayerAbility(isHealing: boolean) {
        if (isHealing) {
            setShowHealModal(true);
        } else {
            playerActions.useAbility();
        }
    }

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
            <Stack direction="row" spacing={1}>
                <PlayerStat
                    name={`Sanity (${player.maxSanity})`}
                    onIncrement={playerActions.incrementSanity}
                    onDecrement={playerActions.decrementSanity}
                    value={player.sanity}
                />

                <PlayerStat
                    name={`Stamina (${player.maxStamina})`}
                    onIncrement={playerActions.incrementStamina}
                    onDecrement={playerActions.decrementStamina}
                    value={player.stamina}
                />
            </Stack>

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
            <Stack direction="row" spacing={1} p={1}>
                <PlayerAllyButton
                    player={player}
                    onClick={
                        player.hasAlly
                            ? playerActions.addAllyToken
                            : playerActions.addAlly
                    }
                    onRemoveClick={playerActions.removeAlly}
                />
                {player.hasDailyAbility && (
                    <PlayerAbilityButton
                        player={player}
                        onClick={handleUsePlayerAbility}
                    />
                )}
            </Stack>
            <Stack direction="row" spacing={1}>
                <PlayerStat
                    name="Clue Tokens"
                    onIncrement={playerActions.incrementClueTokens}
                    onDecrement={playerActions.decrementClueTokens}
                    value={player.clueTokens}
                />
                <PlayerStat
                    name="Elder Signs"
                    onIncrement={playerActions.incrementElderSigns}
                    onDecrement={playerActions.decrementElderSigns}
                    value={player.elderSigns}
                />
            </Stack>
            <Box p={1}>
                <Button
                    fullWidth
                    variant="contained"
                    sx={{ backgroundColor: "primary.dark" }}
                    onClick={togglePlayersDrawer}
                >
                    View Players
                </Button>
            </Box>
            <PlayerDrawer
                open={showPlayers}
                onClose={togglePlayersDrawer}
                players={players.filter(({ id }: any) => id !== player.id)}
            />
            <PlayerHealDialog
                open={showHealModal}
                onClose={() => setShowHealModal(false)}
                players={players}
                player={player}
                onPlayerSelect={playerActions.healPlayer}
            />
        </Paper>
    );
}
