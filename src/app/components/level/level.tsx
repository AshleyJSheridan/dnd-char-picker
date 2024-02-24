"use client";

import { ICurrentStep } from "@/app/interfaces/iCurrentStep";
import { SetStateAction } from "react";

export default function Level({canShow, currentStep, setCurrentStep, setLevel}: {
    canShow: boolean,
    currentStep: ICurrentStep, 
    setCurrentStep: React.Dispatch<SetStateAction<ICurrentStep>>,
    setLevel: React.Dispatch<SetStateAction<number>>
}) {
    const fixedLevel = 1;

    function next() {
        setLevel(fixedLevel)
        setCurrentStep({
            ...currentStep,
            current: currentStep.current + 1,
            maxCompleted: Math.max(currentStep.maxCompleted, currentStep.current)
        }); 
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