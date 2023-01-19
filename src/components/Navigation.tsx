import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/icons-material/Menu";
import { Alert, Button, List, ListItem, Snackbar, SwipeableDrawer } from "@mui/material";
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
                        {match === null ? "Select Investigator" : "Elden Ring Companion"}
                    </Typography>
                    <IconButton size="large" edge="end" color="inherit" aria-label="menu" onClick={() => setOpen(true)}>
                        <Menu />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <SwipeableDrawer anchor="right" open={open} onOpen={() => setOpen(true)} onClose={() => setOpen(false)}>
                <List>
                    <ListItem>
                        <Button
                            onClick={() => {
                                setOpen(false);
                                navigate("/");
                            }}
                        >
                            Change Investigator
                        </Button>
                    </ListItem>
                    <ListItem>
                        <Button
                            onClick={() => {
                                localStorage.clear();
                                setOpenSnackbar(true);
                                setOpen(false);
                            }}
                        >
                            Clear Storage
                        </Button>
                    </ListItem>
                </List>
            </SwipeableDrawer>
            <Snackbar open={openSnackbar} autoHideDuration={2000} onClose={() => setOpenSnackbar(false)}>
                <Alert onClose={() => setOpenSnackbar(false)} severity="success" sx={{ width: "100%" }}>
                    Storage cleared!
                </Alert>
            </Snackbar>
        </>
    );
}
