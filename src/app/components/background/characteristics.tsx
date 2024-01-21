import { SetStateAction, useState } from "react";
import DiceRoll from "../diceRoll/diceRoll";
import { Characteristics } from "@/app/enums/backgrounds";
import React from "react";

export default function Characteristics({label, characteristics, handleCharacteristicChange}: {
    label: string, characteristics: string[], handleCharacteristicChange: React.Dispatch<SetStateAction<any>>
}) {
    React.useEffect(() => {
        handleCharacteristicChange({key: getSafeLabel(label), label: label, value: value});
    }, []);
    
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

    function handleChange(value: number) {
        setValue(value);
        handleCharacteristicChange({key: getSafeLabel(label), label: label, value: value});
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
                    onChange={event => handleChange(parseInt(event.target.value))}
                >
                    {getCharacteristicsOptions(characteristics)}
                </select>
                <DiceRoll sides={characteristics.length} handleResult={handleChange}/>
            </div>
        </>
    );
}