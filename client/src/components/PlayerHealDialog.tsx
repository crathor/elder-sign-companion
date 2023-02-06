import { Healing, Psychology } from "@mui/icons-material";
import {
    Dialog,
    DialogTitle,
    IconButton,
    List,
    ListItem,
    ListItemText,
} from "@mui/material";

export interface PlayerHealDialog {
    open: boolean;
    onClose: any;
    onPlayerSelect: any;
    players: any[];
    player: any;
}

export default function PlayerHealDialog({
    open,
    onClose,
    onPlayerSelect,
    players,
    player,
}: PlayerHealDialog) {
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
                            <ListItemText
                                primary={`${player.name} (${currentStat})`}
                                secondary={`Max ${statName} ${maxStat}`}
                            />
                        </ListItem>
                    );
                })}
            </List>
        </Dialog>
    );
}
