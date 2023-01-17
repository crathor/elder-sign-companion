import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectInvestigator } from "../redux/investigators";
import investigatorsData from "../data/investigators";

function Root() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    return (
        <main className="root-main">
            <header className="root-header">
                <h1 className="root-title">Select an Investigator</h1>
            </header>
            <section className="root-section">
                {investigatorsData.map((investigator) => (
                    <button
                        key={investigator.id}
                        className="button"
                        onClick={() => {
                            dispatch(selectInvestigator(investigator));
                            navigate(`investigator/${investigator.id}`);
                        }}
                    >
                        {investigator.name}
                    </button>
                ))}
            </section>
            <footer className="root-footer">
                <button onClick={() => localStorage.clear()}>Reset Data</button>
            </footer>
        </main>
    );
}

export default Root;
