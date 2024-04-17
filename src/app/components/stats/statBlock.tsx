import { SetStateAction } from "react";
import { Abilities } from "@/app/enums/abilities";

export default function StatBlock({roll, statRolls, handleStatOptionChange, value, assignedStats}: {
    roll: number,
    statRolls: number[][],
    handleStatOptionChange: React.Dispatch<SetStateAction<any>>,
    value: string,
    assignedStats: string[]
}) {
    function getStatsOptions() {
        const abilities = Object.entries(Abilities).map(ability => ability[0]);

        return abilities.map(stat => {
            if(assignedStats.includes(stat) && stat !== assignedStats[roll])
                return '';
            
            return <option key={stat} value={stat}>{stat}</option>
        });
    }

    function getRollsTotal(rolls: number[]) {
        return rolls.slice(0, 3).reduce((runningTotal, num) => runningTotal + num);
    }

    return (
        <div className="stats-roll-block">
            <h4>Stat {roll + 1}</h4>
            <div className="dice-rolls">
                <div className={'dice-roll dice-roll-use dice-roll-' + statRolls[roll][0]}>{statRolls[roll][0]}</div>
                <div className={'dice-roll dice-roll-use dice-roll-' + statRolls[roll][1]}>{statRolls[roll][1]}</div>
                <div className={'dice-roll dice-roll-use dice-roll-' + statRolls[roll][2]}>{statRolls[roll][2]}</div>
                <div className={'dice-roll dice-roll-throw dice-roll-' + statRolls[roll][3]}>{statRolls[roll][3]}</div>
            </div>
            <div className="dice-roll-total">{getRollsTotal(statRolls[roll])}</div>

            <select 
                onChange={event => handleStatOptionChange({statBlock: roll, selectedStat: event.target.value})}
                value={value}
            >
                <option>-</option>
                {getStatsOptions()}
            </select>
        </div>
    );

}