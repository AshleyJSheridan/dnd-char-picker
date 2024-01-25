import { Ability } from "@/app/enums/abilities";
import { Race } from "@/app/repositories/races";

export default function StatScoreTable({ability, rollValue, race}: {
    ability: Ability;
    rollValue: number;
    race: Race | null;
}) {
    function getRacialBonus(): number {
        let runningTotal = 0;

        race?.traits.forEach((trait) => {
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

    function getTotal(): number {
        return getRacialBonus() + rollValue;
    }

    function getModifier(): number {
        return (Math.floor((getTotal() - 10) / 2));
    }

    function getFormattedModifier(): string {
        return new Intl.NumberFormat('en-GB', {
            signDisplay: "always"
        }).format(getModifier());
    }

    return (
        <table>
            <thead>
                <tr>
                    <th colSpan={2}>{ability.name}</th>
                </tr>
                <tr>
                    <td colSpan={2}>{ability.description}</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Base Score</td><td>{rollValue}</td>
                </tr>
                <tr>
                    <td>Racial Bonus</td><td>+{getRacialBonus()}</td>
                </tr>
                <tr>
                    <th>Total</th><th>{getTotal()}</th>
                </tr>
                <tr>
                    <th>Skill Modifier</th><th>{getFormattedModifier()}</th>
                </tr>
            </tbody>
        </table>
    );
};