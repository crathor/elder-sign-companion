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
