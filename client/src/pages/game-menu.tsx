import {
    Box,
    Button,
    Container,
    Typography,
    Stack,
    Divider,
    Chip,
} from "@mui/material";
import { Link } from "react-router-dom";
import { ES_MENU_PATH } from "../utils/constants";

export default function GameMenu() {
    return (
        <Container
            sx={{
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
            }}
            maxWidth="sm"
        >
            <Box sx={{ p: 2, textAlign: "center" }}>
                <Typography color="text.secondary" variant="h3" component="h1">
                    What game are you playing?
                </Typography>
            </Box>

            <Stack sx={{ width: 1, color: "text.secondary" }} spacing={2}>
                <Link to={ES_MENU_PATH}>
                    <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        size="large"
                    >
                        Elder Sign
                    </Button>
                </Link>

                <Box>
                    <Divider>
                        <Chip label="OR" />
                    </Divider>
                </Box>

                <Link to="/terraforming-mars/menu">
                    <Button
                        fullWidth
                        size="large"
                        variant="contained"
                        color="primary"
                    >
                        Terraforming Mars
                    </Button>
                </Link>
            </Stack>
        </Container>
    );
}
