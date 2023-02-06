import { Button } from "@mui/material";
import { Box } from "@mui/system";

export interface PlayerAbilityButton {
    player: any;
    onClick: any;
}

export default function PlayerAbilityButton({
    player,
    onClick,
}: PlayerAbilityButton) {
    let text = "";
    let isHealAbility = false;

    if (player.dailyAbility.includes("heal")) {
        text = "Heal";
        isHealAbility = true;
    } else if (player.dailyAbility.includes("roll")) {
        text = "Re-Roll 2 Dice";
    }

    return (
        <Button
            disabled={player.usedDailyAbility}
            variant="contained"
            sx={{ backgroundColor: "primary.dark", flex: 1 }}
            onClick={() => onClick(isHealAbility)}
        >
            {text}
        </Button>
    );
}
