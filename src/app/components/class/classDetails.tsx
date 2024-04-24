import { CharClass } from "@/app/repositories/charClasses";
import ClassIcon from "./classIcon";
import React, { SetStateAction } from "react";
import { GearProficiency } from "@/app/repositories/gearProfiencies";
import { ClassSkill } from "@/app/repositories/classSkills";

export default function ClassDetails({charClass, setCharClass, confirmCharClass}: {
    charClass: CharClass | null, 
    setCharClass: React.Dispatch<SetStateAction<CharClass|null>>, 
    confirmCharClass: Function
}, ) {
    React.useEffect(() => {
        document.addEventListener("keydown", escFunction, false);

        return () => {
            document.removeEventListener("keydown", escFunction, false);
        }
    }, []);

    function escFunction(event: KeyboardEvent){
        if (event.key === "Escape") {
            handleCloseModal();
        }

        return false;
    }

    function getReadableAbilitiesList(abilities: Array<{name: string, description: string}>) {
        return abilities.map(ability => 
            ability.name
        ).join(' & ');
    }

    function getReadableProficienciesList(proficiencies: GearProficiency[]) {
        if(proficiencies.length === 0)
            return (<li>None</li>);

        return proficiencies.map(proficiency => 
            <li key={proficiency.id}>
                {proficiency.name}
            </li>
        );
    }

    function getSkillsBlocks(skills: ClassSkill[]) {
        return skills.map(skill =>
            <details key={skill.id}>
                <summary>
                    <div className="class-skill-name">
                        {skill.name}
                        <span className="class-skill-name-level">(Level {skill.level})</span>
                    </div>
                </summary>
                <div className="class-skill-description" dangerouslySetInnerHTML={{ __html: skill.description }}></div>
            </details>
        );
    }

    function handleCloseModal() {
        setCharClass(null);
    }

    function next() {
        confirmCharClass(charClass);
    }

    if(!charClass)
        return '';

    return (
        <div className="modal-background">
            <div className="modal">
                <div role="dialog" className="modal-dialog" aria-labelledby={'modal-heading-' + charClass.id}>
                    <button  
                        className="close-modal"
                        type="button"
                        aria-label="Close"
                        onClick={() => handleCloseModal()}
                    ></button>
                    <h2 id={'modal-heading-' + charClass.id}>Confirm Class - {charClass.name}</h2>

                    <button className="button-next" onClick={() => next()}>Next</button>
                    
                    <div className={'modal-content class-' + charClass.name.toLowerCase()}>
                        <p className="class-description">
                            <ClassIcon charClassName={charClass.name}/>
                            {charClass.description}
                        </p>

                        <dl className="class-stat-block">
                            <dt>Hit die: </dt>
                            <dd>{charClass.hitDie}</dd>

                            <dt>Primary ability: </dt>
                            <dd>{getReadableAbilitiesList(charClass.primaryAbilities)}</dd>

                            <dt>Saves: </dt>
                            <dd>{getReadableAbilitiesList(charClass.savingThrowProficiencies)}</dd>
                        </dl>

                        <div className="weapon-armor-proficiencies">
                            <span className="proficiencies-armor">
                                <strong>Armour proficiencies: </strong>
                                <ul>
                                    {getReadableProficienciesList(charClass.armorProficiencies)}
                                </ul>
                            </span>
                            <span className="proficiencies-weapons">
                                <strong>Weapon proficiencies: </strong>
                                <ul>
                                    {getReadableProficienciesList(charClass.weaponProficiencies)}
                                </ul>
                            </span>
                        </div>

                        <div className="class-skill-list">
                            {getSkillsBlocks(charClass.classSkills)}
                        </div>
                    </div>

                    <button className="button-next" onClick={() => next()}>Next</button>
                </div>
            </div>
        </div>
    );
}