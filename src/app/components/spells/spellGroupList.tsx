"use client";

import { SkillType } from "@/app/enums/skillType";
import { CharClass } from "@/app/repositories/charClasses";
import { ClassSpellList } from "@/app/repositories/classSpellList";
import { Spells as SpellBook } from "@/app/repositories/spells";
import React from "react";
import Spell from "./spell";

export default function SpellGroupList({charClass, level, levelLabel}: {
    charClass: CharClass | null,
    level: number,
    levelLabel: string
}) {
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
                <React.Fragment key={spell.id}>
                    <Spell spell={spell}></Spell>
                </React.Fragment>
            );
        });
    }

    return (
        <details className="spell-block">
            <summary>{levelLabel}</summary>
            <ul className="spell-list">
                {getClassSpellsForLevel(level)}
            </ul>
        </details>
    )
}