import { createBrowserRouter } from "react-router-dom";
import NoInvestigator from "./components/NoInvestigator";
import Game from "./pages/game";
import SelectPlayer from "./pages/select-player";
import GameSetupMenu from "./pages/game-setup";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <GameSetupMenu />,
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
