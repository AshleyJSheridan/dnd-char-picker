import { Skill } from "@/app/enums/skills";
import { SetStateAction } from "react";

export default function CharSkill({skill, skillSelected, selectionReadOnly, handleSkillUpdate}: {
    skill: Skill,
    skillSelected: boolean,
    selectionReadOnly: boolean,
    handleSkillUpdate: React.Dispatch<SetStateAction<any>>
}) {

    return (
        <li key={skill.id} className={skillSelected ? 'selected' : ''}>
            <div className="checkbox">
                <input
                    type="checkbox"
                    name="selected-skill" 
                    id={"selected-skill-" + skill.id}
                    checked={skillSelected}
                    readOnly={selectionReadOnly}
                    onChange={event => handleSkillUpdate({target: event.target, skillId: skill.id})}
                />
                <label htmlFor={"selected-skill-" + skill.id}>{skill.name} ({skill.primaryAbility.name})</label>
            </div>
            <p>{skill.description}</p>
        </li>
    );
}