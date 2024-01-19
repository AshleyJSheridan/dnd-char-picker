import { useState } from "react";

export default function DiceRoll({sides, handleResult}) {
    let [randomNumber, setRandomNumber] = useState(null);

    function generateRandomNumer() {
        let num = Math.floor(Math.random() * sides) + 1;
        setRandomNumber(num);
        handleResult(num - 1);
    }

    return (
        <div className={'dice dice-d' + sides} onClick={() =>generateRandomNumer()}>
            <span className="roll-label">Roll</span>
            <span className="rolled-value">({randomNumber})</span>
        </div>
    )
};
