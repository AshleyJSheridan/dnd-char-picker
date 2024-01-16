import { ToolTypes } from "./toolTypes";

export interface Tool {
    id: string;
    name: string;
    type: ToolTypes;
}

type Tools = Record<string, Tool>;

export const Tools = {
    /* general kits */
    'HERBALISM_KIT' : { id: 'HERBALISM_KIT', name: 'Herbalism kit', type: ToolTypes.KIT },
    'DISGUISE_KIT' : { id: 'DISGUISE_KIT', name: 'Herbalism kit', type: ToolTypes.KIT },
    'FORGERY_KIT' : { id: 'FORGERY_KIT', name: 'Herbalism kit', type: ToolTypes.KIT },
    'NAVIGATORS_TOOLS' : { id: 'NAVIGATORS_TOOLS', name: 'Herbalism kit', type: ToolTypes.KIT },
    'POISONERS_KIT' : { id: 'POISONERS_KIT', name: 'Herbalism kit', type: ToolTypes.KIT },
    'THIEVES_TOOLS' : { id: 'THIEVES_TOOLS', name: 'Herbalism kit', type: ToolTypes.KIT },

    /* gaming sets */
    'DICE_SET' : { id: 'DICE_SET', name: 'Herbalism kit', type: ToolTypes.GAMING },
    'PLAYING_CARDS' : { id: 'PLAYING_CARDS', name: 'Herbalism kit', type: ToolTypes.GAMING },

    /* musical instruments */
    'BAGPIPES' : { id: 'BAGPIPES', name: 'Herbalism kit', type: ToolTypes.INSTRUMENT },
    'DRUM' : { id: 'DRUM', name: 'Herbalism kit', type: ToolTypes.INSTRUMENT },
    'DULCIMER' : { id: 'DULCIMER', name: 'Herbalism kit', type: ToolTypes.INSTRUMENT },
    'FLUTE' : { id: 'FLUTE', name: 'Herbalism kit', type: ToolTypes.INSTRUMENT },
    'LUTE' : { id: 'LUTE', name: 'Herbalism kit', type: ToolTypes.INSTRUMENT },
    'LYRE' : { id: 'LYRE', name: 'Herbalism kit', type: ToolTypes.INSTRUMENT },
    'HORN' : { id: 'HORN', name: 'Herbalism kit', type: ToolTypes.INSTRUMENT },
    'PAN_FLUTE' : { id: 'PAN_FLUTE', name: 'Herbalism kit', type: ToolTypes.INSTRUMENT },
    'SHAWM' : { id: 'SHAWM', name: 'Herbalism kit', type: ToolTypes.INSTRUMENT },
    'VIOL' : { id: 'VIOL', name: 'Herbalism kit', type: ToolTypes.INSTRUMENT },

    /* artisans tools */
    'ALCHEMISTS_SUPPLIES': { id: 'ALCHEMISTS_SUPPLIES', name: 'Alchemists supplies', type: ToolTypes.ARTISAN },
    'BREWERS_SUPPLIES': { id: 'BREWERS_SUPPLIES', name: 'Brewers supplies', type: ToolTypes.ARTISAN },
    'CALLIGRAPHERS_SUPPLIES': { id: 'CALLIGRAPHERs supplies', name: 'Calligrapher\'s supplies', type: ToolTypes.ARTISAN },
    'CARPENTERS_TOOLS': { id: 'CARPENTERS_TOOLS', name: 'Carpenters tools', type: ToolTypes.ARTISAN },
    'CARTOGRAPHERS_TOOLS': { id: 'CARTOGRAPHERS_TOOLS', name: 'Cartographers tools', type: ToolTypes.ARTISAN },
    'COBBLERS_TOOLS': { id: 'COBBLERS_TOOLS', name: 'Cobblers tools', type: ToolTypes.ARTISAN },
    'COOKS_UTENSILS': { id: 'COOKS_UTENSILS', name: 'Cooks utensils', type: ToolTypes.ARTISAN },
    'GLASSBLOWERS_TOOLS': { id: 'GLASSBLOWERS_TOOLS', name: 'Glassblowers tools', type: ToolTypes.ARTISAN },
    'JEWELERS_TOOLS': { id: 'JEWELERS_TOOLS', name: 'Jewelers tools', type: ToolTypes.ARTISAN },
    'LEATHERWORKERS_TOOLS': { id: 'LEATHERWORKERS_TOOLS', name: 'Leatherworkers tools', type: ToolTypes.ARTISAN },
    'MASONS_TOOLS': { id: 'MASONS_TOOLS', name: 'Masons tools', type: ToolTypes.ARTISAN },
    'PAINTERS_SUPPLIES': { id: 'PAINTERS_SUPPLIES', name: 'Painters supplies', type: ToolTypes.ARTISAN },
    'POTTERS_TOOLS': { id: 'POTTERS_TOOLS', name: 'Potters tools', type: ToolTypes.ARTISAN },
    'SMITHS_TOOLS': { id: 'SMITHS_TOOLS', name: 'Smiths tools', type: ToolTypes.ARTISAN },
    'TINKERS_TOOLS': { id: 'TINKERS_TOOLS', name: 'Tinkers tools', type: ToolTypes.ARTISAN },
    'WEAVERS_TOOLS': { id: 'WEAVERS_TOOLS', name: 'Weavers tools', type: ToolTypes.ARTISAN },
    'WOODCARVERS_TOOLS': { id: 'WOODCARVERS_TOOLS', name: 'Woodcarvers tools', type: ToolTypes.ARTISAN },
}