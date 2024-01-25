import React from "react";
import { SetStateAction, useState } from "react";

export default function DiceMulti({sides, numberOfDice, pickMax, pickMin, handleResult, sumResults = false, manualTrigger = true}: {
    sides: number, 
    numberOfDice: number,
    pickMax?: number,
    pickMin?: number,
    handleResult: React.Dispatch<SetStateAction<number>>
    sumResults?: boolean,
    manualTrigger?: boolean,
}) {
    React.useEffect(() => {
        if(!manualTrigger) {
            generateRandomNumer();
        }
        //document.addEventListener("keydown", escFunction, false);

        /*return () => {
            document.removeEventListener("keydown", escFunction, false);
        }*/
    }, []);

    let [diceRolls, setDiceRolls] = useState<number[]>([]);

    function generateRandomNumer() {
        let rolls = [];

        for(let i = 0; i < numberOfDice; i ++) {
            rolls.push(Math.floor(Math.random() * sides) + 1);
        }

        if(pickMax) {
            rolls.sort();
            rolls = rolls.slice(pickMax * -1);
        }

        if(pickMin) {
            rolls.sort();
            rolls = rolls.slice(pickMin);
        }

        if(sumResults) {
            let sum = rolls.reduce((runningTotal, num) => runningTotal + num);
            setDiceRolls([sum])
        } else {
            setDiceRolls(rolls);
        }

        handleResult(rolls);
        /*let num = Math.floor(Math.random() * sides) + 1;
        setRandomNumber(num);
        handleResult(num - 1);*/
    }

    function getRollsAsString() {
        return diceRolls.join(', ');
    }

    if(manualTrigger) {
        return (
            <div className={'dice dice-d' + sides} onClick={() =>generateRandomNumer()}>
                <span className="roll-label">Roll</span>
                <span className="rolled-value">({getRollsAsString()})</span>
            </div>
        )
    } else {
        return (
            <div className={'dice dice-d' + sides}>
                <span className="roll-label">Roll</span>
                <span className="rolled-value">({getRollsAsString()})</span>
            </div>
        )
    }
};
