"use client";

import { ISpell } from "@/app/repositories/spells";

export default function Spell({spell}: {
    spell: ISpell
}) {
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
    
    return (
        <li>
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
}