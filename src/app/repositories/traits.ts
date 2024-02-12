import { Abilities, Ability } from "../enums/abilities";
import { Skill, Skills } from "../enums/skills";
import { TraitType } from "../enums/traitTypes";

export interface Trait {
    name: string;
    description: string;
    abilities?: Ability[];
    abilityIncrease?: number;
    type: TraitType;
    associatedSkill?: Skill;
    additionalSkills?: number;
}

type Traits = Record<string, Trait>;

export const Traits = {
    // size traits
    'SIZE_SMALL': { name: 'Small size', description: 'Can fit into small spaces.', type: TraitType.SIZE },
    'SIZE_MEDIUM': { name: 'Medium size', description: 'Of average size.', type: TraitType.SIZE },
    'SIZE_LARGE': { name: 'Large size', description: 'Larger target, probably more likely to be hit.', type: TraitType.SIZE },

    // ability traits
    'ABILITY_CON': { name: 'Ability score increase', description: 'Increases Constitution score by 2', abilityIncrease: 2, abilities: [Abilities.CON], type: TraitType.ABILITY_INCREASE },
    'ABILITY_STR': { name: 'Ability score increase', description: 'Increases Strength score by 2', abilityIncrease: 2, abilities: [Abilities.STR], type: TraitType.ABILITY_INCREASE },
    'ABILITY_DEX': { name: 'Ability score increase', description: 'Increases Dexterity score by 2', abilityIncrease: 2, abilities: [Abilities.DEX], type: TraitType.ABILITY_INCREASE },
    'ABILITY_WIS_MINOR': { name: 'Ability score increase', description: 'Increases Wisdom score by 1', abilityIncrease: 1, abilities: [Abilities.WIS], type: TraitType.ABILITY_INCREASE },
    'ABILITY_INT_MINOR': { name: 'Ability score increase', description: 'Increases Intelligence score by 1', abilityIncrease: 1, abilities: [Abilities.INT], type: TraitType.ABILITY_INCREASE },
    'ABILITY_CHA_MINOR': { name: 'Ability score increase', description: 'Increases Charisma score by 1', abilityIncrease: 1, abilities: [Abilities.CHA], type: TraitType.ABILITY_INCREASE },
    'ABILITY_CON_MINOR': { name: 'Ability score increase', description: 'Increases Constitution score by 1', abilityIncrease: 1, abilities: [Abilities.CON], type: TraitType.ABILITY_INCREASE },
    'ABILITY_DEX_MINOR': { name: 'Ability score increase', description: 'Increases Dexterity score by 1', abilityIncrease: 1, abilities: [Abilities.DEX], type: TraitType.ABILITY_INCREASE },
    'ABILITY_INCREASE': { name: 'Ability score increase', description: 'All ability scores increase by 1.', abilityIncrease: 1, abilities: [Abilities.CHA, Abilities.CON, Abilities.DEX, Abilities.INT, Abilities.STR, Abilities.WIS], type: TraitType.ABILITY_INCREASE },

    // general traits
    'DARKVISION': { name: 'Darkvision', description: 'Can see in dim light within 60 feet, and in darkness as if it were dim light.', type: TraitType.ABILITY },
    'DARKVISION_SUPERIOR': { name: 'Superior darkvision', description: 'Darkvision radius extends to 120 feet rather than standard 60.', type: TraitType.ABILITY },
    'TOOL_PROFICIENCY': { name: 'Tool proficiency', description: 'Proficiency with artisan tools of choice, e.g. smithing or masonry tools.', type: TraitType.ABILITY },
    'KEEN_SENSES': { name: 'Keen senses', description: 'Proficience in Perception skill', type: TraitType.SKILL, associatedSkill: Skills.PERCEPTION },
    'CANTRIP_WIZARD': { name: 'Cantrip', description: 'Gain a cantrip of choice from Wizard spells.', type: TraitType.SPELL },
    'EXTRA_LANG': { name: 'Extra language', description: 'Proficient in one extra language of your choice.', type: TraitType.LANGUAGE },
    'SKILL_VERSATILITY': { name: 'Skill versatility', description: 'Gain proficiency in two skills of your choice.', type: TraitType.SKILL, additionalSkills: 2 },

    // dwarven traits
    'DWARVEN_RESILIENCE': { name: 'Dwarven resilience', description: 'Advantage on saving throws against poison, and resistance against poison damage.', type: TraitType.ABILITY },
    'DWARVEN_COMBAT_TRAINING': { name: 'Dwarven combat training', description: 'Proficiency with battleaxe, handaxe, light hammer, and warhammer.', type: TraitType.ABILITY },
    'DWARVEN_TOUGHNESS': { name: 'Dwarven toughness', description: 'Hit point max increases by 1 per level.', type: TraitType.ABILITY_INCREASE },
    'DWARVEN_ARMOR': { name: 'Dwarven armor training', description: 'Proficiency with light and medium armor.', type: TraitType.ABILITY },
    'STONECUNNING': { name: 'Stonecunning', description: 'Gain History skill when making Int check against stone, gaining double profiency bonus.', type: TraitType.SKILL, associatedSkill: Skills.HISTORY },

    // elven traits
    'ELF_WEAPON': { name: 'Elf weapon training', description: 'Proficience with longsword, shortsword, longbow, and shortbow', type: TraitType.ABILITY },
    'FEY_ANCESTRY': { name: 'Fey ancestry', description: 'Advantage on saving throws against being charmed, and magic cannot put you to sleep.', type: TraitType.ABILITY },
    'TRANCE': { name: 'Trance', description: 'No need to sleep, but instead deeply meditate for 4 hours a day.', type: TraitType.ABILITY },
    'FLEET_FOOT': { name: 'Fleet of foot', description: 'Base walking speed increased to 35 feet.', type: TraitType.ABILITY },
    'MASK_OF_WILD': { name: 'Mask of the wild', description: 'Can attempt to hide even when only partially obscured.', type: TraitType.ABILITY },
    'SUNLIGHT_SENSITIVE': { name: 'Sunlight sensitivity', description: 'Disadvantage on attack rolls and Perception checks that rely on sight when you or target is in direct sunglight.', type: TraitType.ABILITY },
    'DROW_MAGIC': { name: 'Drow magic', description: 'Gain Dancing Lights cantrip. At level 3 gain Faerie Fire spell once per day. At level 5 gain Darkness spell once per day.', type: TraitType.SPELL },
    'DROW_WEAPON': { name: 'Drow weapon training', description: 'Proficience with rapiers, shortswords, and hand crossbows.', type: TraitType.ABILITY },

    // halfling traits
    'LUCKY': { name: 'Lucky', description: 'Can re-roll on a d20 roll for attack, ability check, or saving throw, when rolling a 1.', type: TraitType.ABILITY },
    'BRAVE': { name: 'Brave', description: 'Advantage on saving throws against being frightened.', type: TraitType.ABILITY },
    'HALFLING_NIMBLE': { name: 'Halfling nimbleness', description: 'Can move through space of creature whose size is larger than yours.', type: TraitType.ABILITY },
    'NAT_STEALTH': { name: 'Naturally stealthy', description: 'Can attempt to hide even when hidden only by creature one size larger than you.', type: TraitType.ABILITY },
    'STOUT_RESILIENCE': { name: 'Stout resilience', description: 'Advantage on saving throws against poison, and resistance against poison damage.', type: TraitType.ABILITY },

    // dragonborn traits
    'DRACONIC_ANCESTRY': { name: 'Draconic ancestry', description: 'You gain benefits from the colour of the draconic ancestors.', type: TraitType.ABILITY },
    'BREATH_WEAPON': { name: 'Breath weapon', description: 'Use an action to use a breath attack in-line with your draconic ancestry.', type: TraitType.ABILITY },
    'DAMAGE_RESISTENCE': { name: 'Damage resistence', description: 'Gain resistence to damange type associated with your draconic ancestry.', type: TraitType.ABILITY },
    
    // gnome traits
    'NATURAL_ILLUSION': { name: 'Natural illusionist', description: 'Gain Minor Illusion cantrip.', type: TraitType.SPELL },
    'SPEAK_BEASTS_SMALL': { name: 'Speak with small beasts', description: 'Can speak with small creatures, like squirrels, rabbits, rats, or birds.', type: TraitType.ABILITY },
    'GNOME_CUNNING': { name: 'Gnome cunning', description: 'Advantage on all Int, Wis, and Cha saving throws against magic.', type: TraitType.ABILITY },
    'ARTIFICER_LORE': { name: 'Artificers Lore', description: 'Gain History skill when making Int check against magic, alchemical, or technological items and devices, gaining double profiency bonus.', type: TraitType.SKILL, associatedSkill: Skills.HISTORY },
    'TINKER': { name: 'Tinker', description: 'Proficency with tinkers tools. Can spend 1 hour and 10GP to construct tiny clockwork device from one of Clockwork Toy, Fire Starter, or Music Box.', type: TraitType.ABILITY },
    
    // half-orc traits
    'MENACING': { name: 'Menacing', description: 'Gain profiency in Intimidation skill.', type: TraitType.SKILL, associatedSkill: Skills.INTIMIDATION },
    'RELENTLESS_END': { name: 'Relentless endurance', description: 'When reduced to 0 hit points and not killed outright, you are only reduced to 1HP instead. Once per long rest.', type: TraitType.ABILITY },
    'SAVAGE_ATT': { name: 'Savage attacks', description: 'When you roll a crit hit with melee weapon, can add one additional damage dice roll to damage done.', type: TraitType.ABILITY },
    
    // tiefling traits
    'HELLISH_RESIST': { name: 'Hellish resistance', description: 'Resistance to fire damage.', type: TraitType.ABILITY },
    'INFERNAL_LEGACY': { name: 'Infernal legacy', description: 'Gain the Thaumitergy cantrip. At level 3 gain the Hellish Rebuke spell at 2nd level, once per day. At level 5 you can cast Darkness once per day.', type: TraitType.SPELL },
};