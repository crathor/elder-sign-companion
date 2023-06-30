import { Add, Remove } from "@mui/icons-material";
import { IconButton, Typography } from "@mui/material";
import { Box } from "@mui/system";

export interface PlayerStat {
    name: string;
    onDecrement: React.MouseEventHandler<HTMLAnchorElement>;
    onIncrement: React.MouseEventHandler<HTMLAnchorElement>;
    value: number;
}

export default function PlayerStat({ name, onDecrement, onIncrement, value }: PlayerStat) {
    return (
        <Box
            sx={{
                display: "flex",
                flex: 1,
                alignItems: "center",
                flexDirection: "column",
                backgroundColor: "secondary.main",
                py: 1,
            }}
        >
            <Typography variant="h4" component="p">
                {name}
            </Typography>
            <Box display="flex" alignItems="center">
                <IconButton href="" onClick={onDecrement}>
                    <Remove />
                </IconButton>

                <Typography variant="h2" component="p" sx={{ mx: 1, fontWeight: 500 }}>
                    {value}
                </Typography>

                <IconButton href="" onClick={onIncrement}>
                    <Add />
                </IconButton>
            </Box>
        </Box>
    );
}
