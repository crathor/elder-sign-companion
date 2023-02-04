import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import socket from "./lib/socket-io";
import { v4 as uuidv4 } from "uuid";

let elderSignId = localStorage.getItem("elderSignId");

if (elderSignId) {
} else {
    elderSignId = uuidv4();
    localStorage.setItem("elderSignId", elderSignId);
}

socket.emit("connect-user", elderSignId);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Provider store={store}>
                <RouterProvider router={router} />
            </Provider>
        </ThemeProvider>
    </React.StrictMode>
);
