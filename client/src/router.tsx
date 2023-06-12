import { Outlet, createBrowserRouter } from "react-router-dom";
import NoInvestigator from "./components/NoInvestigator";
import Game from "./pages/game";
import GameMenu from "./pages/game-menu";
import SelectPlayer from "./pages/select-player";
import { ELDER_SIGN, ES_PATH, TERRAFORMING_MARS } from "./utils/constants";
import GameSetupMenu from "./pages/game-setup";
import TerraformingMarsSetup from "./pages/terraforming-mars-setup";
import TerraformingMarsGame from "./pages/terraforming-mars-game";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <GameMenu />,
        errorElement: <NoInvestigator />,
    },
    {
        path: ES_PATH,
        element: <Outlet />,
        children: [
            {
                path: "menu",
                element: <GameSetupMenu gameType={ELDER_SIGN} />,
                errorElement: <NoInvestigator />,
            },
            {
                path: "select-player",
                element: <SelectPlayer />,
                errorElement: <NoInvestigator />,
            },
            {
                path: "game",
                element: <Game />,
                errorElement: <NoInvestigator />,
            },
        ],
    },
    {
        path: "terraforming-mars",
        element: <Outlet />,
        children: [
            {
                path: "menu",
                element: <GameSetupMenu gameType={TERRAFORMING_MARS} />,
                errorElement: <NoInvestigator />,
            },
            {
                path: "setup",
                element: <TerraformingMarsSetup />,
                errorElement: <NoInvestigator />,
            },
            {
                path: "game",
                element: <TerraformingMarsGame />,
                errorElement: <NoInvestigator />,
            },
        ],
    },
]);
