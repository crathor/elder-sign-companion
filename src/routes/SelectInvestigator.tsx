import { Button, Container, Grid } from "@mui/material";
import investigatorsData from "../data/investigators";
import { useDispatch } from "react-redux";
import { selectInvestigator } from "../redux/investigators";
import { useNavigate } from "react-router";

export default function SelectInvestigator() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    return (
        <Container sx={{ mt: 2 }}>
            <Grid container spacing={1}>
                {investigatorsData.map((investigator) => (
                    <Grid key={investigator.id} item xs={6} md={6}>
                        <Button
                            variant="contained"
                            sx={{ width: 1, p: 2 }}
                            key={investigator.id}
                            onClick={() => {
                                dispatch(selectInvestigator(investigator));
                                navigate(`investigator/${investigator.id}`);
                            }}
                        >
                            {investigator.name}
                        </Button>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}
