import { useState } from "react";
import DiceRoll from "../diceRoll/diceRoll";

export default function Characteristics({label, characteristics}) {
    const [value, setValue] = useState(0);

    function getCharacteristicsOptions(options) {
        return options.map((option, index) => {
            return (
                <option key={crypto.randomUUID()} value={index}>{option}</option>
            )
        });
    }

    function getSafeLabel(label) {
        return label.replaceAll(/[ ']/g, '-').toLowerCase();
    }

    function handleResult(result) {
        setValue(result);
    }

    return (
        <>
            <label for={getSafeLabel(label)}>
                {label}
            </label>
            <div className="characteristics-block-selection">
                <select id={getSafeLabel(label)} value={value} onChange={console.log(event, value)}>
                    {getCharacteristicsOptions(characteristics)}
                </select>
                <DiceRoll sides={characteristics.length} handleResult={handleResult}/>
            </div>
        </>
    );
}