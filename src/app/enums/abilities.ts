export interface Ability {
    id: '',
    name: string;
    description: string;
}

type Abilities = Record<string, Ability>;

export const Abilities = {
    'CHA': { id: 'CHA', name: 'Charisma',     description: 'Relates to social interaction, persuasive ability, and personal magnetism.' },
    'CON': { id: 'CON', name: 'Constitution', description: 'Indicates resilience, health, and stamina.' },
    'DEX': { id: 'DEX', name: 'Dexterity',    description: 'Reflects agility, reflexes, and balance.' },
    'INT': { id: 'INT', name: 'Intelligence', description: 'Represents reasoning, memory, and the ability to learn and apply knowledge.' },
    'STR': { id: 'STR', name: 'Strength',     description: 'Measures physical power and the ability to lift, carry, and exert force.' },
    'WIS': { id: 'WIS', name: 'Wisdom',       description: 'Concerns perception, intuition, and insight into situations and people.' },
};
