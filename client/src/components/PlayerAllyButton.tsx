import { Close } from "@mui/icons-material";
import { Button, IconButton } from "@mui/material";

interface PlayerAllyButtonProps {
    player: any;
    onClick: any;
    onRemoveClick: any;
}

export default function PlayerAllyButton({
    player,
    onClick,
    onRemoveClick,
}: PlayerAllyButtonProps) {
    return (
        <>
            {player.hasAlly && (
                <IconButton onClick={onRemoveClick} size="small">
                    <Close />
                </IconButton>
            )}
            <Button
                sx={{ backgroundColor: "primary.dark", flex: 1 }}
                variant="contained"
                onClick={onClick}
            >
                {player.hasAlly
                    ? `Add Token: ${player.allyTokens}`
                    : "Add Ally"}
            </Button>
        </>
    );
}
