import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation";
import { Box } from "@mui/system";

export default function Root() {
    return (
        <Box
            sx={{
                height: "100vh",
                background:
                    "linear-gradient(135deg, rgba(12, 20, 2, 0.4) 25%, transparent 25%), linear-gradient(225deg, #0c1402 25%, transparent 25%), linear-gradient(315deg, rgba(12, 20, 2, 0.4) 25%, transparent 25%), linear-gradient(45deg, #0c1402 25%, transparent 25%)",
                backgroundSize: "45px 45px",
                backgroundColor: "rgba(6, 26, 86, 0.9)",
            }}
        >
            <Navigation />
            <Outlet />
        </Box>
    );
}
