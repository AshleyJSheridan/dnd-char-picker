import { ProfiencySubClasses } from "../enums/proficiencySubClasses";

export interface GearProficiency {
    id: string;
    name: string;
    subClass: ProfiencySubClasses;
    description: string;
};

type GearProficiencies = Record<string, GearProficiency>;

export const GearProficiencies = {
    /* armour proficiencies */
    'ARM_LIGHT': { id: 'ARM_LIGHT', name: 'Light armour', subClass: ProfiencySubClasses.ARMOUR, description: '' },
    'ARM_LIGHT_NO_METAL': { id: 'ARM_LIGHT_NO_METAL', name: 'Light armour (non-metal)', subClass: ProfiencySubClasses.ARMOUR, description: '' },
    'ARM_MEDIUM': { id: 'ARM_MEDIUM', name: 'Medium armour', subClass: ProfiencySubClasses.ARMOUR, description: '' },
    'ARM_MEDIUM_NO_METAL': { id: 'ARM_MEDIUM_NO_METAL', name: 'Medium armour (non-metal)', subClass: ProfiencySubClasses.ARMOUR, description: '' },
    'ARM_HEAVY': { id: 'ARM_HEAVY', name: 'Heavy armour', subClass: ProfiencySubClasses.ARMOUR, description: '' },
    'ARM_SHIELD': { id: 'ARM_SHIELD', name: 'Shields', subClass: ProfiencySubClasses.ARMOUR, description: '' },
    'ARM_SHIELD_NO_METAL': { id: 'ARM_SHIELD_NO_METAL', name: 'Shields (non-metal)', subClass: ProfiencySubClasses.ARMOUR, description: '' },

    /* simple melee weapon proficiences */
    'WEAP_CLUB': { id: 'WEAP_CLUB', name: 'Clubs', subClass: ProfiencySubClasses.MELEE_SIMPLE, description: '' },
    'WEAP_DAGGER': { id: 'WEAP_DAGGER', name: 'Daggers', subClass: ProfiencySubClasses.MELEE_SIMPLE, description: '' },
    'WEAP_GREATCLUB': { id: 'WEAP_GREATCLUB', name: 'Great Clubs', subClass: ProfiencySubClasses.MELEE_SIMPLE, description: '' },
    'WEAP_HANDAXE': { id: 'WEAP_HANDAXE', name: 'Clubs', subClass: ProfiencySubClasses.MELEE_SIMPLE, description: '' },
    'WEAP_JAVELIN': { id: 'WEAP_JAVELIN', name: 'Javelins', subClass: ProfiencySubClasses.MELEE_SIMPLE, description: '' },
    'WEAP_LIGHT_HAMMER': { id: 'WEAP_LIGHT_HAMMER', name: 'Light hammers', subClass: ProfiencySubClasses.MELEE_SIMPLE, description: '' },
    'WEAP_MACE': { id: 'WEAP_MACE', name: 'Maces', subClass: ProfiencySubClasses.MELEE_SIMPLE, description: '' },
    'WEAP_QUARTERSTAFF': { id: 'WEAP_QUARTERSTAFF', name: 'Quarterstaffs', subClass: ProfiencySubClasses.MELEE_SIMPLE, description: '' },
    'WEAP_SICKLE': { id: 'WEAP_SICKLE', name: 'Sickles', subClass: ProfiencySubClasses.MELEE_SIMPLE, description: '' },
    'WEAP_SPEAR': { id: 'WEAP_SPEAR', name: 'Spears', subClass: ProfiencySubClasses.MELEE_SIMPLE, description: '' },

    /* simple ranged weapon proficiencies */
    'WEAP_XBOW_LIGHT': { id: 'WEAP_XBOW_LIGHT', name: 'Light crossbows', subClass: ProfiencySubClasses.RANGED_SIMPLE, description: '' },
    'WEAP_DART': { id: 'WEAP_DART', name: 'Darts', subClass: ProfiencySubClasses.RANGED_SIMPLE, description: '' },
    'WEAP_SHORTBOW': { id: 'WEAP_SHORTBOW', name: 'Shortbows', subClass: ProfiencySubClasses.RANGED_SIMPLE, description: '' },
    'WEAP_SLING': { id: 'WEAP_SLING', name: 'Slings', subClass: ProfiencySubClasses.RANGED_SIMPLE, description: '' },

    /* martial melee weapon proficiencies */
    'WEAP_BATTLEAXE': { id: 'WEAP_BATTLEAXE', name: 'Battleaxes', subClass: ProfiencySubClasses.MELEE_MARTIAL, description: '' },
    'WEAP_FLAIL': { id: 'WEAP_FLAIL', name: 'Flails', subClass: ProfiencySubClasses.MELEE_MARTIAL, description: '' },
    'WEAP_GLAIVE': { id: 'WEAP_GLAIVE', name: 'Glaives', subClass: ProfiencySubClasses.MELEE_MARTIAL, description: '' },
    'WEAP_GREATAXE': { id: 'WEAP_GREATAXE', name: 'Greataxes', subClass: ProfiencySubClasses.MELEE_MARTIAL, description: '' },
    'WEAP_HALBERD': { id: 'WEAP_HALBERD', name: 'Halberds', subClass: ProfiencySubClasses.MELEE_MARTIAL, description: '' },
    'WEAP_LANCE': { id: 'WEAP_LANCE', name: 'Lances', subClass: ProfiencySubClasses.MELEE_MARTIAL, description: '' },
    'WEAP_LONGSWORD': { id: 'WEAP_LONGSWORD', name: 'Longswords', subClass: ProfiencySubClasses.MELEE_MARTIAL, description: '' },
    'WEAP_MAUL': { id: 'WEAP_MAUL', name: 'Mauls', subClass: ProfiencySubClasses.MELEE_MARTIAL, description: '' },
    'WEAP_MORNINGSTAR': { id: 'WEAP_MORNINGSTAR', name: 'Morningstars', subClass: ProfiencySubClasses.MELEE_MARTIAL, description: '' },
    'WEAP_PIKE': { id: 'WEAP_PIKE', name: 'Pikes', subClass: ProfiencySubClasses.MELEE_MARTIAL, description: '' },
    'WEAP_RAPIER': { id: 'WEAP_RAPIER', name: 'Rapiers', subClass: ProfiencySubClasses.MELEE_MARTIAL, description: '' },
    'WEAP_SCIMITAR': { id: 'WEAP_SCIMITAR', name: 'Scimitars', subClass: ProfiencySubClasses.MELEE_MARTIAL, description: '' },
    'WEAP_SHORTSWORD': { id: 'WEAP_SHORTSWORD', name: 'Shortswords', subClass: ProfiencySubClasses.MELEE_MARTIAL, description: '' },
    'WEAP_TRIDENT': { id: 'WEAP_TRIDENT', name: 'Tridents', subClass: ProfiencySubClasses.MELEE_MARTIAL, description: '' },
    'WEAP_WARPICK': { id: 'WEAP_WARPICK', name: 'Warpicks', subClass: ProfiencySubClasses.MELEE_MARTIAL, description: '' },
    'WEAP_WARHAMMER': { id: 'WEAP_WARHAMMER', name: 'Warhammers', subClass: ProfiencySubClasses.MELEE_MARTIAL, description: '' },
    'WEAP_WHIP': { id: 'WEAP_WHIP', name: 'Whips', subClass: ProfiencySubClasses.MELEE_MARTIAL, description: '' },

    /* martial ranged weapon proficiencies */
    'WEAP_BLOWGUN': { id: 'WEAP_BLOWGUN', name: 'Blowguns', subClass: ProfiencySubClasses.RANGED_MARTIAL, description: '' },
    'WEAP_XBOW_HAND': { id: 'WEAP_XBOW_HAND', name: 'Hand crossbows', subClass: ProfiencySubClasses.RANGED_MARTIAL, description: '' },
    'WEAP_XBOW_HEAVY': { id: 'WEAP_XBOW_HEAVY', name: 'Heavy crossbows', subClass: ProfiencySubClasses.RANGED_MARTIAL, description: '' },
    'WEAP_LONGBOW': { id: 'WEAP_LONGBOW', name: 'Longbows', subClass: ProfiencySubClasses.RANGED_MARTIAL, description: '' },
    'WEAP_NET': { id: 'WEAP_NET', name: 'Heavy Nets', subClass: ProfiencySubClasses.RANGED_MARTIAL, description: '' },
};

