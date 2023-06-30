import { createBrowserRouter } from "react-router-dom";
import NoInvestigator from "./components/NoInvestigator";
import { Game, Setup, Menu } from "./features/Game";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Menu />,
        errorElement: <NoInvestigator />,
    },
    {
        path: "setup",
        element: <Setup />,
        errorElement: <NoInvestigator />,
    },
    {
        path: "game",
        element: <Game />,
        errorElement: <NoInvestigator />,
    },
]);
