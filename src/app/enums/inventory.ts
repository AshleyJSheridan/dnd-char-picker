export interface InventoryItem {
    id: string;
    name: string;
    goldCost: number | null;
};

type InventoryItems = Record<string, InventoryItem>

export const InventoryItems = {
    /** background items */
    'HOLY_SYMBOL': { id: 'HOLY_SYMBOL', name: 'Holy symbol', goldCost: 5, },
    'PRAYER_BOOK': { id: 'PRAYER_BOOK', name: 'Prayer book', goldCost: null, },
    'INCENSE_STICKS': { id: 'INCENSE_STICKS', name: 'Incense sticks', goldCost: .1, },
    'VESTMENTS': { id: 'VESTMENTS', name: 'Vestments', goldCost: null, },
    
    'COMMON_CLOTHES': { id: 'COMMON_CLOTHES', name: 'Common clothes', goldCost: .5, },
    'TRAVELERS_CLOTHES': { id: 'TRAVELERS_CLOTHES', name: 'Travelers clothes', goldCost: 2, },
    'FINE_CLOTHES': { id: 'FINE_CLOTHES', name: 'Fine clothes', goldCost: 15, },

    'DISGUISE_KIT' : { id: 'DISGUISE_KIT', name: 'Disguise kit', goldCost: 25 },
    'TOOLS_OF_THE_CON': { id: 'TOOLS_OF_THE_CON', name: 'Tools of the con', goldCost: 5, },
    'HERBALISM_KIT' : { id: 'HERBALISM_KIT', name: 'Herbalism kit', goldCost: 5 },
    'FORGERY_KIT' : { id: 'FORGERY_KIT', name: 'Forgery kit', goldCost: 15 },
    'NAVIGATORS_TOOLS' : { id: 'NAVIGATORS_TOOLS', name: 'Navigators tools', goldCost: 25 },
    'POISONERS_KIT' : { id: 'POISONERS_KIT', name: 'Poisoners kit', goldCost: 50 },
    'THIEVES_TOOLS' : { id: 'THIEVES_TOOLS', name: 'Thieves tools', goldCost: 25 },

    'CROWBAR': { id: 'CROWBAR', name: 'Crowbar', goldCost: 2, },
    'SHOVEL': { id: 'SHOVEL', name: 'Shovel', goldCost: 2, },
    'IRON_POT': { id: 'IRON_POT', name: 'Iron pot', goldCost: 2, },
    'SIGNET_RING': { id: 'SIGNET_RING', name: 'Signet ring', goldCost: 5, },
    'HUNTING_TRAP': { id: 'HUNTING_TRAP', name: 'Hunting trap', goldCost: 5, },
    'BLACK_INK': { id: 'BLACK_INK', name: 'Ink (black)', goldCost: 10, },
    'QUILL': { id: 'QUILL', name: 'Quill', goldCost: .01, },
    'ROPE_SILK': { id: 'ROPE_SILK', name: 'Rope (silk)', goldCost: 10, },
    'ROPE_HEMP': { id: 'ROPE_HEMP', name: 'Rope (hemp)', goldCost: 1, },

    'BAGPIPES' : { id: 'BAGPIPES', name: 'Bagpipes', goldCost: 30 },
    'DRUM' : { id: 'DRUM', name: 'Drum', goldCost: 6 },
    'DULCIMER' : { id: 'DULCIMER', name: 'Dulcimer', goldCost: 25 },
    'FLUTE' : { id: 'FLUTE', name: 'Flute', goldCost: 2 },
    'LUTE' : { id: 'LUTE', name: 'Lute', goldCost: 35 },
    'LYRE' : { id: 'LYRE', name: 'Lyre', goldCost: 30 },
    'HORN' : { id: 'HORN', name: 'Horn', goldCost: 3 },
    'PAN_FLUTE' : { id: 'PAN_FLUTE', name: 'Pan flute', goldCost: 12 },
    'SHAWM' : { id: 'SHAWM', name: 'Shawm', goldCost: 2 },
    'VIOL' : { id: 'VIOL', name: 'Viol', goldCost: 30 },

    'STAFF': { id: 'STAFF', name: 'Staff', goldCost: 5, },
    'SMALL_KNIFE': { id: 'SMALL_KNIFE', name: 'Small knife', goldCost: 1, },
    'CLUB': { id: 'CLUB', name: 'Club', goldCost: .1, },
    'DAGGER': { id: 'DAGGER', name: 'Dagger', goldCost: 2, },
    '': { id: '', name: '', goldCost: null, },
    '': { id: '', name: '', goldCost: null, },
    '': { id: '', name: '', goldCost: null, },
    '': { id: '', name: '', goldCost: null, },
    '': { id: '', name: '', goldCost: null, },
    '': { id: '', name: '', goldCost: null, },
    '': { id: '', name: '', goldCost: null, },
    '': { id: '', name: '', goldCost: null, },
    '': { id: '', name: '', goldCost: null, },
    '': { id: '', name: '', goldCost: null, },
    '': { id: '', name: '', goldCost: null, },
    '': { id: '', name: '', goldCost: null, },
    '': { id: '', name: '', goldCost: null, },
    '': { id: '', name: '', goldCost: null, },
    '': { id: '', name: '', goldCost: null, },
    '': { id: '', name: '', goldCost: null, },
    '': { id: '', name: '', goldCost: null, },
    '': { id: '', name: '', goldCost: null, },
    '': { id: '', name: '', goldCost: null, },
    '': { id: '', name: '', goldCost: null, },
    '': { id: '', name: '', goldCost: null, },
    '': { id: '', name: '', goldCost: null, },
    '': { id: '', name: '', goldCost: null, },
    '': { id: '', name: '', goldCost: null, },
    '': { id: '', name: '', goldCost: null, },
};