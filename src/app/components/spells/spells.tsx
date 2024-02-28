"use client";

import { ICurrentStep } from "@/app/interfaces/iCurrentStep";
import { SetStateAction, useState } from "react";
import { ClassSpellList } from "@/app/repositories/classSpellList";
import { CharClass } from "@/app/repositories/charClasses";
import { SkillType } from "@/app/enums/skillType";
import { Spells as SpellBook } from "@/app/repositories/spells";
import { join } from "path";


export default function Spells({canShow, currentStep, setCurrentStep, charClass}: {
    canShow: boolean,
    currentStep: ICurrentStep, 
    setCurrentStep: React.Dispatch<SetStateAction<ICurrentStep>>,
    charClass: CharClass | null,
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

    function getClassSpellsByLevel(level: number): string | React.JSX.Element[] {
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

    function getAllSpellsByGroup(levels: string[]): string {
        return levels.map((level, index) => {
            return (
                <details key={index} className="spell-block">
                    <summary>{level}</summary>
                    <ul className="spell-list">
                        {getClassSpellsByLevel(index)}
                    </ul>
                </details>
            )
        });
    }

    if(!canShow)
        return '';

    return (
        <section className="spells-selection">
            <h2>{charClass?.name} Spells</h2>

            <button className="button-next" onClick={() => next()}>Next</button>

            {getAllSpellsByGroup(['Cantrips', 'Level 1', 'Level 2', 'Level 3', 'Level 4', 'Level 5', 'Level 6', 'Level 7', 'Level 8', 'Level 9'])}

            <button className="button-next" onClick={() => next()}>Next</button>
        </section>
    );
}