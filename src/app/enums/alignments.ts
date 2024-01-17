export interface Alignment {
    name: string;
    description: string;
};

export const Alignments: Alignment[] = [
    { name: 'Lawful Good',     description: 'Committed to honor and altruism, these individuals strive to do what is right, respecting laws and authority.' },
    { name: 'Lawful Neutral',  description: 'Individuals who value order and organization, following rules and traditions, regardless of good or evil.' },
    { name: 'Lawful Evil',     description: 'They are manipulative or authoritarian, using laws and structure to pursue their selfish, malevolent goals.' },
    { name: 'Neutral Good',    description: 'These characters act altruistically without a particular inclination towards order or freedom, focusing on doing good.' },
    { name: 'True Neutral',    description: 'These characters prioritize balance, often seeing good, evil, law, and chaos as equally necessary forces.' },
    { name: 'Neutral Evil',    description: 'Selfish and ruthless, these characters are willing to use any means to achieve their ends, without a preference for order or chaos.' },
    { name: 'Chaotic Good',    description: 'They prioritize individual freedom and kindness, often rebelling against restrictions to do what they believe is right.' },
    { name: 'Chaotic Neutral', description: 'They value their personal freedom above all, shunning rules and acting spontaneously, without aligning with good or evil.' },
    { name: 'Chaotic Evil',    description: 'They embrace chaos and evil, acting with violence and impulsiveness, caring only for personal gain and destruction.' },
];
