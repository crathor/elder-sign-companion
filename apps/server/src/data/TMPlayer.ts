import { TMPlayerData, TMPlayerStats } from "crappy-companion-types";

const PRODUCTION = "production";
const RESOURCES = "resources";

export type ProductionOrResource = "production" | "resources";

export interface TMPlayerSnapshot {
    playerId: string;
    terraformRating: number;
    production: TMPlayerStats;
    resources: TMPlayerStats;
}

class TMPlayer {
    playerId: string;
    terraformRating: number;
    usedCorporateAbility: boolean;
    production: TMPlayerStats;
    resources: TMPlayerStats;

    constructor(tmPlayerData: TMPlayerData) {
        this.playerId = tmPlayerData.playerId;
        this.terraformRating = tmPlayerData.terraformRating || 20;
        this.usedCorporateAbility = tmPlayerData.usedCorporateAbility;
        this.production = tmPlayerData.production;
        this.resources = tmPlayerData.resources;
    }

    static production = PRODUCTION;
    static resources = RESOURCES;
    static megaCredits = "megaCredits";
    static steel = "steel";
    static titanium = "titanium";
    static plants = "plants";
    static energy = "energy";
    static heat = "heat";

    getSnapshot(): TMPlayerSnapshot {
        return {
            playerId: this.playerId,
            terraformRating: this.terraformRating,
            production: this.production,
            resources: this.resources,
        };
    }

    setStatsFromSnapshot(playerSnapshot: TMPlayerSnapshot) {
        this.playerId = playerSnapshot.playerId;
        this.terraformRating = playerSnapshot.terraformRating;
        this.production = playerSnapshot.production;
        this.resources = playerSnapshot.resources;
    }

    useAbility() {
        this.usedCorporateAbility = true;
    }

    resetAbility() {
        this.usedCorporateAbility = false;
    }

    increaseTerraformRatingBy(amount: number) {
        this.terraformRating += amount;
    }

    decreaseTerraformRatingBy(amount: number) {
        if (this.terraformRating - amount < 0) {
            this.terraformRating = 0;
        } else {
            this.terraformRating -= amount;
        }
    }

    productionPhase() {
        this.resetAbility();
        this.incrementResourcesBy(TMPlayer.heat, this.resources.energy);
        this.resources.energy = 0;
        this.incrementResourcesBy(TMPlayer.megaCredits, this.production.megaCredits);
        this.incrementResourcesBy(TMPlayer.steel, this.production.steel);
        this.incrementResourcesBy(TMPlayer.titanium, this.production.titanium);
        this.incrementResourcesBy(TMPlayer.plants, this.production.plants);
        this.incrementResourcesBy(TMPlayer.energy, this.production.energy);
        this.incrementResourcesBy(TMPlayer.heat, this.production.heat);
    }

    incrementProductionBy(statName: string, amount: number) {
        if (statName === TMPlayer.megaCredits) {
            this.production.megaCredits += amount;
        }
        if (statName === TMPlayer.steel) {
            this.production.steel += amount;
        }
        if (statName === TMPlayer.titanium) {
            this.production.titanium += amount;
        }
        if (statName === TMPlayer.plants) {
            this.production.plants += amount;
        }
        if (statName === TMPlayer.energy) {
            this.production.energy += amount;
        }
        if (statName === TMPlayer.heat) {
            this.production.heat += amount;
        }
    }

    decrementProductionBy(statName: string, amount: number) {
        if (statName === TMPlayer.megaCredits) {
            if (this.production.megaCredits - amount >= -5) {
                this.production.megaCredits -= amount;
            } else {
                this.production.megaCredits = -5;
            }
        }
        if (statName === TMPlayer.steel) {
            if (this.production.steel - amount >= 0) {
                this.production.steel -= amount;
            } else {
                this.production.steel = 0;
            }
        }
        if (statName === TMPlayer.titanium) {
            if (this.production.titanium - amount >= 0) {
                this.production.titanium -= amount;
            } else {
                this.production.titanium = 0;
            }
        }
        if (statName === TMPlayer.plants) {
            if (this.production.plants - amount >= 0) {
                this.production.plants -= amount;
            } else {
                this.production.plants = 0;
            }
        }
        if (statName === TMPlayer.energy) {
            if (this.production.energy - amount >= 0) {
                this.production.energy -= amount;
            } else {
                this.production.energy = 0;
            }
        }
        if (statName === TMPlayer.heat) {
            if (this.production.heat - amount >= 0) {
                this.production.heat -= amount;
            } else {
                this.production.heat = 0;
            }
        }
    }

    incrementResourcesBy(statName: string, amount: number) {
        if (statName === TMPlayer.megaCredits) {
            this.resources.megaCredits += amount;
        }
        if (statName === TMPlayer.steel) {
            this.resources.steel += amount;
        }
        if (statName === TMPlayer.titanium) {
            this.resources.titanium += amount;
        }
        if (statName === TMPlayer.plants) {
            this.resources.plants += amount;
        }
        if (statName === TMPlayer.energy) {
            this.resources.energy += amount;
        }
        if (statName === TMPlayer.heat) {
            this.resources.heat += amount;
        }
    }

    decrementResourcesBy(statName: string, amount: number) {
        if (statName === TMPlayer.megaCredits) {
            if (this.resources.megaCredits - amount >= 0) {
                this.resources.megaCredits -= amount;
            } else {
                this.resources.megaCredits = 0;
            }
        }
        if (statName === TMPlayer.steel) {
            if (this.resources.steel - amount >= 0) {
                this.resources.steel -= amount;
            } else {
                this.resources.steel = 0;
            }
        }
        if (statName === TMPlayer.titanium) {
            if (this.resources.titanium - amount >= 0) {
                this.resources.titanium -= amount;
            } else {
                this.resources.titanium = 0;
            }
        }
        if (statName === TMPlayer.plants) {
            if (this.resources.plants - amount >= 0) {
                this.resources.plants -= amount;
            } else {
                this.resources.plants = 0;
            }
        }
        if (statName === TMPlayer.energy) {
            if (this.resources.energy - amount >= 0) {
                this.resources.energy -= amount;
            } else {
                this.resources.energy = 0;
            }
        }
        if (statName === TMPlayer.heat) {
            if (this.resources.heat - amount >= 0) {
                this.resources.heat -= amount;
            } else {
                this.resources.heat = 0;
            }
        }
    }
}

export default TMPlayer;
