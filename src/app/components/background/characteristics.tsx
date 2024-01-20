import { useState } from "react";
import DiceRoll from "../diceRoll/diceRoll";
import { Characteristics } from "@/app/enums/backgrounds";

export default function Characteristics({label, characteristics}: {label: string, characteristics: string[]}) {
    const [value, setValue] = useState(0);

    function getCharacteristicsOptions(options: string[]) {
        return options.map((option: string, index: number) => {
            return (
                <option key={crypto.randomUUID()} value={index}>{option}</option>
            )
        });
    }

    function getSafeLabel(label: string) {
        return label.replaceAll(/[ ']/g, '-').toLowerCase();
    }

    function handleChange(value: string) {
        setValue(parseInt(value));
    }

    return (
        <>
            <label htmlFor={getSafeLabel(label)}>
                {label}
            </label>
            <div className="characteristics-block-selection">
                <select
                    id={getSafeLabel(label)} 
                    name={getSafeLabel(label)} 
                    value={value}
                    onChange={event => handleChange(event.target.value)}
                >
                    {getCharacteristicsOptions(characteristics)}
                </select>
                <DiceRoll sides={characteristics.length} handleResult={handleChange}/>
            </div>
        </>
    );
}