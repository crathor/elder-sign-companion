import { createTheme, responsiveFontSizes } from "@mui/material/styles";

// Create a theme instance.
let theme = createTheme({
    palette: {
        primary: {
            main: "#4C443C",
            contrastText: "#C59849",
        },
        secondary: {
            main: "#322214",
            contrastText: "#C59849",
        },
        text: {
            primary: "#C59849",
        },
    },
});

theme = responsiveFontSizes(theme);

export default theme;
