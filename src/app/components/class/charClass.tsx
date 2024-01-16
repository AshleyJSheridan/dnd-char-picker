"use client";

import { CharClasses, CharClass } from "./charClasses";
import ClassDetails from "./classDetails";
import React, { useState } from "react";
import ClassIcon from "./classIcon";

export default function CharClass({canShow, currentStep, setCurrentStep, charClass, setCharClass}) {
    let canShowComponent = canShow('Class');

    let [selectedClass, setSelectedClass] = useState(null);

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
        console.log(charClass)
        setSelectedClass(charClass);
    }

    if(!canShowComponent)
        return '';

    return (
        <>
            <section className="class-selection">
                <ul className="class-list">
                    {getClassListContent()}
                </ul>
            </section>
            <ClassDetails charClass={selectedClass} setCharClass={setSelectedClass}/>
        </>
    );
}