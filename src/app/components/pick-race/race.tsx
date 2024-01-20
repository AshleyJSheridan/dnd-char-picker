"use client";

import React, { SetStateAction } from "react";
import { Race, Races, SubRace } from "../../repositories/races";
import TraitList from "./traitList";
import RaceIntro from "./raceIntro";
import { CurrentStep } from "@/app/interfaces/CurrentStep";

export default function Race({canShow, gender, currentStep, setCurrentStep, race, setRace}: {
    canShow: boolean,
    gender: number,
    currentStep: CurrentStep,
    setCurrentStep: React.Dispatch<SetStateAction<CurrentStep>>,
    race: Race | null,
    setRace: React.Dispatch<SetStateAction<Race|null>>
}) {
    const raceSelections = Races.map(mainRace => 
        <li 
            key={mainRace.id} 
            className={ 'race race-' + getRaceClassName(mainRace) + ((mainRace.id === race?.id) ? ' active' : '')} 
            style={{backgroundImage: getPortraitImageUrl(mainRace.name)}}
        >
            <button type="button" onClick={() => handleRaceSelection(mainRace)}>
                <span className="name">{mainRace.name}</span>
            </button>
        </li>
    );

    function canGoToNextStep() {
        return (race && (!race?.subraces || (race?.subraces && race?.subrace)));
    }

    function next() {
        if(race && (!race?.subraces || (race?.subraces && race?.subrace))) {
            setCurrentStep({
                ...currentStep,
                current: currentStep.current + 1,
                maxCompleted: Math.max(currentStep.maxCompleted, currentStep.current)
            }); 
        }
    }

    function handleRaceSelection(race: Race) {
        setRace(race);
    }

    function handleSubraceSelection(subrace: SubRace) {
        setRace({
            ...race,
            subrace: subrace
        });
    }

    function getRaceClassName(race: any) {
        if(!race)
            return '';

        return race.name.toLowerCase();
    }

    function getPortraitImageUrl(name: string) {
        const genderString = gender === 1 ? 'male': 'female';

        return `url(/img/${genderString}-${name.toLowerCase().replaceAll(/[\(\)]/g, '').replaceAll(' ', '-')}-portrait.png)`;
    }

    function getSubRaceSelectionContent() {
        if(!race?.subraces)
            return '';

        const subraces = race.subraces.map(sr => 
            <li 
                key={sr.id}
                className={ 'race race-' + getRaceClassName(sr) + ((sr.id === race?.subrace?.id) ? ' active' : '')}
                style={{backgroundImage: getPortraitImageUrl(sr.name)}}
            >
                <button type="button" onClick={() => handleSubraceSelection(sr)}>
                    <span className="name">{sr.name}</span>
                </button>
            </li>
        );

        return (
            <section className="sub-race">
                <h2>Sub-Races</h2>

                <ul className="races">
                    {subraces}
                </ul>

                <section className="race-main-details">
                    <RaceIntro raceName={race?.subrace?.name}></RaceIntro>

                    <TraitList traits={race?.subrace?.traits} languages={null}></TraitList>
                </section>
            </section>
        );

    }

    if(!canShow)
        return '';

    return (
        <>

            <section className="race-selection">
                <ul className="races">
                    {raceSelections}
                </ul>

                <section className={'selected-race race-' + getRaceClassName(race)}>
                    <section className="race-main-details">
                        <RaceIntro raceName={race?.name}></RaceIntro>
                        <TraitList traits={race?.traits} languages={race?.languages}></TraitList>
                    </section>

                    {getSubRaceSelectionContent()}
                </section>
            </section>

            <button className="button-next" onClick={() => next()} disabled={!canGoToNextStep()}>Next</button>
        </>
    );
}
