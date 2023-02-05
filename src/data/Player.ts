import { Investigator } from "../types";

export interface PlayerSnapshot {
    id: string;
    sanity: number;
    stamina: number;
    clueNotes: number;
    elderSigns: number;
    usedDailyAbility: boolean;
}

class Player {
    id: string;
    name: string;
    title: string;
    ability: string;
    abilityDescription: string;
    startingItems: string;
    sanity: number;
    maxSanity: number;
    stamina: number;
    maxStamina: number;
    clueNotes: number;
    elderSigns: number;
    hasDailyAbility: boolean;
    usedDailyAbility: boolean;
    dailyAbility: string;

    constructor(invesitagorData: Investigator) {
        this.id = invesitagorData.id;
        this.name = invesitagorData.name;
        this.title = invesitagorData.title;
        this.ability = invesitagorData.ability;
        this.abilityDescription = invesitagorData.abilityDescription;
        this.startingItems = invesitagorData.startingItems;
        this.sanity = invesitagorData.sanity;
        this.maxSanity = invesitagorData.maxSanity;
        this.stamina = invesitagorData.stamina;
        this.maxStamina = invesitagorData.maxStamina;
        this.clueNotes = invesitagorData.clueNotes;
        this.elderSigns = invesitagorData.elderSigns;
        this.hasDailyAbility = invesitagorData.hasDailyAbility;
        this.usedDailyAbility = invesitagorData.usedDailyAbility;
        this.dailyAbility = invesitagorData.dailyAbility;
    }

    getSnapshot(): PlayerSnapshot {
        return {
            id: this.id,
            sanity: this.sanity,
            stamina: this.stamina,
            clueNotes: this.clueNotes,
            elderSigns: this.elderSigns,
            usedDailyAbility: this.usedDailyAbility,
        };
    }

    setStatsFromSnapshot(playerSnapshot: PlayerSnapshot) {
        this.sanity = playerSnapshot.sanity;
        this.stamina = playerSnapshot.stamina;
        this.clueNotes = playerSnapshot.clueNotes;
        this.elderSigns = playerSnapshot.elderSigns;
        this.usedDailyAbility = playerSnapshot.usedDailyAbility;
    }

    incrementStat(statName: string) {
        if (statName === "clueNotes") {
            this.incrementClueNotes();
        }
        if (statName === "elderSigns") {
            this.incrementElderSigns();
        }
        if (statName === "sanity") {
            this.incrementSanity();
        }
        if (statName === "stamina") {
            this.incrementStamina();
        }
    }

    decrementStat(statName: string) {
        if (statName === "clueNotes") {
            this.decrementClueNotes();
        }
        if (statName === "elderSigns") {
            this.decrementElderSigns();
        }
        if (statName === "sanity") {
            this.decrementSanity();
        }
        if (statName === "stamina") {
            this.decrementStamina();
        }
    }

    incrementStamina() {
        if (this.stamina >= this.maxStamina) {
            this.stamina = this.maxStamina;
        } else {
            this.stamina++;
        }
    }

    decrementStamina() {
        if (this.stamina <= 0) {
            this.stamina = 0;
        } else {
            this.stamina--;
        }
    }

    incrementSanity() {
        if (this.sanity >= this.maxSanity) {
            this.sanity = this.maxSanity;
        } else {
            this.sanity++;
        }
    }

    decrementSanity() {
        if (this.sanity <= 0) {
            this.sanity = 0;
        } else {
            this.sanity--;
        }
    }

    incrementClueNotes() {
        this.clueNotes++;
    }

    decrementClueNotes() {
        if (this.clueNotes <= 0) {
            this.clueNotes = 0;
        } else {
            this.clueNotes--;
        }
    }

    incrementElderSigns() {
        this.elderSigns++;
    }

    decrementElderSigns() {
        if (this.elderSigns <= 0) {
            this.elderSigns = 0;
        } else {
            this.elderSigns--;
        }
    }

    useAbility() {
        this.usedDailyAbility = true;
    }

    resetAbility() {
        this.usedDailyAbility = false;
    }
}

export default Player;
