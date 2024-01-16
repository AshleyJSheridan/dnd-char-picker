"use client";

import { useState } from "react";
import Nav from './components/nav/nav';
import { NavItems } from "./components/nav/navItems";
import Gender from "./components/gender/gender";
import Race from './components/pick-race/race';
import Alignment from "./components/alignment/alignment";
import CharClass from "./components/class/charClass";

export default function Home() {
    const [currentStep, setCurrentStep] = useState({current: 1, maxCompleted: 0});

    const [gender, setGender] = useState(0);
    const [race, setRace] = useState(null);
    const [alignment, setAlignment] = useState('True Neutral');
    const [charClass, setCharClass] = useState(null);

    function canShowComponent(navName: string) {
        let navItem;

        for(let i = 0; i < NavItems.length; i ++) {
            if(NavItems[i].name === navName) {
                navItem = NavItems[i];
                break;
            }
        }

        if(!navItem)
            return false;

        return navItem.id === currentStep.current;
    }

    return (
        <>
            <Nav currentStep={currentStep} setCurrentStep={setCurrentStep}></Nav>
            <main>
                <Gender 
                    canShow={() => canShowComponent('Gender')} 
                    gender={gender} setGender={setGender} 
                    currentStep={currentStep} 
                    setCurrentStep={setCurrentStep}></Gender>
                <Race 
                    canShow={() => canShowComponent('Race')} 
                    gender={gender} 
                    currentStep={currentStep} 
                    setCurrentStep={setCurrentStep} 
                    race={race} 
                    setRace={setRace}></Race>
                <Alignment
                    canShow={() => canShowComponent('Alignment')}
                    currentStep={currentStep} 
                    setCurrentStep={setCurrentStep} 
                    alignment={alignment} 
                    setAlignment={setAlignment}></Alignment>
                <CharClass
                    canShow={() => canShowComponent('Class')}
                    currentStep={currentStep} 
                    setCurrentStep={setCurrentStep} 
                    charClass={charClass} 
                    setCharClass={setCharClass}></CharClass>
            </main>
        </>
    )
}
