import { Language } from "./languages";

export interface Background {
    id: string;
    name: string;
    description: string;
    proficiencies: any[];
    languages: Language[] | null;
    equipment: any[];
    suggestedCharacteristics: any;
}

type Backgrounds = Record<string, Background>;

export const Backgrounds = [
    {
        id: 'ACOLYTE',
        name: 'Acolyte',
        description: 'A devotee of a specific deity or pantheon, typically trained in religious rites and knowledgeable about a particular faith\'s history and rituals. Grants insight into religious matters and support from religious communities.',
        proficiencies: [],
        languages: null,
        equipment: [],
        suggestedCharacteristics: null,
    },
    {
        id: 'CHARLATAN',
        name: 'Charlatan',
        description: 'A master of deception and manipulation, skilled in disguise and fraud. Often has a false identity and is adept at fooling others through lies and trickery.',
        proficiencies: [],
        languages: null,
        equipment: [],
        suggestedCharacteristics: null,
    },
    {
        id: 'CRIMINAL',
        name: 'Criminal',
        description: 'A background in illegal activities, whether as a thief, smuggler, spy, or other lawbreaker. Has connections in the criminal underworld and is skilled in stealth and deception.',
        proficiencies: [],
        languages: null,
        equipment: [],
        suggestedCharacteristics: null,
    },
    {
        id: 'ENTERTAINER',
        name: 'Entertainer',
        description: 'A performer, such as a musician, dancer, or actor, skilled in captivating audiences. Has the ability to draw attention and admiration, as well as a repertoire of performance techniques.',
        proficiencies: [],
        languages: null,
        equipment: [],
        suggestedCharacteristics: null,
    },
    {
        id: 'FOLK_HERO',
        name: 'Folk Hero',
        description: 'A commoner who became a hero for standing up against oppressors. Known for their bravery and humble origins, often inspiring others with their deeds.',
        proficiencies: [],
        languages: null,
        equipment: [],
        suggestedCharacteristics: null,
    },
    {
        id: 'GUILD_ARTISAN',
        name: 'Guild Artisan',
        description: 'A member of a trade guild, skilled in a particular craft or trade. Has connections with other artisans and guild members, as well as knowledge of commerce and trade practices.',
        proficiencies: [],
        languages: null,
        equipment: [],
        suggestedCharacteristics: null,
    },
    {
        id: 'HERMIT',
        name: 'Hermit',
        description: 'A life spent in seclusion for a personal quest of knowledge or enlightenment. Possesses unique insights and often has access to rare or unique knowledge.',
        proficiencies: [],
        languages: null,
        equipment: [],
        suggestedCharacteristics: null,
    },
    {
        id: 'NOBLE',
        name: 'Noble',
        description: 'Born into wealth and privilege, accustomed to the finer things and the power that comes with status. Has connections in high society and knowledge of politics and history.',
        proficiencies: [],
        languages: null,
        equipment: [],
        suggestedCharacteristics: null,
    },
    {
        id: 'OUTLANDER',
        name: 'Outlander',
        description: 'Grew up in the wilds, far from civilization. Skilled in survival and familiar with the terrain and natural world.',
        proficiencies: [],
        languages: null,
        equipment: [],
        suggestedCharacteristics: null,
    },
    {
        id: 'SAGE',
        name: 'Sage',
        description: 'A scholar and seeker of knowledge, often an expert in a particular academic field. Has extensive learning and access to scholarly resources.',
        proficiencies: [],
        languages: null,
        equipment: [],
        suggestedCharacteristics: null,
    },
    {
        id: 'SAILOR',
        name: 'Sailor',
        description: 'Life spent at sea, whether as a sailor or pirate. Skilled in navigation and experienced with life aboard a ship.',
        proficiencies: [],
        languages: null,
        equipment: [],
        suggestedCharacteristics: null,
    },
    {
        id: 'SOLDIER',
        name: 'Soldier',
        description: 'Military experience, having served in an army or militia. Familiar with the structure of military life and the art of warfare.',
        proficiencies: [],
        languages: null,
        equipment: [],
        suggestedCharacteristics: null,
    },
    {
        id: 'URCHIN',
        name: 'Urchin',
        description: 'Grew up on the streets, surviving by wit and agility. Skilled in stealth and knowledgeable about the workings of the city\'s underbelly.',
        proficiencies: [],
        languages: null,
        equipment: [],
        suggestedCharacteristics: null,
    },
];
