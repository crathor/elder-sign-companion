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
    clueTokens: number;
    elderSigns: number;
    hasDailyAbility: boolean;
    usedDailyAbility: boolean;
    dailyAbility: string;
}
