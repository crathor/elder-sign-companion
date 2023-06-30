import { createTheme, responsiveFontSizes } from "@mui/material/styles";

// Create a theme instance.
let theme = createTheme({
    palette: {
        mode: "dark",
        primary: {
            light: "#DA2C38",
            dark: "#4C443C",
            main: "#282828",
        },
        secondary: {
            main: "#4C443C",
            contrastText: "#C59849",
        },
    },
});

theme = responsiveFontSizes(theme);

export default theme;
