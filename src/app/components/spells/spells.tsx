"use client";

import { ICurrentStep } from "@/app/interfaces/iCurrentStep";
import { SetStateAction, useState } from "react";
import { ClassSpellList } from "@/app/repositories/classSpellList";
import { ClassSpellSlots } from "@/app/repositories/classSpellSlots";
import { CharClass } from "@/app/repositories/charClasses";
import { SkillType } from "@/app/enums/skillType";
import { Spells as SpellBook } from "@/app/repositories/spells";

export default function Spells({canShow, currentStep, setCurrentStep, charClass, level}: {
    canShow: boolean,
    currentStep: ICurrentStep, 
    setCurrentStep: React.Dispatch<SetStateAction<ICurrentStep>>,
    charClass: CharClass | null,
    level: number
}) {
    const [spellsAllowed, setSpellsAllowed] = useState(0);

    function next() {
        /*setSkills(getPreselectedSkills(race, background));
        setCurrentStep({
            ...currentStep,
            current: currentStep.current + 1,
            maxCompleted: Math.max(currentStep.maxCompleted, currentStep.current)
        });*/
    }

    function getClassSpellsForLevel(level: number): string | React.JSX.Element[] {
        if(!charClass)
            return '';

        const classMagicSkills = charClass.classSkills.filter(skill => {
            return skill.skillType === SkillType.MAGIC
        });

        if(classMagicSkills.length === 0) {
            // no spells available for class - allow progression to next section
            return 'no spells available';
        }

        const classSchoolGroup = classMagicSkills[0].classSchoolGroup; // assume just the one - maybe implement multiclassing later
        const classSpells = ClassSpellList.filter(list => {
            return list.classSpellGroup === classSchoolGroup;
        });
        const spellIds = classSpells[0].spellIds;

        return SpellBook.filter(spell => {
            return spellIds.includes(spell.id) && spell.level === level;
        }).map(spell => {
            return (
                <li key={spell.id}>
                    <div className={'spell-school-icon spell-school-' + spell.school}>
                        <img src={`/img/spell school icons/${spell.school}.svg`} alt={spell.school}/>
                    </div>
                    <div className="spell-name">{spell.name}</div>
                    <dl className="spell-details">
                        <dt>School</dt>
                        <dd>{spell.school}</dd>

                        <dt>Casting time:</dt>
                        <dd>{spell.castTime}</dd>

                        <dt>Range:</dt>
                        <dd>{spell.range}</dd>

                        <dt>Components:</dt>
                        <dd>{decodeSpellComponents(spell.components)}</dd>

                        <dt>Duration:</dt>
                        <dd>{spell.duration}</dd>
                    </dl>
                    <p className="spell-description">{spell.shortDescription}</p>
                </li>
            );
        });
    }

    function decodeSpellComponents(componentLetters: string): string {
        const parts = componentLetters.split(',');
        let components: string[] = [];

        if(parts.includes('V')) {
            components.push('Verbal');
        }
        if(parts.includes('S')) {
            components.push('Somatic');
        }
        if(parts.includes('M')) {
            components.push('Material');
        }

        return components.join(',');
    }

    function getAllSpellsByGroup(levels: string[]): React.JSX.Element[] {
        return levels.map((level, index) => {
            return (
                <details key={index} className="spell-block">
                    <summary>{level}</summary>
                    <ul className="spell-list">
                        {getClassSpellsForLevel(index)}
                    </ul>
                </details>
            )
        });
    }

    function getTotalSpellCountAvailable() {
        if(!charClass)
            return '';

        const maxSpellLevel = 9;
        let spellSlots = 0;
        let charMaxSpellLevel = 1;

        for(let i = 1; i <= maxSpellLevel; i++) {
            let spellsAtLevel = getSpellCountAvailablePerSpellAndCharLevel(level, i);

            spellSlots += spellsAtLevel;
            if(spellsAtLevel > 0) {
                charMaxSpellLevel = i;
            }
        }

        return `${spellSlots} at spell level ${charMaxSpellLevel}`;
    }

    function getSpellCountAvailablePerSpellAndCharLevel(charLevel: number, spellLevel: number): number {
        if(!charClass)
            return 0;

        const classMagicSkills = charClass.classSkills.filter(skill => {
            return skill.skillType === SkillType.MAGIC
        });
        const classSchoolGroup = classMagicSkills[0].classSchoolGroup;

        const classSpellSlots = ClassSpellSlots.filter(list => {
            return list.classSpellGroup === classSchoolGroup;
        })[0];

        // check that spells exist at that spell level - e.g. warlocks only go to spell level 5
        if(classSpellSlots.slots[spellLevel] !== undefined)
            return classSpellSlots.slots[spellLevel][charLevel - 1];

        return 0;
    }

    if(!canShow)
        return '';

    return (
        <section className="spells-selection">
            <h2>{charClass?.name} Spells</h2>

            <p>Remaining spells for a level {level} {charClass?.name}:</p>

            <dl>
                <dt>Cantrips</dt>
                <dd>{getSpellCountAvailablePerSpellAndCharLevel(level, 0)}</dd>

                <dt>Spells</dt>
                <dd>{getTotalSpellCountAvailable(level)}</dd>
            </dl>

            <button className="button-next" onClick={() => next()}>Next</button>

            {getAllSpellsByGroup(['Cantrips', 'Level 1', 'Level 2', 'Level 3', 'Level 4', 'Level 5', 'Level 6', 'Level 7', 'Level 8', 'Level 9'])}

            <button className="button-next" onClick={() => next()}>Next</button>
        </section>
    );
}