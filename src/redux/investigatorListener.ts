import { TypedStartListening, createListenerMiddleware, isAnyOf } from "@reduxjs/toolkit";
import {
    decrementClueNotes,
    decrementElderSigns,
    decrementSanity,
    decrementStamina,
    incrementClueNotes,
    incrementElderSigns,
    incrementSanity,
    incrementStamina,
    selectInvestigator,
    updateInvestigator,
} from "./investigators";
import { AppDispatch, RootState } from "./store";

export const listenerMiddleware = createListenerMiddleware();
export type AppStartListening = TypedStartListening<RootState, AppDispatch>;
export const startAppListening = listenerMiddleware.startListening as AppStartListening;

// listen to all actions for investigators (minus `updateInvestigator`)
startAppListening({
    matcher: isAnyOf(
        selectInvestigator,
        incrementSanity,
        decrementSanity,
        incrementStamina,
        decrementStamina,
        incrementClueNotes,
        decrementClueNotes,
        incrementElderSigns,
        decrementElderSigns
    ),
    effect: (action, api) => {
        const state = api.getState();

        // if the user selected an investigator
        if (action.type === selectInvestigator.type) {
            // see if there is already locally stored data
            const localInvestigatorData = localStorage.getItem(`investigator-${action.payload.id}`);
            if (localInvestigatorData) {
                // if local data exists update the state to show the current data
                api.dispatch(updateInvestigator(JSON.parse(localInvestigatorData)));
            } else {
                localStorage.setItem(`investigator-${action.payload.id}`, JSON.stringify(action.payload));
            }
        }
        // if not selecting an investigator
        else if (state.investigators.currentInvestigator) {
            // update local storage with current investigators state
            localStorage.setItem(
                `investigator-${state.investigators.currentInvestigator.id}`,
                JSON.stringify(state.investigators.currentInvestigator)
            );
        }
    },
});
