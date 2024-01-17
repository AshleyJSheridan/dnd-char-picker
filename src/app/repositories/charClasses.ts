import { Abilities, Ability } from "../enums/abilities";
import { GearProficiencies, GearProficiency } from "./gearProfiencies";
import { ProfiencySubClasses } from "../enums/proficiencySubClasses";
import { ToolTypes } from "../enums/toolTypes";
import { Tools, Tool } from "./tools";
import { OptionType } from "../enums/optionType";
import { ClassSkills, ClassSkill } from "./classSkills";

function getProfienciesBySubClass(subClass: ProfiencySubClasses) {
    let proficiencies = [];

    for (const key in GearProficiencies) {
        if (Object.prototype.hasOwnProperty.call(GearProficiencies, key)) {
            const proficiency: GearProficiency = GearProficiencies[key];

            if(proficiency.subClass === subClass) {
                proficiencies.push(proficiency);
            }
        }
    }

    return proficiencies;
}

function getToolsByType(subClass: ToolTypes) {
    let tools = [];

    for (const key in Tools) {
        if (Object.prototype.hasOwnProperty.call(Tools, key)) {
            const tool: Tool = Tools[key];

            if(tool.type === subClass) {
                tools.push(tool);
            }
        }
    }

    return tools;
}

interface CharTool {
    type: OptionType;
    max: number;
    options?: Tool[];
    option?: Tool;
}

export interface CharClass {
    id: number;
    name: string;
    description: string;
    primaryAbilities: Ability[];
    savingThrowProficiencies: Ability[];
    armorProficiencies: GearProficiency[];
    weaponProficiencies: GearProficiency[];
    hitDie: string;
    hitPoints1st: number;
    tools: CharTool[] | null;
    classSkills: ClassSkill[];
};

export const CharClasses: CharClass[] = [
    { id: 1, name: 'Barbarian', 
        description: 'Barbarians are fierce warriors known for their primal rage, granting them extraordinary strength and resilience in battle.', 
        primaryAbilities: [Abilities.STR], 
        savingThrowProficiencies: [Abilities.STR, Abilities.CON], 
        armorProficiencies: [
            GearProficiencies.ARM_LIGHT,
            GearProficiencies.ARM_MEDIUM,
            GearProficiencies.ARM_SHIELD,
        ],
        weaponProficiencies: [
            ...getProfienciesBySubClass(ProfiencySubClasses.MELEE_SIMPLE),
            ...getProfienciesBySubClass(ProfiencySubClasses.MELEE_MARTIAL),
            ...getProfienciesBySubClass(ProfiencySubClasses.RANGED_SIMPLE),
            ...getProfienciesBySubClass(ProfiencySubClasses.RANGED_MARTIAL),
        ], 
        hitDie: 'D12',
        hitPoints1st: 12,
        tools: null,
        classSkills: [
            ClassSkills.RAGE, ClassSkills.UNARMORED_DEFENSE, ClassSkills.RECKLESS_ATTACK, ClassSkills.DANGER_SENSE,
            ClassSkills.PRIMAL_PATH_L3, ClassSkills.EXTRA_ATTACK_L5, ClassSkills.FAST_MOVEMENT, ClassSkills.ABILITY_SCORE_L4,
            ClassSkills.PRIMAL_PATH_L6, ClassSkills.FERAL_INSTINCT, ClassSkills.ABILITY_SCORE_L8, ClassSkills.BRUTAL_CRITICAL_L9,
            ClassSkills.PRIMAL_PATH_L10, ClassSkills.RELENTLESS_RAGE, ClassSkills.ABILITY_SCORE_L12, ClassSkills.BRUTAL_CRITICAL_L13,
            ClassSkills.PRIMAL_PATH_L14, ClassSkills.PERSISTENT_RAGE, ClassSkills.BRUTAL_CRITICAL_L17, ClassSkills.ABILITY_SCORE_L16,
            ClassSkills.INDOMITABLE_MIGHT, ClassSkills.ABILITY_SCORE_L19, ClassSkills.PRIMAL_CHAMPION,
        ],
    },
    { id: 2, name: 'Bard', 
        description: 'Bards are versatile performers and spellcasters, using their musical and artistic talents to inspire allies, manipulate minds, and harness magical effects.', 
        primaryAbilities: [Abilities.CHA], 
        savingThrowProficiencies: [Abilities.STR, Abilities.CON], 
        armorProficiencies: [
            GearProficiencies.ARM_LIGHT,
        ], 
        weaponProficiencies: [
            ...getProfienciesBySubClass(ProfiencySubClasses.MELEE_SIMPLE),
            ...getProfienciesBySubClass(ProfiencySubClasses.RANGED_SIMPLE),
            GearProficiencies.WEAP_XBOW_HAND,
            GearProficiencies.WEAP_LONGSWORD,
            GearProficiencies.WEAP_RAPIER,
            GearProficiencies.WEAP_SHORTSWORD,
        ], 
        hitDie: 'D8',
        hitPoints1st: 8,
        tools: [
            { type: OptionType.CHOICE, max: 3, options: [...getToolsByType(ToolTypes.INSTRUMENT)] }
        ],
        classSkills: [
            ClassSkills.SPELLS_BARD, ClassSkills.BARDIC_INSPIRATION, ClassSkills.JACK_OF_ALL_TRADES, ClassSkills.SONG_OF_REST,
            ClassSkills.BARD_COLLEGE, ClassSkills.EXPERTISE_L3, ClassSkills.ABILITY_SCORE_L4, ClassSkills.FONT_OF_INSPIRATION,
            ClassSkills.COUNTERCHARM, ClassSkills.ABILITY_SCORE_L8, ClassSkills.EXPERTISE_L10, ClassSkills.MAGICAL_SECRETS_L10,
            ClassSkills.ABILITY_SCORE_L12, ClassSkills.MAGICAL_SECRETS_L14, ClassSkills.ABILITY_SCORE_L16, ClassSkills.MAGICAL_SECRETS_L18,
            ClassSkills.ABILITY_SCORE_L19, ClassSkills.SUPERIOR_INSPIRATION,
        ],
    },
    { id: 3, name: 'Cleric', 
        description: 'Clerics are divinely inspired spellcasters and healers, serving their chosen deity while wielding holy power to protect, restore, and sometimes smite.', 
        primaryAbilities: [Abilities.WIS], 
        savingThrowProficiencies: [Abilities.STR, Abilities.CON], 
        armorProficiencies: [
            GearProficiencies.ARM_LIGHT,
            GearProficiencies.ARM_MEDIUM, 
            GearProficiencies.ARM_SHIELD,
        ], 
        weaponProficiencies: [
            ...getProfienciesBySubClass(ProfiencySubClasses.MELEE_SIMPLE),
            ...getProfienciesBySubClass(ProfiencySubClasses.RANGED_SIMPLE),
        ], 
        hitDie: 'D8',
        hitPoints1st: 12,
        tools: null,
        classSkills: [
            ClassSkills.SPELLS_CLERIC, ClassSkills.DIVINE_DOMAIN, ClassSkills.CHANNEL_DIVINITY, ClassSkills.CHANNEL_DIVINITY_TURN_UNDEAD,
            ClassSkills.ABILITY_SCORE_L4, ClassSkills.DESTROY_UNDEAD, ClassSkills.ABILITY_SCORE_L8, ClassSkills.DIVINE_INTERVENTION,
            ClassSkills.ABILITY_SCORE_L12, ClassSkills.ABILITY_SCORE_L16, ClassSkills.ABILITY_SCORE_L19,
            // add in some way of showing cleric domain skills here
        ],
    },
    { id: 4, name: 'Druid', 
        description: 'Druids are guardians of nature, wielding powerful natural magic, shapeshifting abilities, and a deep connection to animals and the environment.', 
        primaryAbilities: [Abilities.WIS], 
        savingThrowProficiencies: [Abilities.STR, Abilities.CON], 
        armorProficiencies: [
            GearProficiencies.ARM_LIGHT_NO_METAL,
            GearProficiencies.ARM_MEDIUM_NO_METAL,
            GearProficiencies.ARM_SHIELD_NO_METAL,
        ], 
        weaponProficiencies: [
            GearProficiencies.WEAP_CLUB,
            GearProficiencies.WEAP_DAGGER,
            GearProficiencies.WEAP_DART,
            GearProficiencies.WEAP_JAVELIN,
            GearProficiencies.WEAP_MACE,
            GearProficiencies.WEAP_QUARTERSTAFF,
            GearProficiencies.WEAP_SCIMITAR,
            GearProficiencies.WEAP_SICKLE,
            GearProficiencies.WEAP_SLING,
            GearProficiencies.WEAP_SPEAR,
        ], 
        hitDie: 'D8',
        hitPoints1st: 12,
        tools: [
            { type: OptionType.ITEM, max: 3, option: Tools.HERBALISM_KIT }
        ],
        classSkills: [
            ClassSkills.DRUIDIC, ClassSkills.SPELLS_DRUID, ClassSkills.WILD_SHAPE, ClassSkills.ABILITY_SCORE_L4,
            ClassSkills.WILD_SHAPE_IMPROVED_L4, ClassSkills.ABILITY_SCORE_L8, ClassSkills.ABILITY_SCORE_L12, ClassSkills.ABILITY_SCORE_L16,
            ClassSkills.TIMELESS_BODY_L18, ClassSkills.BEAST_SPELLS, ClassSkills.ABILITY_SCORE_L19, ClassSkills.ARCHIDRUID,
        ],
    },
    { id: 5, name: 'Fighter', 
        description: 'Fighters are skilled combatants, mastering a variety of weapons and armor, with the versatility to excel in many different forms of physical combat.', 
        primaryAbilities: [Abilities.STR, Abilities.DEX], 
        savingThrowProficiencies: [Abilities.STR, Abilities.CON], 
        armorProficiencies: [
            ...getProfienciesBySubClass(ProfiencySubClasses.ARMOUR),
        ], 
        weaponProficiencies: [
            ...getProfienciesBySubClass(ProfiencySubClasses.MELEE_SIMPLE),
            ...getProfienciesBySubClass(ProfiencySubClasses.MELEE_MARTIAL),
            ...getProfienciesBySubClass(ProfiencySubClasses.RANGED_SIMPLE),
            ...getProfienciesBySubClass(ProfiencySubClasses.RANGED_MARTIAL),
        ], 
        hitDie: 'D10',
        hitPoints1st: 12,
        tools: null,
        classSkills: [
            ClassSkills.FIGHTING_STYLE, ClassSkills.SECOND_WIND, ClassSkills.ACTION_SURGE_L2, ClassSkills.MARTIAL_ARCHTYPE,
            ClassSkills.ABILITY_SCORE_L4, ClassSkills.EXTRA_ATTACK_L5, ClassSkills.ABILITY_SCORE_L6, ClassSkills.ABILITY_SCORE_L8,
            ClassSkills.INDOMNITABLE_L9, ClassSkills.EXTRA_ATTACK_L11, ClassSkills.ABILITY_SCORE_L12, ClassSkills.INDOMNITABLE_L13,
            ClassSkills.ABILITY_SCORE_L14, ClassSkills.ABILITY_SCORE_L16, ClassSkills.INDOMNITABLE_L17, ClassSkills.ACTION_SURGE_L17,
            ClassSkills.ABILITY_SCORE_L19, ClassSkills.EXTRA_ATTACK_L20,
        ],
    },
    { id: 6, name: 'Monk', 
        description: 'Monks are martial artists who harness their body\'s energy and discipline, using speed, agility, and powerful strikes to overcome their foes.', 
        primaryAbilities: [Abilities.DEX, Abilities.WIS], 
        savingThrowProficiencies: [Abilities.STR, Abilities.CON], 
        armorProficiencies: [], 
        weaponProficiencies: [
            ...getProfienciesBySubClass(ProfiencySubClasses.MELEE_SIMPLE),
            ...getProfienciesBySubClass(ProfiencySubClasses.RANGED_SIMPLE),
            GearProficiencies.WEAP_SHORTSWORD,
        ], 
        hitDie: 'D8',
        hitPoints1st: 12,
        tools: [
            { type: OptionType.CHOICE, max: 3, options: [...getToolsByType(ToolTypes.INSTRUMENT), ...getToolsByType(ToolTypes.ARTISAN)] }
        ],
        classSkills: [
            ClassSkills.UNARMORED_DEFENSE, ClassSkills.MARTIAL_ARTS, ClassSkills.KI, ClassSkills.FLURRY_OF_BLOWS,
            ClassSkills.PATIENT_DEFENSE, ClassSkills.STEP_OF_WIND, ClassSkills.UNARMORED_MOVEMENT_L2, ClassSkills.MONASTIC_TRADITION,
            ClassSkills.DEFLECT_MISSILES, ClassSkills.ABILITY_SCORE_L4, ClassSkills.SLOW_FALL, ClassSkills.EXTRA_ATTACK_L5,
            ClassSkills.STUNNING_STRIKE, ClassSkills.KI_EMPOWERED_STRIKES, ClassSkills.UNARMORED_MOVEMENT_L6, ClassSkills.EVASION,
            ClassSkills.STILLNESS_OF_MIND, ClassSkills.ABILITY_SCORE_L8, ClassSkills.UNARMORED_MOVEMENT_L9, ClassSkills.PURITY_OF_BODY, 
            ClassSkills.UNARMORED_MOVEMENT_L10, ClassSkills.ABILITY_SCORE_L12, ClassSkills.TONGUE_OF_SUN_AND_MOON, ClassSkills.DIAMOND_SOUL,
            ClassSkills.UNARMORED_MOVEMENT_L14, ClassSkills.TIMELESS_BODY_L15, ClassSkills.ABILITY_SCORE_L16, ClassSkills.EMPTY_BODY,
            ClassSkills.UNARMORED_MOVEMENT_L18, ClassSkills.ABILITY_SCORE_L19, ClassSkills.PERFECT_SELF,


        ],
    },
    { id: 7, name: 'Paladin', 
        description: 'Paladins are holy warriors, blending martial prowess with divine magic, committed to righteousness, protection, and often adhering to a strict moral code.', 
        primaryAbilities: [Abilities.STR, Abilities.CHA], 
        savingThrowProficiencies: [Abilities.STR, Abilities.CON], 
        armorProficiencies: [
            ...getProfienciesBySubClass(ProfiencySubClasses.ARMOUR),
        ],
        weaponProficiencies: [
            ...getProfienciesBySubClass(ProfiencySubClasses.MELEE_SIMPLE),
            ...getProfienciesBySubClass(ProfiencySubClasses.MELEE_MARTIAL),
            ...getProfienciesBySubClass(ProfiencySubClasses.RANGED_SIMPLE),
            ...getProfienciesBySubClass(ProfiencySubClasses.RANGED_MARTIAL),
        ], 
        hitDie: 'D10',
        hitPoints1st: 12,
        tools: null,
        classSkills: [
            ClassSkills.DIVINE_SENSE, ClassSkills.LAY_ON_HANDS, ClassSkills.FIGHTING_STYLE, ClassSkills.SPELLS_PALADIN,
            ClassSkills.DIVINE_SMITE, ClassSkills.DIVINE_HEALTH, ClassSkills.SACRED_OATH, ClassSkills.ABILITY_SCORE_L4,
            ClassSkills.EXTRA_ATTACK_L5, ClassSkills.AURA_OF_PROTECTION, ClassSkills.ABILITY_SCORE_L8, ClassSkills.AURA_OF_COURAGE,
            ClassSkills.IMPROVED_DIVINE_SMITE, ClassSkills.ABILITY_SCORE_L12, ClassSkills.CLEANSING_TOUCH, ClassSkills.ABILITY_SCORE_L16,
            ClassSkills.AURA_IMPROVEMENTS, ClassSkills.ABILITY_SCORE_L19,
        ],
    },
    { id: 8, name: 'Ranger', 
        description: 'Rangers are skilled hunters and trackers, adept in stealth, survival, and fighting, often with a deep connection to nature and a chosen terrain.', 
        primaryAbilities: [Abilities.DEX, Abilities.WIS], 
        savingThrowProficiencies: [Abilities.STR, Abilities.CON], 
        armorProficiencies: [
            GearProficiencies.ARM_LIGHT,
            GearProficiencies.ARM_MEDIUM,
            GearProficiencies.ARM_SHIELD,
        ], 
        weaponProficiencies: [
            ...getProfienciesBySubClass(ProfiencySubClasses.MELEE_SIMPLE),
            ...getProfienciesBySubClass(ProfiencySubClasses.MELEE_MARTIAL),
            ...getProfienciesBySubClass(ProfiencySubClasses.RANGED_SIMPLE),
            ...getProfienciesBySubClass(ProfiencySubClasses.RANGED_MARTIAL),
        ], 
        hitDie: 'D10',
        hitPoints1st: 12,
        tools: null,
        classSkills: [
            ClassSkills.FAVOURED_ENEMY_L1, ClassSkills.NATURAL_EXPLORER_L1, ClassSkills.FIGHTING_STYLE, ClassSkills.SPELLS_RANGER,
            ClassSkills.RANGER_ARCHETYPE, ClassSkills.PRIMEVAL_AWARENESS, ClassSkills.ABILITY_SCORE_L4, ClassSkills.EXTRA_ATTACK_L5,
            ClassSkills.LANDS_STRIDE, ClassSkills.ABILITY_SCORE_L8, ClassSkills.HIDE_PLAIN_SIGHT, ClassSkills.ABILITY_SCORE_L12,
            ClassSkills.VANISH, ClassSkills.ABILITY_SCORE_L16, ClassSkills.FERAL_SENSES, ClassSkills.ABILITY_SCORE_L19,
            ClassSkills.FOE_SLAYER,
        ],
    },
    { id: 9, name: 'Rogue', 
        description: 'Rogues are cunning and resourceful, excelling in stealth, thievery, and deception, often employing their skills for espionage, infiltration, and surprise attacks.', 
        primaryAbilities: [Abilities.DEX], 
        savingThrowProficiencies: [Abilities.STR, Abilities.CON], 
        armorProficiencies: [
            GearProficiencies.ARM_LIGHT,
        ], 
        weaponProficiencies: [
            ...getProfienciesBySubClass(ProfiencySubClasses.MELEE_SIMPLE),
            ...getProfienciesBySubClass(ProfiencySubClasses.RANGED_SIMPLE),
            GearProficiencies.WEAP_XBOW_HAND,
            GearProficiencies.WEAP_LONGSWORD,
            GearProficiencies.WEAP_RAPIER,
            GearProficiencies.WEAP_SHORTSWORD,
        ], 
        hitDie: 'D8',
        hitPoints1st: 12,
        tools: [
            { type: OptionType.ITEM, max: 3, option: Tools.THIEVES_TOOLS }
        ],
        classSkills: [
            ClassSkills.EXPERTISE_L1, ClassSkills.SNEAK_ATTACK, ClassSkills.THIEVES_CANT, ClassSkills.CUNNING_ACTION,
            ClassSkills.ROGUISH_ARCHETYPE, ClassSkills.ABILITY_SCORE_L4, ClassSkills.UNCANNY_DODGE, ClassSkills.EXPERTISE_L6,
            ClassSkills.ABILITY_SCORE_L8, ClassSkills.ABILITY_SCORE_L10, ClassSkills.RELIABLE_TALENT, ClassSkills.ABILITY_SCORE_L12,
            ClassSkills.BLINDSENSE, ClassSkills.SLIPPERY_MIND, ClassSkills.ABILITY_SCORE_L16, ClassSkills.ELUSIVE,
            ClassSkills.ABILITY_SCORE_L19, ClassSkills.STROKE_OF_LUCK,
        ],
    },
    { id: 10, name: 'Sorcerer', 
        description: 'Sorcerers are innate spellcasters, channeling magical energy from within themselves, often deriving their powers from a mystical lineage or otherworldly influence.', 
        primaryAbilities: [Abilities.CHA], 
        savingThrowProficiencies: [Abilities.STR, Abilities.CON], 
        armorProficiencies: [],
        weaponProficiencies: [
            GearProficiencies.WEAP_DAGGER,
            GearProficiencies.WEAP_DART,
            GearProficiencies.WEAP_SLING,
            GearProficiencies.WEAP_QUARTERSTAFF,
            GearProficiencies.WEAP_XBOW_LIGHT,
        ], 
        hitDie: 'D6',
        hitPoints1st: 12,
        tools: null,
        classSkills: [
            ClassSkills.SPELLS_SORCERER, ClassSkills.SORCEROUS_ORIGIN, ClassSkills.FONT_OF_MAGIC, ClassSkills.METAMAGIC_L3,
            ClassSkills.ABILITY_SCORE_L4, ClassSkills.ABILITY_SCORE_L8, ClassSkills.METAMAGIC_L10, ClassSkills.ABILITY_SCORE_L12,
            ClassSkills.ABILITY_SCORE_L16, ClassSkills.METAMAGIC_L17, ClassSkills.ABILITY_SCORE_L19, ClassSkills.SORCEROUS_RESTORATION,
        ],
    },
    { id: 11, name: 'Warlock', 
        description: 'Warlocks are spellcasters who gain their powers through a pact with an otherworldly entity, wielding magic that is often eldritch and mysterious in nature.', 
        primaryAbilities: [Abilities.CHA], 
        savingThrowProficiencies: [Abilities.STR, Abilities.CON], 
        armorProficiencies: [
            GearProficiencies.ARM_LIGHT
        ], 
        weaponProficiencies: [
            ...getProfienciesBySubClass(ProfiencySubClasses.MELEE_SIMPLE),
            ...getProfienciesBySubClass(ProfiencySubClasses.RANGED_SIMPLE),
        ], 
        hitDie: 'D8',
        hitPoints1st: 12,
        tools: null,
        classSkills: [
            ClassSkills.OTHERWORDLY_PATRON, ClassSkills.PACT_MAGIC, ClassSkills.ELDRITCH_ONVOCATIONS, ClassSkills.PACT_BOON,
            ClassSkills.ABILITY_SCORE_L4, ClassSkills.ABILITY_SCORE_L8, ClassSkills.MYSTIC_ARCANUM_L11, ClassSkills.ABILITY_SCORE_L12,
            ClassSkills.MYSTIC_ARCANUM_L13, ClassSkills.MYSTIC_ARCANUM_L15, ClassSkills.ABILITY_SCORE_L16, ClassSkills.ABILITY_SCORE_L19,
            ClassSkills.ELDRITCH_MASTER,
        ],
    },
    { id: 12, name: 'Wizard', 
        description: 'Wizards are scholarly magic users who learn and cast spells through extensive study, possessing a deep understanding of arcane lore and magical theory.', 
        primaryAbilities: [Abilities.INT], 
        savingThrowProficiencies: [Abilities.STR, Abilities.CON], 
        armorProficiencies: [], 
        weaponProficiencies: [
            GearProficiencies.WEAP_DAGGER,
            GearProficiencies.WEAP_DART,
            GearProficiencies.WEAP_SLING,
            GearProficiencies.WEAP_QUARTERSTAFF,
            GearProficiencies.WEAP_XBOW_LIGHT,
        ], 
        hitDie: 'D6',
        hitPoints1st: 12,
        tools: null,
        classSkills: [
            ClassSkills.SPELLS_WIZARD,
            ClassSkills.ARCANE_RECOVERY,
            ClassSkills.ARCANE_TRADITION,
            ClassSkills.ABILITY_SCORE_L4,
            ClassSkills.ABILITY_SCORE_L8,
            ClassSkills.ABILITY_SCORE_L12,
            ClassSkills.ABILITY_SCORE_L16,
            ClassSkills.SPELL_MASTERY,
            ClassSkills.ABILITY_SCORE_L19,
            ClassSkills.SIGNATURE_SPELLS,
        ],
    },
];

