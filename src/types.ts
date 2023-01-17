export interface Investigator {
    id: number;
    name: string;
    title: string;
    ability: string;
    abilityDescription: string;
    startingItems: string;
    sanity: number;
    stamina: number;
    clueNotes: number;
    elderSigns: number;
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
