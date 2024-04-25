"use client";

import { ICurrentStep } from "@/app/interfaces/iCurrentStep";
import React, { SetStateAction, useEffect, useState } from "react";
import { ClassSpellList } from "@/app/repositories/classSpellList";
import { ClassSpellSlots } from "@/app/repositories/classSpellSlots";
import { CharClass } from "@/app/repositories/charClasses";
import { SkillType } from "@/app/enums/skillType";
import { ISpell, Spells as SpellBook } from "@/app/repositories/spells";
import SpellGroupList from "./spellGroupList";

export default function Spells({canShow, currentStep, setCurrentStep, charClass, level}: {
    canShow: boolean,
    currentStep: ICurrentStep, 
    setCurrentStep: React.Dispatch<SetStateAction<ICurrentStep>>,
    charClass: CharClass | null,
    level: number
}) {
    const [cantripsAllowed, setCantripsAllowed] = useState(0);
    const [spellsAllowed, setSpellsAllowed] = useState(0);
    const [spellMaxLevel, setSpellMaxLevel] = useState(0);
    const [selectedSpells, setSelectedSpells] = useState<ISpell[]>([]);
    const maxSpellLevel = 9;

    if(canShow && charClass) {
        initCharSpellCounts();
    }

    function next() {
        /*setSkills(getPreselectedSkills(race, background));
        setCurrentStep({
            ...currentStep,
            current: currentStep.current + 1,
            maxCompleted: Math.max(currentStep.maxCompleted, currentStep.current)
        });
        PersistState.save('spells', spells);
        */
    }

    function initCharSpellCounts() {
        if(spellMaxLevel === 0) {
            setCantripsAllowed(getSpellCountAvailablePerSpellAndCharLevel(level, 0));
            setSpellsAllowed(getTotalSpellCountAvailable());
            setSpellMaxLevel(getMaxCharSpellLevel());
        }
    }

    function getAllSpellsByGroup(levels: string[]): React.JSX.Element[] {
        return levels.map((level, index) => {
            return (
                <React.Fragment key={index}>
                    <SpellGroupList 
                        charClass={charClass}
                        level={index}
                        levelLabel={level}
                        selectSpell={selectSpell}
                        selectedSpells={selectedSpells}
                    ></SpellGroupList>
                </React.Fragment>
            )
        });
    }

    function selectSpell(spell: ISpell): void {
        if(selectedSpells.includes(spell)) {
            // de-select spell
            let spells = [...selectedSpells];
            spells.splice(spells.indexOf(spell), 1);
            setSelectedSpells(spells);
        } else {
            if(spell.level === 0) {
                // select cantrip if within count
                const cantripCount = getCantripCount();

                if(cantripCount < cantripsAllowed) {
                    setSelectedSpells([...selectedSpells, spell]);
                }
            } else {
                // select spell if within count and level is allowed
                const spellCount = getSpellCount();

                if(spellCount < spellsAllowed && spell.level <= spellMaxLevel) {
                    setSelectedSpells([...selectedSpells, spell]);
                }
            }
        }
    }

    function getCantripCount(): number {
        return selectedSpells.filter(spell => {
            return spell.level === 0
        }).length;
    }

    function getSpellCount(): number {
        return selectedSpells.filter(spell => {
            return spell.level > 0
        }).length;
    }

    function getTotalSpellCountAvailable(): number {
        if(!charClass)
            return 0;

        let spellSlots = 0;

        for(let i = 1; i <= maxSpellLevel; i++) {
            let spellsAtLevel = getSpellCountAvailablePerSpellAndCharLevel(level, i);

            spellSlots += spellsAtLevel;
        }

        return spellSlots;
    }

    function getMaxCharSpellLevel(): number {
        let charMaxSpellLevel = 1;

        if(!charClass)
            return charMaxSpellLevel;

        for(let i = 1; i <= maxSpellLevel; i++) {
            let spellsAtLevel = getSpellCountAvailablePerSpellAndCharLevel(level, i);

            // return early to improve performance at lower char levels
            if(spellsAtLevel === 0)
                return charMaxSpellLevel;

            charMaxSpellLevel = i;
        }

        return charMaxSpellLevel;
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

            <p>Selected spells for a level {level} {charClass?.name}:</p>

            <dl>
                <dt>Cantrips</dt>
                <dd>{getCantripCount()} of {cantripsAllowed}</dd>

                <dt>Spells</dt>
                <dd>{getSpellCount()} of {spellsAllowed} at spell level {spellMaxLevel}</dd>
            </dl>

            <button className="button-next" onClick={() => next()}>Next</button>

            {getAllSpellsByGroup(['Cantrips', 'Level 1', 'Level 2', 'Level 3', 'Level 4', 'Level 5', 'Level 6', 'Level 7', 'Level 8', 'Level 9'])}

            <button className="button-next" onClick={() => next()}>Next</button>
        </section>
    );
}