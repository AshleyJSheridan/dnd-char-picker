import { Abilities, Ability } from "./abilities";

export interface Skill {
	id: string;
	name: string;
	description: string;
	primaryAbility: Ability;
}

type Skills = Record<string, Skill>;

export const Skills = {
    'ACROBATICS': { 
		id: 'ACROBATICS', 
		name: 'Acrobatics', 
        description: 'This skill covers your ability to perform tasks that require balance, agility, and bodily coordination, such as walking on a tightrope or performing flips.', 
		primaryAbility: Abilities.DEX },
    'ANIMAL_HANDLING': { 
		id: 'ANIMAL_HANDLING', 
		name: 'Animal Handling', 
        description: 'Animal Handling is used when you are trying to calm down a domesticated animal, keep a mount from getting spooked, or intuit an animal\'s intentions.', 
		primaryAbility: Abilities.WIS },
    'ARCANA': { 
		id: 'ARCANA', 
		name: 'Arcana', 
        description: 'Arcana measures your ability to recall lore about spells, magic items, eldritch symbols, magical traditions, the planes of existence, and the inhabitants of those planes.', 
		primaryAbility: Abilities.INT },
    'ATHLETICS': { 
		id: 'ATHLETICS', 
		name: 'Athletics', 
        description: 'This skill represents your aptitude in performing physical activities that rely on muscular strength, including climbing, jumping, and swimming.', 
		primaryAbility: Abilities.STR },
    'DECEPTION': { 
		id: 'DECEPTION', 
		name: 'Deception', 
        description: 'Deception allows you to convincingly hide the truth, whether you are trying to bluff your way through a lie or disguise yourself.', 
		primaryAbility: Abilities.CHA },
    'HISTORY': { 
		id: 'HISTORY', 
		name: 'History', 
        description: 'With the History skill, you can recall information about historical events, legendary people, ancient kingdoms, past disputes, and recent wars.', 
		primaryAbility: Abilities.INT },
    'INSIGHT': { 
		id: 'INSIGHT', 
		name: 'Insight', 
        description: 'Insight is used to determine the true intentions of a creature, such as when searching for clues about someone\'s character or determining if someone is lying.', 
		primaryAbility: Abilities.WIS },
    'INTIMIDATION': { 
		id: 'INTIMIDATION', 
		name: 'Intimidation', 
        description: 'This skill is used when you attempt to influence someone through overt threats, hostile actions, and physical violence.', 
		primaryAbility: Abilities.CHA },
    'INVESTIGATION': { 
		id: 'INVESTIGATION', 
		name: 'Investigation', 
        description: 'Investigation allows you to look for clues and make deductions based on those clues, such as when you are searching for a hidden object or piecing together evidence.', 
		primaryAbility: Abilities.INT },
    'MEDICINE': { 
		id: 'MEDICINE', 
		name: 'Medicine', 
        description: 'Medicine lets you try to stabilize a dying companion or diagnose an illness.', 
		primaryAbility: Abilities.WIS },
    'NATURE': { 
		id: 'NATURE', 
		name: 'Nature', 
        description: 'With Nature, you have knowledge about terrain, plants and animals, the weather, and natural cycles.', 
		primaryAbility: Abilities.INT },
    'PERCEPTION': { 
		id: 'PERCEPTION', 
		name: 'Perception', 
        description: 'Perception is your ability to notice or detect the presence of something, such as hearing a noise, spotting a hidden creature, or sensing something amiss in your surroundings.', 
		primaryAbility: Abilities.WIS },
    'PERFORMANCE': { 
		id: 'PERFORMANCE', 
		name: 'Performance', 
        description: 'Performance encompasses all types of artistic expression, allowing you to delight an audience with music, dance, acting, storytelling, or some other form of entertainment.', 
		primaryAbility: Abilities.CHA },
    'PERSUASION': { 
		id: 'PERSUASION', 
		name: 'Persuasion', 
        description: 'Persuasion is used when you attempt to influence someone or a group of people with tact, social graces, or good nature.', 
		primaryAbility: Abilities.CHA },
    'RELIGION': { 
		id: 'RELIGION', 
		name: 'Religion', 
        description: 'Religion measures your ability to recall lore about deities, rites and prayers, religious hierarchies, holy symbols, and the practices of secret cults.', 
		primaryAbility: Abilities.INT },
    'SLEIGHT_OF_HAND': { 
		id: 'SLEIGHT_OF_HAND', 
		name: 'Sleight of Hand', 
        description: 'Sleight of Hand is the skill to perform tasks that require manual dexterity and precision, such as pickpocketing or manipulating an object unseen.', 
		primaryAbility: Abilities.DEX },
    'STEALTH': { 
		id: 'STEALTH', 
		name: 'Stealth', 
        description: 'Stealth allows you to conceal yourself from enemies, slink past guards, slip away without being noticed, or sneak up on someone without being seen or heard.', 
		primaryAbility: Abilities.DEX },
    'SURVIVAL': { 
		id: 'SURVIVAL', 
		name: 'Survival', 
        description: 'Survival is used to follow tracks, hunt wild game, guide your group through wastelands, predict the weather, avoid quicksand and other natural hazards, and avoid getting lost.', 
		primaryAbility: Abilities.WIS },
};
