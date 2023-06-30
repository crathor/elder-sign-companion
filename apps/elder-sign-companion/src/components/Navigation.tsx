import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/icons-material/Menu";
import { Alert, List, ListItemButton, Snackbar, Drawer } from "@mui/material";
import { useMatch, useNavigate } from "react-router-dom";

export default function Navigation() {
    const [open, setOpen] = useState<boolean>(false);
    const [openSnackbar, setOpenSnackbar] = useState<boolean>(false);
    const navigate = useNavigate();
    const match = useMatch("/investigator/:investigatorId");

    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        {match === null ? "Select Investigator" : "Elder Sign Companion"}
                    </Typography>
                    <IconButton size="large" edge="end" color="inherit" aria-label="menu" onClick={() => setOpen(true)}>
                        <Menu />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
                <List sx={{ height: 1, backgroundColor: "primary.main" }}>
                    <ListItemButton
                        onClick={() => {
                            setOpen(false);
                            navigate("/");
                        }}
                    >
                        Change Investigator
                    </ListItemButton>
                    <ListItemButton
                        onClick={() => {
                            localStorage.clear();
                            setOpenSnackbar(true);
                            setOpen(false);
                        }}
                    >
                        Clear Storage
                    </ListItemButton>
                </List>
            </Drawer>
            <Snackbar open={openSnackbar} autoHideDuration={2000} onClose={() => setOpenSnackbar(false)}>
                <Alert onClose={() => setOpenSnackbar(false)} severity="success" sx={{ width: "100%" }}>
                    Storage cleared!
                </Alert>
            </Snackbar>
        </>
    );
}
