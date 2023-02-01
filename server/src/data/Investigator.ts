class Investigator {
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
}

export default Investigator;
