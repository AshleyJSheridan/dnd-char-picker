"use client";

import { PersistState } from "@/app/helpers/persistStateHelper";
import { SetStateAction } from "react";

export default function Gender({canShow, gender, setGender, moveNextStep}: {
    canShow: boolean, 
    gender: number, 
    setGender: React.Dispatch<SetStateAction<number>>,
    moveNextStep: Function
}) {
    function handleGenderSelection(genderSelection: number) {
        setGender(genderSelection);
    }

    function next() {
        if(gender > 0) {
            moveNextStep();
            PersistState.save('gender', gender);
        }
    }

    if(!canShow)
        return '';

    return (
        <>
            <section className="gender-selection">
                <ul>
                    <li className={'gender-male ' + ((gender === 1) ? 'active' : '')}>
                        <button onClick={() => handleGenderSelection(1)}>
                            <span className="gender-symbol"></span>
                            Male
                        </button>
                    </li>
                    <li className={'gender-female ' + ((gender === 2) ? 'active' : '')}>
                        <button onClick={() => handleGenderSelection(2)}>
                            <span className="gender-symbol"></span>
                            Female
                        </button>
                    </li>
                </ul>
            </section>
            <button className="button-next" onClick={() => next()} disabled={gender === 0}>Next</button>
        </>
    );
}
