import { Box, Typography } from "@mui/material";

export interface ClockProps {
    currentHour: 12 | 3 | 6 | 9;
}

export default function Clock(props: ClockProps) {
    return (
        <Box
            sx={{
                position: "relative",
                width: "calc(100vw - 100px)",
                height: "calc(100vw - 100px)",
                maxWidth: 350,
                maxHeight: 350,
                backgroundColor: "primary.main",
                padding: 2,
                border: "7px solid",
                borderColor: "primary.dark",
                borderRadius: "50%",
            }}
        >
            <ClockFace {...props} />
        </Box>
    );
}

function ClockFace(props: ClockProps) {
    return (
        <Box
            sx={{
                position: "relative",
                backgroundColor: "primary.main",
                overflow: "hidden",
                width: 1,
                height: 1,
                borderRadius: "100%",
                "&:after, &:before, .marking": {
                    content: '""',
                    position: "absolute",
                    width: "5px",
                    height: "100%",
                    backgroundColor: "primary.light",
                    zIndex: 0,
                    left: "49%",
                },
                "&:after": {
                    transform: "rotate(90deg)",
                },
                ".marking": {
                    backgroundColor: "#bdbdcb",
                    width: "3px",
                },
                ".marking-one": {
                    transform: "rotate(30deg)",
                },
                ".marking-two": {
                    transform: "rotate(60deg)",
                },
                ".marking-three": {
                    transform: "rotate(120deg)",
                },
                ".marking-four": {
                    transform: "rotate(150deg)",
                },
            }}
        >
            <div className="marking marking-one"></div>
            <div className="marking marking-two"></div>
            <div className="marking marking-three"></div>
            <div className="marking marking-four"></div>
            <InnerClockFace {...props} />
        </Box>
    );
}

function InnerClockFace(props: ClockProps) {
    return (
        <Box
            sx={{
                position: "absolute",
                top: "10%",
                left: "10%",
                width: "80%",
                height: "80%",
                backgroundColor: "primary.main",
                borderRadius: "100%",
                zIndex: 1,
                "&:before": {
                    content: '""',
                    position: "absolute",
                    top: "48%",
                    left: "50%",
                    width: "20px",
                    height: "20px",
                    borderRadius: "18px",
                    marginLeft: "-9px",
                    marginTop: "-6px",
                    backgroundColor: "#4d4b63",
                    zIndex: 11,
                },
            }}
        >
            <Hand {...props} variant="hour" />
            <Hand {...props} variant="minute" />
        </Box>
    );
}

export interface HandProps extends ClockProps {
    variant: "hour" | "minute";
}
function Hand(props: HandProps) {
    let styles = {
        position: "absolute",
        transformOrigin: "100%",
        top: "49%",
        right: "50%",
        height: "6px",
        width: "45%",
        backgroundColor: "primary.dark",
        borderRadius: "6px",
        transform: "rotate(90deg)",
        zIndex: 10,
    };

    const hourDeg = (props.currentHour / 12) * 360 + 90;

    if (props.variant === "hour") {
        styles = {
            ...styles,
            width: "30%",
            zIndex: 3,
            transform: `rotate(${hourDeg}deg)`,
            backgroundColor: "primary.light",
        };
    }

    return <Box sx={styles}></Box>;
}
