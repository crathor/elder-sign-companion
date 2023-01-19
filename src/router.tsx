import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Root from "./routes/Root";
import InvestigatorPage, { loader as investigatorLoader } from "./routes/Investigator";
import SelectInvestigator from "./routes/SelectInvestigator";

export const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <Root />,
            children: [
                {
                    path: "/",
                    element: <SelectInvestigator />,
                },
                {
                    path: "/investigator/:investigatorId",
                    element: <InvestigatorPage />,
                    loader: investigatorLoader,
                },
            ],
        },
    ],
    {
        basename: "/elder-sign-companion",
    }
);
