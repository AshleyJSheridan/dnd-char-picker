import { Ability } from "@/app/enums/abilities";
import { Race } from "@/app/repositories/races";
import * as statHelper from "@/app/helpers/statHelper";

export default function StatScoreTable({ability, rollValue, race}: {
    ability: Ability;
    rollValue: number;
    race: Race | null;
}) {
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
                    <td>Racial Bonus</td><td>+{statHelper.getRacialStatBonus(race, ability)}</td>
                </tr>
                <tr>
                    <th>Total</th><th>{statHelper.getStatTotal(race, rollValue, ability)}</th>
                </tr>
                <tr>
                    <th>Skill Modifier</th><th>{statHelper.getFormattedModifier(race, rollValue, ability)}</th>
                </tr>
            </tbody>
        </table>
    );
};