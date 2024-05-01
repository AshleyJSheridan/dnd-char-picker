"use client";

import { CharClasses, CharClass } from "../../repositories/charClasses";
import ClassDetails from "./classDetails";
import React, { SetStateAction, useState } from "react";
import ClassIcon from "./classIcon";
import { ICurrentStep } from "@/app/interfaces/iCurrentStep";
import { PersistState } from "@/app/helpers/persistStateHelper";

export default function ClassSelection({canShow, moveNextStep, setCharClass}: {
    canShow: boolean, 
    moveNextStep: Function,
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

    function handleConfirmClassSelect(charClass: CharClass | null) {
        if(charClass) {
            setCharClass(charClass);
            moveNextStep();
            PersistState.save('class', charClass);
        }
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