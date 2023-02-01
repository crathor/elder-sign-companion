export interface Investigator {
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
}

export interface InvestigatorStats {
    sanity: number;
    stamina: number;
    clueNotes: number;
    elderSigns: number;
}

export interface InvestigatorData {
    investigator: Investigator;
    investigatorStats: InvestigatorStats;
}
