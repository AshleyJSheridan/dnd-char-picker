"use client";

import { CharClasses, CharClass } from "../../repositories/charClasses";
import ClassDetails from "./classDetails";
import React, { SetStateAction, useState } from "react";
import ClassIcon from "./classIcon";
import { CurrentStep } from "@/app/interfaces/CurrentStep";

export default function CharClass({canShow, currentStep, setCurrentStep, charClass, setCharClass}: {
    canShow: boolean, 
    currentStep: CurrentStep, 
    setCurrentStep: React.Dispatch<SetStateAction<CurrentStep>>,
    charClass: CharClass  |null,
    setCharClass: React.Dispatch<SetStateAction<CharClass|null>>
}) {
    let [selectedClass, setSelectedClass] = useState<CharClass|null>(null);

    function getClassListContent() {
        return CharClasses.map(charClass => 
            <li 
                key={charClass.id} 
                className={'character-class class-' + charClass.name.toLowerCase()}
                onClick={() => handleClassSelect(charClass)}
            >
                <span className="name">{charClass.name}</span>
                <ClassIcon charClassName={charClass.name}/>
            </li>
        );
    }

    function handleClassSelect(charClass: CharClass) {
        setSelectedClass(charClass);
    }

    function handleConfirmClassSelect(charClass: CharClass) {
        setCharClass(charClass);
        setCurrentStep({
            ...currentStep,
            current: currentStep.current + 1,
            maxCompleted: Math.max(currentStep.maxCompleted, currentStep.current)
        }); 
    }

    function getClassDetailsModal() {
        if(!selectedClass)
            return '';

        return (
            <ClassDetails 
                charClass={selectedClass}
                setCharClass={setSelectedClass}
                confirmCharClass={handleConfirmClassSelect}
            />
        );
    }

    if(!canShow)
        return '';

    return (
        <>
            <section className="class-selection">
                <ul className="class-list">
                    {getClassListContent()}
                </ul>
            </section>
            {getClassDetailsModal()}
        </>
    );
}