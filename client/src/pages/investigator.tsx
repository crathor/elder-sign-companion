import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { LoaderFunctionArgs, useLoaderData } from "react-router-dom";
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
import { Button, Paper, Divider, Grid, IconButton, Typography } from "@mui/material";
import Remove from "@mui/icons-material/Remove";
import Add from "@mui/icons-material/Add";

export async function loader({ params }: LoaderFunctionArgs): Promise<Investigator> {
    const investigator = investigators.find((investigator) => investigator.id === Number(params.investigatorId));

    if (!investigator) {
        throw new Response("No Investigator Found");
    }
    return investigator;
}

function RemoveButton({ onClick }: any) {
    return (
        <IconButton onClick={onClick} sx={{ color: "#FFF" }}>
            <Remove />
        </IconButton>
    );
}

function AddButton({ onClick }: any) {
    return (
        <IconButton onClick={onClick} sx={{ color: "#FFF" }}>
            <Add />
        </IconButton>
    );
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
            <Paper sx={{ backgroundColor: "primary.main", px: 2, py: 1 }}>
                <Typography variant="overline">{investigator?.title}</Typography>
                <Typography variant="h3" component="h1">
                    {investigator?.name}
                </Typography>
                <Divider sx={{ my: 1 }} />
                <Box>
                    <Typography sx={{ fontWeight: 600 }}>{investigator?.ability}</Typography>
                    <Typography variant="body2">{investigator?.abilityDescription}</Typography>
                </Box>
                <Divider sx={{ my: 1 }} />
                <Box>
                    <Typography sx={{ fontWeight: 600 }}>Starting Items</Typography>
                    <Typography variant="body2">{investigator?.startingItems}</Typography>
                </Box>
            </Paper>
            <Paper sx={{ mt: 1, backgroundColor: "primary.main" }}>
                <Grid container>
                    <Grid item xs={6}>
                        <Box sx={{ p: 1 }}>
                            <Typography align="center">Sanity ({maxSanity})</Typography>
                            <Typography variant="h3" sx={{ mt: 1 }} align="center">
                                {investigator?.sanity}
                            </Typography>
                            <Box sx={{ display: "flex", justifyContent: "center" }}>
                                <RemoveButton onClick={() => dispatch(decrementSanity())} />
                                <AddButton onClick={() => dispatch(incrementSanity())} />
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
                                <RemoveButton onClick={() => dispatch(decrementStamina())} />
                                <AddButton onClick={() => dispatch(incrementStamina())} />
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
                                <RemoveButton onClick={() => dispatch(decrementClueNotes())} />
                                <AddButton onClick={() => dispatch(incrementClueNotes())} />
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
                                <RemoveButton onClick={() => dispatch(decrementElderSigns())} />
                                <AddButton onClick={() => dispatch(incrementElderSigns())} />
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Paper>

            <Box sx={{ mt: 1, display: "flex", justifyContent: "space-between", width: 1 }}>
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
