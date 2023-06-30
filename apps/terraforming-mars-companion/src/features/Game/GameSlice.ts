import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../redux/store";

export interface TMPlayerStats {
    megaCredits: number;
    steel: number;
    titanium: number;
    plants: number;
    energy: number;
    heat: number;
}

export interface TMPlayerData {
    playerId: string;
    terraformRating: number;
    usedCorporateAbility: boolean;
    production: TMPlayerStats;
    resources: TMPlayerStats;
}

interface TMGameStats {
    megaCredits: number;
    steel: number;
    titanium: number;
    plants: number;
    energy: number;
    heat: number;
}

export interface TMSetupData {
    playerId: string;
    terraformRating: number;
    production: TMGameStats;
    resources: TMGameStats;
}

export interface TMPlayerSnapshot {
    playerId: string;
    terraformRating: number;
    production: TMPlayerStats;
    resources: TMPlayerStats;
}

export interface GameHistory {
    players: TMPlayerSnapshot[];
}

export interface TMPlayer {
    playerId: string;
    terraformRating: number;
    usedCorporateAbility: boolean;
    production: TMPlayerStats;
    resources: TMPlayerStats;
}

interface TMGameData {
    room: string;
    players: TMPlayer[];
    history: GameHistory[];
    expiresOn: string;
    type: string;
}

interface TMGameState {
    setupData: TMSetupData;
    gameState: TMGameData;
}

const initialState: TMGameState = {
    setupData: {
        playerId: "",
        terraformRating: 20,
        production: {
            megaCredits: 0,
            steel: 0,
            titanium: 0,
            plants: 0,
            energy: 0,
            heat: 0,
        },
        resources: {
            megaCredits: 0,
            steel: 0,
            titanium: 0,
            plants: 0,
            energy: 0,
            heat: 0,
        },
    },
    gameState: {
        room: "",
        players: [],
        history: [],
        expiresOn: "",
        type: "",
    },
};

export const GameSlice = createSlice({
    name: "tmGame",
    initialState,
    reducers: {
        setPlayerId: (state, action: PayloadAction<string>) => {
            state.setupData.playerId = action.payload;
        },
        setTerraformRating: (state, action: PayloadAction<number>) => {
            state.setupData.terraformRating = action.payload;
        },
        setProduction: (state, action: PayloadAction<TMGameStats>) => {
            state.setupData.production = action.payload;
        },
        setResources: (state, action: PayloadAction<TMGameStats>) => {
            state.setupData.resources = action.payload;
        },
        setGameState: (state, action: PayloadAction<TMGameData>) => {
            state.gameState = action.payload;
        },
    },
});

export const { setPlayerId, setTerraformRating, setProduction, setResources, setGameState } = GameSlice.actions;

export const selectSetup = (state: RootState) => state.game.setupData;
export const selectGame = (state: RootState) => state.game.gameState;

export default GameSlice.reducer;
