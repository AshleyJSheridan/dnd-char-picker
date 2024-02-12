"use client";

import { Background } from "@/app/enums/backgrounds";
import { ICurrentStep } from "@/app/interfaces/iCurrentStep";
import { CharClass } from "@/app/repositories/charClasses";
import { Race } from "@/app/repositories/races";
import { SetStateAction, useState } from "react";
import { Skills, Skill } from "@/app/enums/skills";
import { TraitType } from "@/app/enums/traitTypes";
import { Trait } from "@/app/repositories/traits";
import CharSkill from "./skill";
import React from "react";

export default function CharSkills({canShow, currentStep, setCurrentStep, race, background, level, charClass, skills, setSkills}: {
    canShow: boolean,
    currentStep: ICurrentStep, 
    setCurrentStep: React.Dispatch<SetStateAction<ICurrentStep>>,
    race: Race | null;
    background: Background | null,
    level: number,
    charClass: CharClass | null,
    skills: any,
    setSkills: React.Dispatch<SetStateAction<any>>,
}) {
    const [skillsAllowed, setSkillsAllowed] = useState(0);
    const [selectedSkills, setSelectedSkills] = useState({});

    if(canShow) {
        initialiseSelectedSkills(race, background);
    }

    function next() {
        setSkills(getPreselectedSkills(race, background));
        setCurrentStep({
            ...currentStep,
            current: currentStep.current + 1,
            maxCompleted: Math.max(currentStep.maxCompleted, currentStep.current)
        });
    }

    function getPreselectedSkills(race: Race | null, background: Background | null): (Skill | undefined)[] {
        let charTraitSkills: (Skill | undefined)[] = [];
        let charBackgroundSkills: Skill[] | undefined = background?.proficiencies ?? [];

        if(race?.traits) {
            charTraitSkills = race.traits.filter((trait) => trait.type === TraitType.SKILL && trait.associatedSkill).map((trait) => trait.associatedSkill)
        }

        return [...charTraitSkills, ...charBackgroundSkills];
    }

    function getSkillIsRacial(traits: Trait[] | undefined | null, skill: Skill): boolean {
        if(!race?.traits)
            return false;

        return race.traits.some((trait) => trait?.associatedSkill?.id === skill.id);
    }

    function initialiseSelectedSkills(race: Race | null, background: Background | null): void {
        if(Object.keys(selectedSkills).length > 0)
            return;

        let allCharSkills = getPreselectedSkills(race, background);
        let newSelectedSkills = {...selectedSkills};

        Object.entries(Skills).map(([skillName, {}]) => {
            const skill: Skill = Skills[skillName as keyof Skills];

            // can't use Array.includes here, because the elements are object instances which can't be directly compared
            const skillSelected: boolean = allCharSkills ? allCharSkills.some((charSkill) => charSkill?.id === skill.id) : false;
            const selectionReadOnly = getSkillIsRacial(race?.traits, skill);

            newSelectedSkills[skill.id] = {selected: skillSelected, readonly: selectionReadOnly};
        });

        setSelectedSkills(newSelectedSkills);
    }

    function handleSkillUpdate(details: any) {
        const eventTarget: EventTarget = details.target;
        const skillId: string = details.skillId;

        if(eventTarget instanceof HTMLInputElement) {
            //let selectedSkill = selectedSkills[skillId];
            let updatedSkills = {...selectedSkills};
            if(!updatedSkills[skillId].readonly) {
                if(skillsAllowed > 0 && updatedSkills[skillId].selected === false) {
                    setSkillsAllowed(skillsAllowed - 1);
                    updatedSkills[skillId].selected = true;
                    setSelectedSkills(updatedSkills);
                    return;
                }

                if(updatedSkills[skillId].selected === true) {
                    setSkillsAllowed(skillsAllowed + 1);
                    updatedSkills[skillId].selected = false;
                    setSelectedSkills(updatedSkills);
                    return;
                }
            }
        }
    }

    function getSkills(race: Race | null, background: Background | null) {
        return Object.entries(Skills).map(([skillName, {}]) => {
            const skill = Skills[skillName as keyof Skills];
            const skillSelected = selectedSkills[skill.id]?.selected ?? false;
            const selectionReadOnly = selectedSkills[skill.id]?.readonly ?? false;

            return (
                <React.Fragment key={crypto.randomUUID()}>
                    <CharSkill
                        skill={skill}
                        skillSelected={skillSelected}
                        selectionReadOnly={selectionReadOnly}
                        handleSkillUpdate={handleSkillUpdate}
                    />
                </React.Fragment>
            )
        });
    }

    if(!canShow)
        return '';

    return (
        <section className="skills-selection">
            <h2>Skills</h2>

            <button className="button-next" onClick={() => next()}>Next</button>

            <p>Skills have been pre-selected based on choice of character race and background. Racial skills cannot be altered.</p>

            <p className="skills-selection-remaining">Selections remaining: {skillsAllowed}.</p>

            <ul className="skills-list">
                {getSkills(race, background)}
            </ul>

            <button className="button-next" onClick={() => next()}>Next</button>
        </section>
    )
}