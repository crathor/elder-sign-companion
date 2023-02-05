import { Investigator } from "../types";

export interface PlayerSnapshot {
    id: string;
    sanity: number;
    stamina: number;
    clueTokens: number;
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
    clueTokens: number;
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
        this.clueTokens = invesitagorData.clueTokens;
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
            clueTokens: this.clueTokens,
            elderSigns: this.elderSigns,
            usedDailyAbility: this.usedDailyAbility,
        };
    }

    setStatsFromSnapshot(playerSnapshot: PlayerSnapshot) {
        this.sanity = playerSnapshot.sanity;
        this.stamina = playerSnapshot.stamina;
        this.clueTokens = playerSnapshot.clueTokens;
        this.elderSigns = playerSnapshot.elderSigns;
        this.usedDailyAbility = playerSnapshot.usedDailyAbility;
    }

    incrementStat(statName: string) {
        if (statName === "clueTokens") {
            this.incrementclueTokens();
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
        if (statName === "clueTokens") {
            this.decrementclueTokens();
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

    incrementclueTokens() {
        this.clueTokens++;
    }

    decrementclueTokens() {
        if (this.clueTokens <= 0) {
            this.clueTokens = 0;
        } else {
            this.clueTokens--;
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
