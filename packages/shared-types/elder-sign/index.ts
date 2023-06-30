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

export interface ElderSignPlayer {
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
    hasAlly: boolean;
    allyTokens: number;
}

export interface ElderSignPlayerSnapshot {
    id: string;
    sanity: number;
    stamina: number;
    clueTokens: number;
    elderSigns: number;
    usedDailyAbility: boolean;
    hasAlly: boolean;
    allyTokens: number;
}

export interface ElderSignGameHistory {
    players: ElderSignPlayerSnapshot[];
    clock: 12 | 3 | 6 | 9;
    round: number;
}

export interface ElderSignGameBase {
    room: string;
    players: ElderSignPlayer[];
    clock: 12 | 3 | 6 | 9;
    round: number;
    history: ElderSignGameHistory[];
    expiresOn: string;
    type: string;
}
