import ClassIcon from "./classIcon";

export default function ClassDetails({charClass, setCharClass}) {
    function getReadableAbilitiesList(abilities: Array<{name: string, description: string}>) {
        return abilities.map(ability => 
            ability.name
        ).join(' & ');
    }

    function getReadableProficienciesList(proficiencies) {
        if(proficiencies.length === 0)
            return (<li>None</li>);

        return proficiencies.map(proficiency => 
            <li key={proficiency.id}>
                {proficiency.name}
            </li>
        );
    }

    function getSkillsBlocks(skills) {
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
                    <div className="modal-content">
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
                </div>
            </div>
        </div>
    );
}