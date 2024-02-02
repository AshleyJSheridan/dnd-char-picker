import { Ability } from "../enums/abilities";
import { Race } from "../repositories/races";

export function getStatModifier(statValue: number): number {
    return (Math.floor((statValue - 10) / 2));
}

export function getRacialStatBonus(race: Race | null, ability: Ability): number {
    let runningTotal = 0;

    if(!race)
        return runningTotal;

    race.traits.forEach((trait) => {
        if(trait.abilities) {
            trait.abilities.forEach((traitAbility) => {
                if(ability.id === traitAbility.id) {
                    runningTotal += trait.abilityIncrease ?? 0;
                }
            })
        }
    });

    return runningTotal;
}

export function getStatTotal(race: Race | null, rollValue: number, ability: Ability): number {
    return getRacialStatBonus(race, ability) + rollValue;
}

export function getFormattedModifier(race: Race | null, rollValue: number, ability: Ability): string {
    return new Intl.NumberFormat('en-GB', {
        signDisplay: "always"
    }).format(getStatModifier(getStatTotal(race, rollValue, ability)));
}