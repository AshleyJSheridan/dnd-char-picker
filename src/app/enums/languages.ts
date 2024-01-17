export interface Language {
    id: string;
    name: string;
    typicalSpeakers: string;
    script: string;
}

type Languages = Record<string, Language>;

export const Languages = {
    'COMMON': { id: 'COMMON', name: 'Common', typicalSpeakers: 'Humans', script: 'Dwarvish' },
    'DWARVISH': { id: 'DWARVISH', name: 'Dwarvish', typicalSpeakers: 'Dwarves', script: 'Dwarvish' },
    'ELVISH': { id: 'ELVISH', name: 'Elvish', typicalSpeakers: 'Elves', script: 'Dwarvish' },
    'GIANT': { id: 'GIANT', name: 'Giant', typicalSpeakers: 'Ogres, giants', script: 'Dwarvish' },
    'GNOMISH': { id: 'GNOMISH', name: 'Gnomish', typicalSpeakers: 'Gnomes', script: 'Dwarvish' },
    'GOBLIN': { id: 'GOBLIN', name: 'Goblin', typicalSpeakers: 'Goblinoids', script: 'Dwarvish' },
    'HALFLING': { id: 'HALFLING', name: 'Halfling', typicalSpeakers: 'Halflings', script: 'Dwarvish' },
    'ORCISH': { id: 'ORCISH', name: 'Orcish', typicalSpeakers: 'Orcs', script: 'Dwarvish' },
    'ABYSSAL': { id: 'ABYSSAL', name: 'Abyssal', typicalSpeakers: 'Demons', script: 'Dwarvish' },
    'CELESTIAL': { id: 'CELESTIAL', name: 'Celestial', typicalSpeakers: 'Celestials', script: 'Dwarvish' },
    'DRACONIC': { id: 'DRACONIC', name: 'Draconic', typicalSpeakers: 'Dragons, dragonborn', script: 'Dwarvish' },
    'DEEP_SPEECH': { id: 'DEEP_SPEECH', name: 'Deep Speech', typicalSpeakers: 'Aboleths, cloakers', script: 'Dwarvish' },
    'INFERNAL': { id: 'INFERNAL', name: 'Infernal', typicalSpeakers: 'Devils', script: 'Dwarvish' },
    'PRIMORDIAL': { id: 'PRIMORDIAL', name: 'Primordial', typicalSpeakers: 'Elementals', script: 'Dwarvish' },
    'SYLVAN': { id: 'SYLVAN', name: 'Slyan', typicalSpeakers: 'Fey creatures', script: 'Dwarvish' },
    'UNDERCOMMON': { id: 'UNDERCOMMON', name: 'Undercommon', typicalSpeakers: 'Underworld traders', script: 'Dwarvish' },
}