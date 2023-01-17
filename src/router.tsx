import { createBrowserRouter } from "react-router-dom";
import Root from "./routes/root";
import InvestigatorPage, { loader as investigatorLoader } from "./routes/investigator";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
    },
    {
        path: "investigator/:investigatorId",
        element: <InvestigatorPage />,
        loader: investigatorLoader,
    },
]);
