import { createBrowserRouter } from "react-router-dom";
import NoInvestigator from "./components/NoInvestigator";
import Game from "./pages/game";
import GameMenu from "./pages/game-menu";
import SelectPlayer from "./pages/select-player";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <GameMenu />,
        errorElement: <NoInvestigator />,
    },
    {
        path: "/select-player",
        element: <SelectPlayer />,
        errorElement: <NoInvestigator />,
    },
    {
        path: "/game",
        element: <Game />,
        errorElement: <NoInvestigator />,
    },
]);
