import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Investigator } from "../types";
import investigators from "../data/investigators";

export interface InvestigatorsState {
    currentInvestigator: Investigator | null;
    maxStamina: number;
    maxSanity: number;
}

const initialState: InvestigatorsState = {
    currentInvestigator: null,
    maxStamina: 0,
    maxSanity: 0,
};

export const investigatorState = createSlice({
    name: "investigators",
    initialState,
    reducers: {
        selectInvestigator: (state, action: PayloadAction<Investigator>) => {
            state.currentInvestigator = action.payload;
            state.maxSanity = action.payload.sanity;
            state.maxStamina = action.payload.stamina;
        },
        updateInvestigator: (state, action: PayloadAction<Investigator>) => {
            const investigator = investigators.filter((i) => i.id === action.payload.id)[0];
            state.currentInvestigator = action.payload;
            state.maxSanity = investigator.sanity;
            state.maxStamina = investigator.stamina;
        },
        incrementSanity: (state) => {
            if (state.currentInvestigator && state.currentInvestigator.sanity < state.maxSanity) {
                state.currentInvestigator.sanity += 1;
            }
        },
        decrementSanity: (state) => {
            if (state.currentInvestigator && state.currentInvestigator.sanity > 0) {
                state.currentInvestigator.sanity -= 1;
            }
        },
        incrementStamina: (state) => {
            if (state.currentInvestigator && state.currentInvestigator.stamina < state.maxStamina) {
                state.currentInvestigator.stamina += 1;
            }
        },
        decrementStamina: (state) => {
            if (state.currentInvestigator && state.currentInvestigator.stamina > 0) {
                state.currentInvestigator.stamina -= 1;
            }
        },
        incrementClueNotes: (state) => {
            if (state.currentInvestigator) {
                state.currentInvestigator.clueNotes += 1;
            }
        },
        decrementClueNotes: (state) => {
            if (state.currentInvestigator && state.currentInvestigator.clueNotes > 0) {
                state.currentInvestigator.clueNotes -= 1;
            }
        },
        incrementElderSigns: (state) => {
            if (state.currentInvestigator) {
                state.currentInvestigator.elderSigns += 1;
            }
        },
        decrementElderSigns: (state) => {
            if (state.currentInvestigator && state.currentInvestigator.elderSigns > 0) {
                state.currentInvestigator.elderSigns -= 1;
            }
        },
        refreshSanity: (state) => {
            if (state.currentInvestigator) {
                state.currentInvestigator.sanity = state.maxSanity;
            }
        },
        refreshStamina: (state) => {
            if (state.currentInvestigator) {
                state.currentInvestigator.stamina = state.maxStamina;
            }
        },
    },
});

// Action creators are generated for each case reducer function
export const {
    selectInvestigator,
    updateInvestigator,
    incrementSanity,
    decrementSanity,
    incrementStamina,
    decrementStamina,
    incrementClueNotes,
    decrementClueNotes,
    incrementElderSigns,
    decrementElderSigns,
    refreshSanity,
    refreshStamina,
} = investigatorState.actions;

export default investigatorState.reducer;
