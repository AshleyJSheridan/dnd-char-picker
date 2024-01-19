import { Abilities, Ability } from "./abilities";

export interface Skill {
    id: string;
    name: string;
    description: string;
    primaryAbility: Ability;
}

type Skills = Record<string, Skill>;

export const Skills = {
    'ATHLETICS': { id: 'ATHLETICS', name: 'Athletics', description: '', primaryAbility: Abilities.STR },
    'ACROBATICS': { id: 'ACROBATICS', name: 'Acrobatics', description: '', primaryAbility: Abilities.DEX },
    'SLEIGHT_OF_HAND': { id: 'SLEIGHT_OF_HAND', name: 'Sleight of Hand', description: '', primaryAbility: Abilities.DEX },
    'STEALTH': { id: 'STEALTH', name: 'Stealth', description: '', primaryAbility: Abilities.DEX },
    'ARCANA': { id: 'ARCANA', name: 'Arcana', description: '', primaryAbility: Abilities.INT },
    'HISTORY': { id: 'HISTORY', name: 'History', description: '', primaryAbility: Abilities.INT },
    'INVESTIGATION': { id: 'INVESTIGATION', name: 'Investigation', description: '', primaryAbility: Abilities.INT },
    'NATURE': { id: 'NATURE', name: 'Nature', description: '', primaryAbility: Abilities.INT },
    'RELIGION': { id: 'RELIGION', name: 'Religion', description: '', primaryAbility: Abilities.INT },
    'ANIMAL_HANDLING': { id: 'ANIMAL_HANDLING', name: 'Animal Handling', description: '', primaryAbility: Abilities.WIS },
    'INSIGHT': { id: 'INSIGHT', name: 'Insight', description: '', primaryAbility: Abilities.WIS },
    'MEDICINE': { id: 'MEDICINE', name: 'Medicine', description: '', primaryAbility: Abilities.WIS },
    'PERCEPTION': { id: 'PERCEPTION', name: 'Perception', description: '', primaryAbility: Abilities.WIS },
    'SURVIVAL': { id: 'SURVIVAL', name: 'Survival', description: '', primaryAbility: Abilities.WIS },
    'DECEPTION': { id: 'DECEPTION', name: 'Deception', description: '', primaryAbility: Abilities.CHA },
    'INTIMIDATION': { id: 'INTIMIDATION', name: 'Intimidation', description: '', primaryAbility: Abilities.CHA },
    'PERFORMANCE': { id: 'PERFORMANCE', name: 'Performance', description: '', primaryAbility: Abilities.CHA },
    'PERSUASION': { id: 'PERSUASION', name: 'Persausion', description: '', primaryAbility: Abilities.CHA },
};
