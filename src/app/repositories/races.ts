import { Traits, Trait } from "./traits";
import { Languages, Language } from "../enums/languages";

export interface SubRace {
    id: number;
    name: string;
    traits: Trait[];
};

export interface Race {
    id: number;
    name: string;
    maxAge: number;
    maxHeight: number;
    speed: number;
    subraces?: SubRace[];
    traits: Trait[];
    languages: Language[];
};

export const Races: Race[] = [
    { id: 1, name: 'Dwarf', maxAge: 350, maxHeight: 5, speed: 25, 
        subraces: [
            { id: 101, name: 'Hill Dwarf', traits: [Traits.ABILITY_WIS_MINOR, Traits.DWARVEN_TOUGHNESS] },
            { id: 102, name: 'Mountain Dwarf', traits: [Traits.ABILITY_STR, Traits.DWARVEN_ARMOR]},
        ], 
        traits: [Traits.SIZE_MEDIUM, Traits.DARKVISION, Traits.DWARVEN_RESILIENCE, Traits.DWARVEN_COMBAT_TRAINING, Traits.TOOL_PROFICIENCY],
        languages: [Languages.COMMON, Languages.DWARVISH]
    },
    { id: 2, name: 'Elf', maxAge: 750, maxHeight: 6, speed: 30, 
        subraces: [
            { id: 201, name: 'High Elf', traits: [Traits.ABILITY_INT_MINOR, Traits.ELF_WEAPON, Traits.CANTRIP_WIZARD, Traits.EXTRA_LANG]},
            { id: 202, name: 'Wood Elf', traits: [Traits.ABILITY_WIS_MINOR, Traits.ELF_WEAPON, Traits.FLEET_FOOT, Traits.MASK_OF_WILD]},
            { id: 203, name: 'Drow (Dark Elf)', traits: [Traits.ABILITY_CHA_MINOR, Traits.DARKVISION_SUPERIOR, Traits.SUNLIGHT_SENSITIVE, Traits.DROW_MAGIC, Traits.DROW_WEAPON]},
        ], 
        traits: [Traits.SIZE_MEDIUM, Traits.ABILITY_DEX, Traits.DARKVISION, Traits.KEEN_SENSES, Traits.FEY_ANCESTRY, Traits.TRANCE],
        languages: [Languages.COMMON, Languages.ELVISH]
    },
    { id: 3, name: 'Halfling', maxAge: 250, maxHeight: 3, speed: 25, 
        subraces: [
            { id: 301, name: 'Lightfoot', traits: [Traits.ABILITY_CHA_MINOR, Traits.NAT_STEALTH] },
            { id: 302, name: 'Stout', traits: [Traits.ABILITY_CON_MINOR, Traits.STOUT_RESILIENCE] },
        ], 
        traits: [Traits.SIZE_SMALL, Traits.ABILITY_DEX, Traits.LUCKY, Traits.BRAVE, Traits.HALFLING_NIMBLE],
        languages: [Languages.COMMON, Languages.HALFLING]
    },
    { id: 4, name: 'Human', maxAge: 100, maxHeight: 7, speed: 30, 
        traits: [Traits.SIZE_MEDIUM, Traits.ABILITY_INCREASE, Traits.EXTRA_LANG],
        languages: [Languages.COMMON]
    },
    { id: 5, name: 'Dragonborn', maxAge: 80,  maxHeight: 7, speed: 30, 
        traits: [Traits.SIZE_MEDIUM, Traits.ABILITY_STR, Traits.ABILITY_CHA_MINOR, Traits.DRACONIC_ANCESTRY, Traits.BREATH_WEAPON, Traits.DAMAGE_RESISTENCE],
        languages: [Languages.COMMON, Languages.DRACONIC]
    },
    { id: 6, name: 'Gnome', maxAge: 450, maxHeight: 4, speed: 25, 
        subraces: [
            { id: 601, name: 'Forest Gnome', traits: [Traits.ABILITY_DEX_MINOR, Traits.NATURAL_ILLUSION, Traits.SPEAK_BEASTS_SMALL] },
            { id: 602, name: 'Rock Gnome', traits: [Traits.ABILITY_CON_MINOR, Traits.ARTIFICER_LORE, Traits.TINKER] },
        ], 
        traits: [Traits.SIZE_SMALL, Traits.DARKVISION, Traits.GNOME_CUNNING],
        languages: [Languages.COMMON, Languages.GNOMISH]
    },
    { id: 7, name: 'Half-Elf', maxAge: 200, maxHeight: 6, speed: 30, 
        traits: [Traits.SIZE_MEDIUM, Traits.DARKVISION, Traits.FEY_ANCESTRY, Traits.SKILL_VERSATILITY, Traits.EXTRA_LANG],
        languages: [Languages.COMMON, Languages.ELVISH],
    },
    { id: 8, name: 'Half-Orc', maxAge: 75,  maxHeight: 7, speed: 30, 
        traits: [Traits.SIZE_MEDIUM, Traits.DARKVISION, Traits.MENACING, Traits.RELENTLESS_END, Traits.SAVAGE_ATT],
        languages: [Languages.COMMON, Languages.ORCISH],
    },
    { id: 9, name: 'Tiefling', maxAge: 100, maxHeight: 7, speed: 30, 
        traits: [Traits.SIZE_MEDIUM, Traits.DARKVISION, Traits.HELLISH_RESIST, Traits.INFERNAL_LEGACY],
        languages: [Languages.COMMON, Languages.INFERNAL],
    },
];