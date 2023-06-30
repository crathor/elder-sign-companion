import { Theme } from "@emotion/react";
import { SxProps, TextField } from "@mui/material";

export interface TMPlayerStatInputProps {
    label: string;
    isMegaCredits?: boolean;
    onChange: (value: string) => void;
    value: string | undefined | number;
    sx?: SxProps<Theme> | undefined;
}

export default function TMPlayerStatInput({ label, onChange, value, sx }: TMPlayerStatInputProps) {
    return (
        <TextField
            sx={sx}
            label={label}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            inputProps={{
                shrink: "true",
            }}
        />
    );
}
