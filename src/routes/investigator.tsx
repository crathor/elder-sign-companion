import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { Link, LoaderFunctionArgs, useLoaderData } from "react-router-dom";
import {
    decrementClueNotes,
    decrementElderSigns,
    decrementSanity,
    decrementStamina,
    incrementClueNotes,
    incrementElderSigns,
    incrementSanity,
    incrementStamina,
    refreshSanity,
    refreshStamina,
    selectInvestigator,
} from "../redux/investigators";
import { useEffect } from "react";
import investigators from "../data/investigators";
import { Investigator } from "../types";
import { Box, Container } from "@mui/system";
import { Button, Card, CardActions, CardContent, Divider, Grid, IconButton, Typography } from "@mui/material";
import Remove from "@mui/icons-material/Remove";
import Add from "@mui/icons-material/Add";

export async function loader({ params }: LoaderFunctionArgs): Promise<Investigator> {
    const investigator = investigators.find((investigator) => investigator.id === Number(params.investigatorId));

    if (!investigator) {
        throw new Response("No Investigator Found");
    }
    return investigator;
}

export default function InvestigatorPage() {
    const dispatch = useDispatch();
    const loaderData = useLoaderData() as Investigator;
    const investigator = useSelector((state: RootState) => state.investigators.currentInvestigator);
    const maxSanity = useSelector((state: RootState) => state.investigators.maxSanity);
    const maxStamina = useSelector((state: RootState) => state.investigators.maxStamina);

    useEffect(() => {
        // if user came directly to this page set the investigator from loader data
        if (!investigator) {
            dispatch(selectInvestigator(loaderData));
        }
    }, [investigator]);

    return (
        <Container sx={{ mt: 1 }}>
            <Box>
                <Typography variant="h2" component="h1">
                    {investigator?.name}
                </Typography>
                <Typography variant="h6" component="h2">
                    {investigator?.title}
                </Typography>
            </Box>
            <Divider sx={{ my: 1 }} />
            <Box>
                <Typography sx={{ fontWeight: 600 }}>{investigator?.ability}</Typography>
                <Typography paragraph>{investigator?.abilityDescription}</Typography>
            </Box>
            <Divider sx={{ my: 1 }} />
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography sx={{ fontWeight: 600 }}>Starting Items</Typography>
                <Typography paragraph>{investigator?.startingItems}</Typography>
            </Box>
            <Divider sx={{ my: 1 }} />
            <Grid container>
                <Grid item xs={6}>
                    <Box sx={{ p: 1 }}>
                        <Typography align="center">Sanity ({maxSanity})</Typography>
                        <Typography variant="h3" sx={{ mt: 1 }} align="center">
                            {investigator?.sanity}
                        </Typography>
                        <Box sx={{ display: "flex", justifyContent: "center" }}>
                            <IconButton onClick={() => dispatch(decrementSanity())}>
                                <Remove />
                            </IconButton>
                            <IconButton onClick={() => dispatch(incrementSanity())}>
                                <Add />
                            </IconButton>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={6}>
                    <Box sx={{ p: 1 }}>
                        <Typography align="center">Stamina ({maxStamina})</Typography>
                        <Typography variant="h3" sx={{ mt: 1 }} align="center">
                            {investigator?.stamina}
                        </Typography>
                        <Box sx={{ display: "flex", justifyContent: "center" }}>
                            <IconButton onClick={() => dispatch(decrementStamina())}>
                                <Remove />
                            </IconButton>
                            <IconButton onClick={() => dispatch(incrementStamina())}>
                                <Add />
                            </IconButton>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={6}>
                    <Box sx={{ p: 1 }}>
                        <Typography align="center">Clue Notes</Typography>
                        <Typography variant="h3" sx={{ mt: 1 }} align="center">
                            {investigator?.clueNotes}
                        </Typography>
                        <Box sx={{ display: "flex", justifyContent: "center" }}>
                            <IconButton onClick={() => dispatch(decrementClueNotes())}>
                                <Remove />
                            </IconButton>
                            <IconButton onClick={() => dispatch(incrementClueNotes())}>
                                <Add />
                            </IconButton>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={6}>
                    <Box sx={{ p: 1 }}>
                        <Typography align="center">Elder Signs</Typography>
                        <Typography variant="h3" sx={{ mt: 1 }} align="center">
                            {investigator?.elderSigns}
                        </Typography>
                        <Box sx={{ display: "flex", justifyContent: "center" }}>
                            <IconButton onClick={() => dispatch(decrementElderSigns())}>
                                <Remove />
                            </IconButton>
                            <IconButton onClick={() => dispatch(incrementElderSigns())}>
                                <Add />
                            </IconButton>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
            <Divider sx={{ my: 1 }} />
            <Box sx={{ display: "flex", justifyContent: "space-around", width: 1 }}>
                <Button variant="contained" onClick={() => dispatch(refreshSanity())}>
                    Refresh Sanity
                </Button>
                <Button variant="contained" onClick={() => dispatch(refreshStamina())}>
                    Refresh Stamina
                </Button>
            </Box>
        </Container>
    );
}
