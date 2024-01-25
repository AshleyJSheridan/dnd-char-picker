"use client";

import { CurrentStep } from "@/app/interfaces/CurrentStep";
import { SetStateAction, useState } from "react";
import React from "react";
import StatBlock from "./statBlock";
import { IStatsOptionChange } from "@/app/interfaces/iStatsOptionChange";
import StatScoreTable from "./statScoreTable";
import { Abilities, Ability } from "@/app/enums/abilities";
import { Race } from "@/app/repositories/races";

export default function Stats({canShow, currentStep, setCurrentStep, race, stats, setStats}: {
    canShow: boolean,
    currentStep: CurrentStep, 
    setCurrentStep: React.Dispatch<SetStateAction<CurrentStep>>,
    race: Race | null;
    stats: any,
    setStats: React.Dispatch<SetStateAction<any>>
}) {
    const [statRolls, setStatRolls] = useState(Array(6).fill(Array(4).fill(0)));
    const [assignedStats, setAssignedStats] = useState(Array(6).fill('-'));
    const statDiceSides = 6;
    const numberOfStats = 6;
    const dicePerStat = 4;

    function next() {
        //setLevel(fixedLevel)
        /*setCurrentStep({
            ...currentStep,
            current: currentStep.current + 1,
            maxCompleted: Math.max(currentStep.maxCompleted, currentStep.current)
        }); */
    }

    function handleStatOptionChange(updateDetails: IStatsOptionChange) {
        let newAssignedStats = assignedStats;
        newAssignedStats[updateDetails.statBlock] = updateDetails.selectedStat;

        setAssignedStats([...newAssignedStats]);
        console.log(assignedStats);
    }

    function clearStatDice() {
        setStatRolls(Array(6).fill(Array(4).fill(0)));
        setAssignedStats(Array(6).fill('-'));
    }

    function rollStatDice() {
        /**
         * this is messier than it should be, but this:
         * 
         * let rolls = Array(numberOfStats).fill(Array(dicePerStat).fill(0));
         * 
         * results in all dice rolls being given the same last 4 rolls because of the fill() passing by reference when not using primitives
         */
        let rolls = Array(numberOfStats);

        
        for(let i = 0; i < numberOfStats; i ++) {   
            rolls[i] = Array(dicePerStat);
            
            for(let j = 0; j < dicePerStat; j ++) {
                let roll = Math.floor(Math.random() * statDiceSides) + 1;
                rolls[i][j] = roll;
            }

            rolls[i].sort().reverse();
        }

        setStatRolls(rolls);
    }

    function getRollValue(ability: Ability): number {
        for(let i = 0; i < assignedStats.length; i ++) {
            if(assignedStats[i] === ability.id) {
                return statRolls[i].slice(0, 3).reduce((runningTotal: number, num: number) => runningTotal + num);
            }
        }

        return 0;
    }

    if(!canShow)
        return '';

    return (
        <section className="stats-selection">
            <h2>Stats</h2>

            <section className="stats-dice-rolls">
                <h3>Dice Rolls</h3>

                <div className="stats-roll-buttons">
                    <button type="button" onClick={rollStatDice} className="button button-primary">Roll</button>
                    <button type="button" onClick={clearStatDice} className="button">Reset</button>
                </div>

                <div className="stats-roll-blocks">
                    <StatBlock roll={0} statRolls={statRolls} handleStatOptionChange={handleStatOptionChange}/>
                    <StatBlock roll={1} statRolls={statRolls} handleStatOptionChange={handleStatOptionChange}/>
                    <StatBlock roll={2} statRolls={statRolls} handleStatOptionChange={handleStatOptionChange}/>
                    <StatBlock roll={3} statRolls={statRolls} handleStatOptionChange={handleStatOptionChange}/>
                    <StatBlock roll={4} statRolls={statRolls} handleStatOptionChange={handleStatOptionChange}/>
                    <StatBlock roll={5} statRolls={statRolls} handleStatOptionChange={handleStatOptionChange}/>
                </div>
            </section>

            <section className="stats-modifiers">
                <h3>Stat Modifiers</h3>

                <div className="stat-modifier-tables">
                    <StatScoreTable ability={Abilities.CHA} rollValue={getRollValue(Abilities.CHA)} race={race}/>
                    <StatScoreTable ability={Abilities.CON} rollValue={getRollValue(Abilities.CON)} race={race}/>
                    <StatScoreTable ability={Abilities.DEX} rollValue={getRollValue(Abilities.DEX)} race={race}/>
                    <StatScoreTable ability={Abilities.INT} rollValue={getRollValue(Abilities.INT)} race={race}/>
                    <StatScoreTable ability={Abilities.STR} rollValue={getRollValue(Abilities.STR)} race={race}/>
                    <StatScoreTable ability={Abilities.WIS} rollValue={getRollValue(Abilities.WIS)} race={race}/>
                </div>
            </section>
        </section>
    );
}