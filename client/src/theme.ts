import { createTheme, responsiveFontSizes } from "@mui/material/styles";

// Create a theme instance.
let theme = createTheme({
    palette: {
        mode: "dark",
        primary: {
            light: "#C59849",
            main: "#4C443C",
            dark: "#282828",
        },
        secondary: {
            main: "#322214",
            contrastText: "#C59849",
        },
    },
});

theme = responsiveFontSizes(theme);

export default theme;
