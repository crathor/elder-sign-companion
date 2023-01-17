import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { Link, LoaderFunctionArgs, useLoaderData } from "react-router-dom";
import {
    decrementClueNotes,
    decrementElderSigns,
    decrementSanity,
    decrementStamina,
    incrementClueNotes,
    incrementElderSigns,
    incrementSanity,
    incrementStamina,
    refreshSanity,
    refreshStamina,
    selectInvestigator,
} from "../redux/investigators";
import { useEffect } from "react";
import investigators from "../data/investigators";
import { Investigator } from "../types";

export async function loader({ params }: LoaderFunctionArgs): Promise<Investigator> {
    const investigator = investigators.find((investigator) => investigator.id === Number(params.investigatorId));

    if (!investigator) {
        throw new Response("No Investigator Found");
    }
    return investigator;
}

export default function InvestigatorPage() {
    const dispatch = useDispatch();
    const loaderData = useLoaderData() as Investigator;
    const investigator = useSelector((state: RootState) => state.investigators.currentInvestigator);
    const maxSanity = useSelector((state: RootState) => state.investigators.maxSanity);
    const maxStamina = useSelector((state: RootState) => state.investigators.maxStamina);

    useEffect(() => {
        // if user came directly to this page set the investigator from loader data
        if (!investigator) {
            dispatch(selectInvestigator(loaderData));
        }
    }, [investigator]);

    return (
        <main className="investigator-main">
            <header className="investigator-header">
                <Link className="investigator-link" to="/">
                    Change Investigator
                </Link>
            </header>
            <section className="investigator-section">
                <div className="investigator-info">
                    <h1>{investigator?.name}</h1>
                    <p>{investigator?.title}</p>
                </div>
                <div className="investigator-abilities">
                    <p>
                        <b>{investigator?.ability}</b>
                    </p>
                    <p className="investigator-abilities-description">{investigator?.abilityDescription}</p>
                </div>
                <div className="investigator-items">
                    <i className="investigator-items-title">Starting Items:</i>
                    <p className="investigator-items-starting-items">{investigator?.startingItems}</p>
                </div>
                <div className="investigator-stats">
                    <div className="investigator-stat-container">
                        <p className="stat-title">Sanity ({maxSanity}): </p>
                        <p className="stat">{investigator?.sanity}</p>
                        <div className="investigator-stat-button-container">
                            <button className="minus-button" onClick={() => dispatch(decrementSanity())}>
                                <i className="fa fa-minus"></i>
                            </button>
                            <button className="add-button" onClick={() => dispatch(incrementSanity())}>
                                <i className="fa fa-plus"></i>
                            </button>
                        </div>
                    </div>
                    <div className="investigator-stat-container">
                        <p className="stat-title">Stamina ({maxStamina}): </p>
                        <p className="stat">{investigator?.stamina}</p>
                        <div className="investigator-stat-button-container">
                            <button className="minus-button" onClick={() => dispatch(decrementStamina())}>
                                <i className="fa fa-minus"></i>
                            </button>

                            <button className="add-button" onClick={() => dispatch(incrementStamina())}>
                                <i className="fa fa-plus"></i>
                            </button>
                        </div>
                    </div>
                    <div className="investigator-stat-container">
                        <p className="stat-title">Clue Notes: </p>
                        <p className="stat">{investigator?.clueNotes}</p>
                        <div className="investigator-stat-button-container">
                            <button className="minus-button" onClick={() => dispatch(decrementClueNotes())}>
                                <i className="fa fa-minus"></i>
                            </button>
                            <button className="add-button" onClick={() => dispatch(incrementClueNotes())}>
                                <i className="fa fa-plus"></i>
                            </button>
                        </div>
                    </div>
                    <div className="investigator-stat-container">
                        <p className="stat-title">Elder Signs: </p>
                        <p className="stat">{investigator?.elderSigns}</p>
                        <div className="investigator-stat-button-container">
                            <button className="minus-button" onClick={() => dispatch(decrementElderSigns())}>
                                <i className="fa fa-minus"></i>
                            </button>

                            <button className="add-button" onClick={() => dispatch(incrementElderSigns())}>
                                <i className="fa fa-plus"></i>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="investigator-quick-commands">
                    <button onClick={() => dispatch(refreshSanity())} className="quick-button">
                        Refresh Sanity
                    </button>
                    <button onClick={() => dispatch(refreshStamina())} className="quick-button">
                        Refresh Stamina
                    </button>
                </div>
            </section>
        </main>
    );
}
