"use client";

import { useState } from "react";
import Nav from './components/nav/nav';
import { NavItems } from "./enums/navItems";
import Gender from "./components/gender/gender";
import Race from './components/pick-race/race';
import Alignment from "./components/alignment/alignment";
import ClassSelection from "./components/class/charClass";
import CharBackground from "./components/background/background";
import { Race as CharRace } from "./repositories/races";
import Level from "./components/level/level";
import Stats from "./components/stats/stats";
import CharSkills from "./components/skills/skills";
import CharLanguages from "./components/languages/languages";
import Spells from "./components/spells/spells";
import { Background } from "./enums/backgrounds";
import { CharClass } from "./repositories/charClasses";
import { iStats } from "./interfaces/iStats";

export default function Home() {
    const [currentStep, setCurrentStep] = useState({current: 1, maxCompleted: 0});

    const [gender, setGender] = useState(0);
    const [race, setRace] = useState<CharRace|null>(null);
    const [alignment, setAlignment] = useState('True Neutral');
    const [charClass, setCharClass] = useState<CharClass|null>(null);
    const [background, setBackground] = useState<Background|null>(null);
    const [level, setLevel] = useState(1);
    const [stats, setStats] = useState<iStats[]>([]);
    const [skills, setSkills] = useState({});
    const [languages, setLanguages] = useState<string[]>([]);
    const [spells, setSpells] = useState<string[]>([]);

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
            <Nav currentStep={currentStep} setCurrentStep={setCurrentStep}/>
            <main>
                <Gender 
                    canShow={canShowComponent('Gender')} 
                    gender={gender}
                    setGender={setGender} 
                    currentStep={currentStep} 
                    setCurrentStep={setCurrentStep}
                />
                <Race 
                    canShow={canShowComponent('Race')} 
                    gender={gender} 
                    currentStep={currentStep} 
                    setCurrentStep={setCurrentStep} 
                    race={race} 
                    setRace={setRace}
                />
                <Alignment
                    canShow={canShowComponent('Alignment')}
                    currentStep={currentStep} 
                    setCurrentStep={setCurrentStep} 
                    alignment={alignment} 
                    setAlignment={setAlignment}
                />
                <ClassSelection
                    canShow={canShowComponent('Class')}
                    currentStep={currentStep} 
                    setCurrentStep={setCurrentStep} 
                    setCharClass={setCharClass}
                />
                <CharBackground
                    canShow={canShowComponent('Background')}
                    currentStep={currentStep} 
                    setCurrentStep={setCurrentStep} 
                    setBackground={setBackground}
                />
                <Level
                    canShow={canShowComponent('Level')}
                    currentStep={currentStep} 
                    setCurrentStep={setCurrentStep} 
                    setLevel={setLevel}
                />
                <Stats
                    canShow={canShowComponent('Stats')}
                    currentStep={currentStep} 
                    setCurrentStep={setCurrentStep} 
                    race={race}
                    charClass={charClass}
                    setStats={setStats}
                />
                <CharSkills
                    canShow={canShowComponent('Skills')}
                    currentStep={currentStep} 
                    setCurrentStep={setCurrentStep} 
                    race={race}
                    background={background}
                    level={level}
                    charClass={charClass}
                    setSkills={setSkills}
                />
                <CharLanguages 
                    canShow={canShowComponent('Languages')}
                    currentStep={currentStep} 
                    setCurrentStep={setCurrentStep}
                    race={race}
                    charClass={charClass}
                    setLanguages={setLanguages}
                />
                <Spells
                    canShow={canShowComponent('Magic')}
                    currentStep={currentStep} 
                    setCurrentStep={setCurrentStep}
                    charClass={charClass}
                    level={level}
                />
            </main>
        </>
    )
}
