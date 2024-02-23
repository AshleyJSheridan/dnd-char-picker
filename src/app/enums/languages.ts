export interface Language {
    id: string;
    name: string;
    typicalSpeakers: string;
    script: 'Celestial' | 'Common' | 'Draconic' | 'Dwarvish' | 'Evlish' | 'Infernal' | 'None';
    limitedAccess: boolean;
}

type Languages = Record<string, Language>;

export const Languages = {
    'ABYSSAL': { id: 'ABYSSAL', name: 'Abyssal', typicalSpeakers: 'Demons', script: 'Infernal', limitedAccess: false },
    'CELESTIAL': { id: 'CELESTIAL', name: 'Celestial', typicalSpeakers: 'Celestials', script: 'Celestial', limitedAccess: false },
    'COMMON': { id: 'COMMON', name: 'Common', typicalSpeakers: 'Humans', script: 'Common', limitedAccess: false },
    'DEEP_SPEECH': { id: 'DEEP_SPEECH', name: 'Deep Speech', typicalSpeakers: 'Mind flayers, cloakers', script: 'None', limitedAccess: false },
    'DRACONIC': { id: 'DRACONIC', name: 'Draconic', typicalSpeakers: 'Dragons, dragonborn', script: 'Draconic', limitedAccess: false },
    'DWARVISH': { id: 'DWARVISH', name: 'Dwarvish', typicalSpeakers: 'Dwarves', script: 'Dwarvish', limitedAccess: false },
    'ELVISH': { id: 'ELVISH', name: 'Elvish', typicalSpeakers: 'Elves', script: 'Elvish', limitedAccess: false },
    'GIANT': { id: 'GIANT', name: 'Giant', typicalSpeakers: 'Ogres, giants', script: 'Dwarvish', limitedAccess: false },
    'GNOMISH': { id: 'GNOMISH', name: 'Gnomish', typicalSpeakers: 'Gnomes', script: 'Dwarvish', limitedAccess: false },
    'GOBLIN': { id: 'GOBLIN', name: 'Goblin', typicalSpeakers: 'Goblinoids', script: 'Dwarvish', limitedAccess: false },
    'HALFLING': { id: 'HALFLING', name: 'Halfling', typicalSpeakers: 'Halflings', script: 'Common', limitedAccess: false },
    'INFERNAL': { id: 'INFERNAL', name: 'Infernal', typicalSpeakers: 'Devils', script: 'Infernal', limitedAccess: false },
    'ORCISH': { id: 'ORCISH', name: 'Orcish', typicalSpeakers: 'Orcs', script: 'Dwarvish', limitedAccess: false },
    'PRIMORDIAL': { id: 'PRIMORDIAL', name: 'Primordial', typicalSpeakers: 'Elementals', script: 'Dwarvish', limitedAccess: false },
    'SYLVAN': { id: 'SYLVAN', name: 'Slyan', typicalSpeakers: 'Fey creatures', script: 'Elvish', limitedAccess: false },
    'UNDERCOMMON': { id: 'UNDERCOMMON', name: 'Undercommon', typicalSpeakers: 'Underworld traders', script: 'Elvish', limitedAccess: false },

    'DRUIDIC': { id: 'DRUIDIC', name: 'Druidic', typicalSpeakers: 'Druids', script: 'Dwarvish', limitedAccess: true },
    'THIEVES_CANT': { id: 'THIEVES_CANT', name: 'Thieve\'s Cant', typicalSpeakers: 'Thieves', script: 'Common', limitedAccess: true },
}
