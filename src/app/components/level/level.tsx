"use client";

import { PersistState } from "@/app/helpers/persistStateHelper";
import { ICurrentStep } from "@/app/interfaces/iCurrentStep";
import { SetStateAction } from "react";

export default function Level({canShow, moveNextStep, setLevel}: {
    canShow: boolean,
    moveNextStep: Function,
    setLevel: React.Dispatch<SetStateAction<number>>
}) {
    const fixedLevel = 1;

    function next() {
        setLevel(fixedLevel)
        moveNextStep();
        PersistState.save('level', fixedLevel);
    }

    if(!canShow)
        return '';

    return (
        <section className="level-selection">
            <p>Level fixed at 1 for now.</p>

            <button className="button-next" onClick={() => next()}>Next</button>
        </section>
    );
}