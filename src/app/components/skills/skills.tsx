"use client";

import { ICurrentStep } from "@/app/interfaces/iCurrentStep";
import { CharClass } from "@/app/repositories/charClasses";
import { Race } from "@/app/repositories/races";
import { SetStateAction } from "react";

export default function Skills({canShow, currentStep, setCurrentStep, race, level, charClass, skills, setSkills}: {
    canShow: boolean,
    currentStep: ICurrentStep, 
    setCurrentStep: React.Dispatch<SetStateAction<ICurrentStep>>,
    race: Race | null;
    level: number,
    charClass: CharClass  |null,
    skills: any,
    setSkills: React.Dispatch<SetStateAction<any>>,
}) {
    function next() {
        
        /*setStats(stats);
        setCurrentStep({
            ...currentStep,
            current: currentStep.current + 1,
            maxCompleted: Math.max(currentStep.maxCompleted, currentStep.current)
        });*/
    }

    function getRacialTraits(race: Race | null) {
        if(!race)
            return '';

        console.log(race.traits);

        return '';
    }

    if(!canShow)
        return '';

    return (
        <section className="skills-selection">
            <h2>Stats</h2>

            <button className="button-next" onClick={() => next()}>Next</button>

            <section className="skills-racial-traits">
                <h3>Racial Traits</h3>

                {getRacialTraits(race)}
            </section>

            <button className="button-next" onClick={() => next()}>Next</button>
        </section>
    )
}