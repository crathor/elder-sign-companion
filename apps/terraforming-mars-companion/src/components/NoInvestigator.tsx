import { Box, Button, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { useNavigate } from "react-router-dom";

export default function NoInvestigator() {
    const navigate = useNavigate();
    return (
        <Container
            sx={{
                display: "flex",
                height: "100vh",
                backgroundColor: "secondary.main",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Box sx={{ p: 2, textAlign: "center" }}>
                <Typography variant="h2">Oops!</Typography>
                <Typography sx={{ mb: 2 }} variant="h2">
                    This isn't an investigator.
                </Typography>

                <Button variant="contained" onClick={() => navigate("/")}>
                    Back to Home
                </Button>
            </Box>
        </Container>
    );
}
