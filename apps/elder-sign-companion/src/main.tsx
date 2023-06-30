import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import socket from "./lib/socket-io";
import { v4 as uuidv4 } from "uuid";
import { Provider } from "react-redux";
import { store } from "./redux/store";

let companionAppId = localStorage.getItem("companionAppId");

if (companionAppId) {
} else {
    companionAppId = uuidv4();
    localStorage.setItem("companionAppId", companionAppId);
}

socket.emit("connect-user", companionAppId);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <RouterProvider router={router} />
            </ThemeProvider>
        </Provider>
    </React.StrictMode>
);
