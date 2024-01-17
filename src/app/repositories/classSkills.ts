import { SkillType } from "../enums/skillType";
import { SpellSchools } from "../enums/spellSchools";

export interface ClassSkill {
    id: string;
    skillType: SkillType;
    level: number;
    name: string;
    description: string;
    school?: SpellSchools;
};

type ClassSkills = Record<string, ClassSkill>;

export const ClassSkills = {
    /** generic skills */
    'ABILITY_SCORE_L4': { 
        id: 'ABILITY_SCORE_L4',  skillType: SkillType.SKILL, level: 4, name: 'Ability Score Improvement', 
        description: "<p>Increase one ability score of your choice by 2, or two ability scores of your choice by 1. Alternatively, you can choose a feat.</p>" },
    'ABILITY_SCORE_L6': { 
        id: 'ABILITY_SCORE_L6',  skillType: SkillType.SKILL, level: 6, name: 'Ability Score Improvement', 
        description: "<p>Increase one ability score of your choice by 2, or two ability scores of your choice by 1. Alternatively, you can choose a feat.</p>" },
    'ABILITY_SCORE_L8': { 
        id: 'ABILITY_SCORE_L8',  skillType: SkillType.SKILL, level: 8, name: 'Ability Score Improvement', 
        description: "<p>Increase one ability score of your choice by 2, or two ability scores of your choice by 1. Alternatively, you can choose a feat.</p>" },
    'ABILITY_SCORE_L10': { 
        id: 'ABILITY_SCORE_L10',  skillType: SkillType.SKILL, level: 10, name: 'Ability Score Improvement', 
        description: "<p>Increase one ability score of your choice by 2, or two ability scores of your choice by 1. Alternatively, you can choose a feat.</p>" },
    'ABILITY_SCORE_L12': { 
        id: 'ABILITY_SCORE_L12',  skillType: SkillType.SKILL, level: 12, name: 'Ability Score Improvement', 
        description: "<p>Increase one ability score of your choice by 2, or two ability scores of your choice by 1. Alternatively, you can choose a feat.</p>" },
    'ABILITY_SCORE_L14': { 
        id: 'ABILITY_SCORE_L14',  skillType: SkillType.SKILL, level: 14, name: 'Ability Score Improvement', 
        description: "<p>Increase one ability score of your choice by 2, or two ability scores of your choice by 1. Alternatively, you can choose a feat.</p>" },
    'ABILITY_SCORE_L16': { 
        id: 'ABILITY_SCORE_L16',  skillType: SkillType.SKILL, level: 16, name: 'Ability Score Improvement', 
        description: "<p>Increase one ability score of your choice by 2, or two ability scores of your choice by 1. Alternatively, you can choose a feat.</p>" },
    'ABILITY_SCORE_L19': { 
        id: 'ABILITY_SCORE_L19',  skillType: SkillType.SKILL, level: 19, name: 'Ability Score Improvement', 
        description: "<p>Increase one ability score of your choice by 2, or two ability scores of your choice by 1. Alternatively, you can choose a feat.</p>" },
    'EXTRA_ATTACK_L5': { 
        id: 'EXTRA_ATTACK_L5',  skillType: SkillType.SKILL, level: 5, name: 'Extra Attack', 
        description: "<p>Beginning at 5th level, you can attack twice, instead of once, whenever you take the Attack action on your turn.</p>" },
    'EXTRA_ATTACK_L11': { 
        id: 'EXTRA_ATTACK_L11',  skillType: SkillType.SKILL, level: 11, name: 'Extra Attack', 
        description: "<p>Beginning at 11th level, you can attack twice, instead of once, whenever you take the Attack action on your turn.</p>" },
    'EXTRA_ATTACK_L20': { 
        id: 'EXTRA_ATTACK_L20',  skillType: SkillType.SKILL, level: 20, name: 'Extra Attack', 
        description: "<p>Beginning at 20th level, you can attack twice, instead of once, whenever you take the Attack action on your turn.</p>" },
    'UNARMORED_DEFENSE': { 
        id: 'UNARMORED_DEFENSE',  skillType: SkillType.SKILL, level: 1, name: 'Unarmored Defense', 
        description: "<p>While you are not wearing any armor, your Armor Class equals 10 + your Dexterity modifier + your Constitution modifier. You can use a shield and still gain this benefit.</p>" },
    'FIGHTING_STYLE': {
        id: 'FIGHTING_STYLE', skillType: SkillType.SKILL, level: 2, name: 'Fighting Style',
        description: '<p>You adopt a particular style of fighting as your specialty.</p>' },
    'EVASION': {
        id: 'EVASION', skillType: SkillType.SKILL, level: 7, name: 'Evasion',
        description: '<p>At 7th level, your instinctive agility lets you dodge out of the way of certain area effects, such as a blue dragon’s lightning breath or a fireball spell. When you are subjected to an effect that allows you to make a Dexterity saving throw to take only half damage, you instead take no damage if you succeed on the saving throw, and only half damage if you fail.</p>' },
        

    /** barbarian skills */
    'RAGE': { 
        id: 'RAGE',  skillType: SkillType.SKILL, level: 1, name: 'Rage', 
        description: "<p>In battle, you fight with primal ferocity. On your turn, you can enter a rage as a bonus action.</p><p>While raging, you gain the following benefits if you aren\'t wearing heavy armor:</p><ul><li>You have advantage on Strength checks and Strength saving throws.</li><li>When you make a melee weapon attack using Strength, you gain a bonus to the damage roll that increases as you gain levels as a barbarian (+2 from level 1, +3 from level 9, and +4 from level 16).</li><li>You have resistance to bludgeoning, piercing, and slashing damage.</li></ul><p>If you are able to cast spells, you can\'t cast them or concentrate on them while raging.</p><p>Your rage lasts for 1 minute. It ends early if you are knocked unconscious or if your turn ends and you haven\'t attacked a hostile creature since your last turn or taken damage since then. You can also end your rage on your turn as a bonus action.</p><p>You have the following rages per level which reset at a long rest:</p><ol><li>Level 1-2; 2 rages.</li><li>Level 3-5; 3 rages.</li><li>Level 6-11; 4 rages.</li><li>Level 12-16; 5 rages.</li><li>Level 17-20; 6 rages.</li></ol>" },
    'RECKLESS_ATTACK': { 
        id: 'RECKLESS_ATTACK',  skillType: SkillType.SKILL, level: 2, name: 'Reckless Attack', 
        description: "<p>Starting at 2nd level, you can throw aside all concern for defense to attack with fierce desperation. When you make your first attack on your turn, you can decide to attack recklessly. Doing so gives you advantage on melee weapon attack rolls using Strength during this turn, but attack rolls against you have advantage until your next turn.</p>" },
    'DANGER_SENSE': { 
        id: 'DANGER_SENSE',  skillType: SkillType.SKILL, level: 2, name: 'Danger Sense', 
        description: "<p>At 2nd level, you gain an uncanny sense of when things nearby aren\'t as they should be, giving you an edge when you dodge away from danger.</p><p>You have advantage on Dexterity saving throws against effects that you can see, such as traps and spells. To gain this benefit, you can\'t be blinded, deafened, or incapacitated.</p>" },
    'PRIMAL_PATH_L3': { 
        id: 'PRIMAL_PATH_L3',  skillType: SkillType.SKILL, level: 3, name: 'Primal Path', 
        description: "<p>At 3rd level, you choose a path (Berserker or Totem Warrior) that shapes the nature of your rage. Your choice grants you features at 3rd level and again at 6th, 10th, and 14th levels.</p>" },
    'FAST_MOVEMENT': { 
        id: 'FAST_MOVEMENT',  skillType: SkillType.SKILL, level: 5, name: 'Fast Movement', 
        description: "<p>Speed increases by 10 feet when not wearing armor.</p>" },
    'PRIMAL_PATH_L6': { 
        id: 'PRIMAL_PATH_L6',  skillType: SkillType.SKILL, level: 6, name: 'Path Feature (Varies)', 
        description: "<p>Additional feature based on Primal Path.</p>" },
    'FERAL_INSTINCT': { 
        id: 'FERAL_INSTINCT',  skillType: SkillType.SKILL, level: 7, name: 'Feral Instinct', 
        description: "<p>Advantage on initiative rolls. Additionally, if you are surprised at the beginning of combat and aren't incapacitated, you can act normally on your first turn if you enter your rage before doing anything else.</p>" },
    'BRUTAL_CRITICAL_L9': { 
        id: 'BRUTAL_CRITICAL_L9',  skillType: SkillType.SKILL, level: 9, name: 'Brutal Critical', 
        description: "<p>Adds one additional weapon damage die when determining the extra damage for a critical hit with a melee attack.</p>" },
    'PRIMAL_PATH_L10': { 
        id: 'PRIMAL_PATH_L10',  skillType: SkillType.SKILL, level: 10, name: 'Path Feature (Varies)', 
        description: "<p>Additional feature based on Primal Path.</p>" },
    'RELENTLESS_RAGE': { 
        id: 'RELENTLESS_RAGE',  skillType: SkillType.SKILL, level: 11, name: 'Relentless Rage', 
        description: "<p>If you drop to 0 hit points while you're raging and don't die outright, you can make a DC 10 Constitution saving throw. If you succeed, you drop to 1 hit point instead.</p><p>Each time you use this, the DC increases by 5. It resets again to 10 after a long rest.</p>" },
    'BRUTAL_CRITICAL_L13': { 
        id: 'BRUTAL_CRITICAL_L13',  skillType: SkillType.SKILL, level: 13, name: 'Brutal Critical', 
        description: "<p>At 13th level, you can roll two additional weapon damage dice when determining the extra damage for a critical hit with a melee attack.</p>" },
    'PRIMAL_PATH_L14': { 
        id: 'PRIMAL_PATH_L14',  skillType: SkillType.SKILL, level: 14, name: 'Path Feature (Varies)', 
        description: "<p>Additional feature based on Primal Path.</p>" },
    'PERSISTENT_RAGE': { 
        id: 'PERSISTENT_RAGE',  skillType: SkillType.SKILL, level: 15, name: 'Persistent Rage', 
        description: "<p>Your rage only ends early if you fall unconscious or if you choose to end it.</p>" },
    'BRUTAL_CRITICAL_L17': { 
        id: 'BRUTAL_CRITICAL_L17',  skillType: SkillType.SKILL, level: 17, name: 'Brutal Critical', 
        description: "<p>At 17th level, you can roll three additional weapon damage dice when determining the extra damage for a critical hit with a melee attack.</p>" },
    'INDOMITABLE_MIGHT': { 
        id: 'INDOMITABLE_MIGHT',  skillType: SkillType.SKILL, level: 18, name: 'Indomitable Might', 
        description: "<p>If your total for a Strength check is less than your Strength score, you can use that score in place of the total.</p>" },
    'PRIMAL_CHAMPION': { 
        id: 'PRIMAL_CHAMPION',  skillType: SkillType.SKILL, level: 20, name: 'Primal Champion', 
        description: "<p>Increases your Strength and Constitution scores by 4. Your maximum for those scores is now 24.</p>" },

    /** bard skills */
    'SPELLS_BARD': { 
        id: 'SPELLS_BARD', skillType: SkillType.MAGIC, level: 1, name: 'Spellcasting', school: SpellSchools.BARD,
        description: '<p>You have learned to untangle and reshape the fabric of reality in harmony with your wishes and music. Your spells are part of your vast repertoire, magic that you can tune to different situations. You can learn cantrips and spells from the Bard spell list appropriate to your level.</p>' },
    'BARDIC_INSPIRATION': { 
        id: 'BARDIC_INSPIRATION', skillType: SkillType.SKILL, level: 1, name: 'Bardic Inspiration',
        description: '<p>You can inspire others through stirring words or music. To do so, you use a bonus action on your turn to choose one creature other than yourself within 60 feet of you who can hear you. That creature gains one Bardic Inspiration die, a d6.</p><p>Once within the next 10 minutes, the creature can roll the die and add the number rolled to one ability check, attack roll, or saving throw it makes. The creature can wait until after it rolls the d20 before deciding to use the Bardic Inspiration die, but must decide before the DM says whether the roll succeeds or fails. Once the Bardic Inspiration die is rolled, it is lost. A creature can have only one Bardic Inspiration die at a time.</p><p>You can use this feature a number of times equal to your Charisma modifier (a minimum of once). You regain any expended uses when you finish a long rest.</p><p>Your Bardic Inspiration die changes when you reach certain levels in this class. The die becomes a d8 at 5th level, a d10 at 10th level, and a d12 at 15th level.</p>' },
    'JACK_OF_ALL_TRADES': { 
        id: 'JACK_OF_ALL_TRADES', skillType: SkillType.SKILL, level: 2, name: 'Jack of all Trades',
        description: '<p>Starting at 2nd level, you can add half your proficiency bonus, rounded down, to any ability check you make that doesn’t already include your proficiency bonus.</p>' },
    'SONG_OF_REST': { 
        id: 'SONG_OF_REST', skillType: SkillType.SKILL, level: 2, name: 'Song of Rest',
        description: '<p>Beginning at 2nd level, you can use soothing music or oration to help revitalize your wounded allies during a short rest. If you or any friendly creatures who can hear your performance regain hit points at the end of the short rest by spending one or more Hit Dice, each of those creatures regains an extra 1d6 hit points.</p><p>The extra hit points increase when you reach certain levels in this class: to 1d8 at 9th level, to 1d10 at 13th level, and to 1d12 at 17th level.</p>' },
    'BARD_COLLEGE': { 
        id: 'BARD_COLLEGE', skillType: SkillType.SKILL, level: 3, name: 'Bard College',
        description: '<p>At 3rd level, you delve into the advanced techniques of a bard college of your choice: the College of Lore detailed at the end of the class description or another from the Player\'s Handbook or other sources. Your choice grants you features at 3rd level and again at 6th and 14th level.</p>' },
    'EXPERTISE_L3': { 
        id: 'EXPERTISE_L3', skillType: SkillType.SKILL, level: 3, name: 'Expertise',
        description: '<p>At 3rd level, choose two of your skill proficiencies. Your proficiency bonus is doubled for any ability check you make that uses either of the chosen proficiencies.</p>' },
    'EXPERTISE_L10': { 
        id: 'EXPERTISE_L10', skillType: SkillType.SKILL, level: 10, name: 'Expertise',
        description: '<p>At 10th level, choose two more of your skill proficiencies. Your proficiency bonus is doubled for any ability check you make that uses either of the chosen proficiencies.</p>' },
    'FONT_OF_INSPIRATION': { 
        id: 'FONT_OF_INSPIRATION', skillType: SkillType.SKILL, level: 5, name: 'Font of Inspiration',
        description: '<p>Beginning when you reach 5th level, you regain all of your expended uses of Bardic Inspiration when you finish a short or long rest.</p>' },
    'COUNTERCHARM': { 
        id: 'COUNTERCHARM', skillType: SkillType.SKILL, level: 6, name: 'Countercharm',
        description: '<p>At 6th level, you gain the ability to use musical notes or words of power to disrupt mind-influencing effects. As an action, you can start a performance that lasts until the end of your next turn. During that time, you and any friendly creatures within 30 feet of you have advantage on saving throws against being frightened or charmed. A creature must be able to hear you to gain this benefit. The performance ends early if you are incapacitated or silenced or if you voluntarily end it (no action required).</p>' },
    'SUPERIOR_INSPIRATION': { 
        id: 'SUPERIOR_INSPIRATION', skillType: SkillType.SKILL, level: 20, name: 'Superior Inspiration',
        description: '<p>At 20th level, when you roll initiative and have no uses of Bardic Inspiration left, you regain one use.</p>' },
    'MAGICAL_SECRETS_L10': { 
        id: 'MAGICAL_SECRETS_L10', skillType: SkillType.SKILL, level: 10, name: 'Magical Secrets',
        description: '<p>By 10th level, you have plundered magical knowledge from a wide spectrum of disciplines. Choose two spells from any classes, including this one. A spell you choose must be of a level you can cast, as shown on the Bard table, or a cantrip.</p><p>The chosen spells count as bard spells for you and are included in the number in the Spells Known column of the Bard table.</p>' },
    'MAGICAL_SECRETS_L14': { 
        id: 'MAGICAL_SECRETS_L14', skillType: SkillType.SKILL, level: 14, name: 'Magical Secrets',
        description: '<p>At 14th level, you have plundered magical knowledge from a wide spectrum of disciplines. Choose two spells from any classes, including this one. A spell you choose must be of a level you can cast, as shown on the Bard table, or a cantrip.</p><p>The chosen spells count as bard spells for you and are included in the number in the Spells Known column of the Bard table.</p>' },
    'MAGICAL_SECRETS_L18': { 
        id: 'MAGICAL_SECRETS_L18', skillType: SkillType.SKILL, level: 18, name: 'Magical Secrets',
        description: '<p>At 18th level, you have plundered magical knowledge from a wide spectrum of disciplines. Choose two spells from any classes, including this one. A spell you choose must be of a level you can cast, as shown on the Bard table, or a cantrip.</p><p>The chosen spells count as bard spells for you and are included in the number in the Spells Known column of the Bard table.</p>' },
          
    /** cleric skills */
    'SPELLS_CLERIC': { 
        id: 'SPELLS_CLERIC', skillType: SkillType.MAGIC, level: 1, name: 'Spellcasting', school: SpellSchools.CLERIC,
        description: '<p>As a conduit for divine power, you can cast spells from the cleric spell list, appropriate to your level.</p>' },
    'DIVINE_DOMAIN': { 
        id: 'DIVINE_DOMAIN', skillType: SkillType.SKILL, level: 1, name: 'Divine Domain',
        description: '<p>Choose one domain related to your deity. Your choice grants you domain spells and other features when you choose it at 1st level. It also grants you additional ways to use Channel Divinity when you gain that feature at 2nd level, and additional benefits at 6th, 8th, and 17th levels.</p><p>Each domain has a list of spells — its domain spells — that you gain at the cleric levels noted in the domain description. Once you gain a domain spell, you always have it prepared, and it doesn\'t count against the number of spells you can prepare each day.</p>' },
    'CHANNEL_DIVINITY': { 
        id: 'CHANNEL_DIVINITY', skillType: SkillType.SKILL, level: 2, name: 'Channel Divinity',
        description: '<p>At 2nd level, you gain the ability to channel divine energy directly from your deity, using that energy to fuel magical effects. You start with two such effects: Turn Undead and an effect determined by your domain. Some domains grant you additional effects as you advance in levels, as noted in the domain description.</p><p>When you use your Channel Divinity, you choose which effect to create. You must then finish a short or long rest to use your Channel Divinity again.</p><p>Some Channel Divinity effects require saving throws. When you use such an effect from this class, the DC equals your cleric spell save DC.</p><p>Beginning at 6th level, you can use your Channel Divinity twice between rests, and beginning at 18th level, you can use it three times between rests. When you finish a short or long rest, you regain your expended uses.</p>' },
    'CHANNEL_DIVINITY_TURN_UNDEAD': { 
        id: 'CHANNEL_DIVINITY_TURN_UNDEAD', skillType: SkillType.SKILL, level: 2, name: 'Channel Divinity Turn Undead',
        description: '<p>As an action, you present your holy symbol and speak a prayer censuring the undead. Each undead that can see or hear you within 30 feet of you must make a Wisdom saving throw. If the creature fails its saving throw, it is turned for 1 minute or until it takes any damage.</p><p>A turned creature must spend its turns trying to move as far away from you as it can, and it can’t willingly move to a space within 30 feet of you. It also can’t take reactions. For its action, it can use only the Dash action or try to escape from an effect that prevents it from moving. If there’s nowhere to move, the creature can use the Dodge action.</p>' },
    'DESTROY_UNDEAD': {
        id: 'DESTROY_UNDEAD', skillType: SkillType.SKILL, level: 5, name: 'Destroy Undead',
        description: '<p>Starting at 5th level, when an undead fails its saving throw against your Turn Undead feature, the creature is instantly destroyed if its challenge rating is at or below a certain threshold, as shown in the Destroy Undead table.</p><table><tr><th>Cleric Level</th><th>Destroys Undead of Challenge Rating</th></tr><tr><td>5th</td><td>0.5 or lower</td></tr><tr><td>8th</td><td>1 or lower</td></tr><tr><td>11th</td><td>2 or lower</td></tr><tr><td>14th</td><td>3 or lower</td></tr><tr><td>17th</td><td>4 or lower</td></tr></table>' },
    'DIVINE_INTERVENTION': {
        id: 'DIVINE_INTERVENTION', skillType: SkillType.SKILL, level: 10, name: 'Divine Intervention',
        description: '<p>Beginning at 10th level, you can call on your deity to intervene on your behalf when your need is great.</p><p>Imploring your deity’s aid requires you to use your action. Describe the assistance you seek, and roll percentile dice. If you roll a number equal to or lower than your cleric level, your deity intervenes. The DM chooses the nature of the intervention; the effect of any cleric spell or cleric domain spell would be appropriate.</p><p>If your deity intervenes, you can’t use this feature again for 7 days. Otherwise, you can use it again after you finish a long rest.</p><p>At 20th level, your call for intervention succeeds automatically, no roll required.</p>' },
    

    /** druid skills */
    'DRUIDIC': {
        id: 'DRUIDIC', skillType: SkillType.LANGUAGE, level: 1, name: 'Druidic',
        description: '<p>You know Druidic, the secret language of druids. You can speak the language and use it to leave hidden messages. You and others who know this language automatically spot such a message. Others spot the message’s presence with a successful DC 15 Wisdom (Perception) check but can’t decipher it without magic.</p>' },
    'SPELLS_DRUID': {
        id: 'SPELLS_DRUID', skillType: SkillType.MAGIC, level: 1, name: 'Spellcasting', school: SpellSchools.DRUID,
        description: '<p>Drawing on the divine essence of nature itself, you can cast spells to shape that essence to your will.</p><p>Wisdom is your spellcasting ability for your druid spells, since your magic draws upon your devotion and attunement to nature. You use your Wisdom whenever a spell refers to your spellcasting ability. In addition, you use your Wisdom modifier when setting the saving throw DC for a druid spell you cast and when making an attack roll with one.</p><p><strong>Ritual Casting</strong></p><p>You can cast a druid spell as a ritual if that spell has the ritual tag and you have the spell prepared. This consumes no spell slot, but the spell must be properly prepared beforehand and must be one which is allowed (tagged) to be cast as a ritual spell. Ritual spellcasting takes ~10 minutes, making them poorly suited for combat.</p>' },
    'WILD_SHAPE': {
        id: 'WILD_SHAPE', skillType: SkillType.SKILL, level: 2, name: 'Wild Shape',
        description: '<p>Starting at 2nd level, you can use your action to magically assume the shape of a beast that you have seen before. You can use this feature twice. You regain expended uses when you finish a short or long rest.</p><p>Your druid level determines the beasts you can transform into, as shown in the Beast Shapes table. At 2nd level, for example, you can transform into any beast that has a challenge rating of 1/4 or lower that doesn’t have a flying or swimming speed.</p><table><tr><th>Level</th><th>Max Challenge Rating</th><th>Limitations</th><th>Example</th></tr><tr><td>2nd</td><td>1/4</td><td>No flying or swimming speed.</td><td>Wolf, Badger, Rat</td></tr><tr><td>4th</td><td>1/2</td><td>No flying speed</td><td>Crocodile, Otter</td></tr><tr><td>8th</td><td>1</td><td>No limitations</td><td>Giant Eagle</td></tr></table><p>You can stay in a beast shape for a number of hours equal to half your druid level (rounded down). You then revert to your normal form unless you expend another use of this feature. You can revert to your normal form earlier by using a bonus action on your turn. You automatically revert if you fall unconscious, drop to 0 hit points, or die.</p><p>While you are transformed, the following rules apply:</p><ul><li>Your game statistics are replaced by the statistics of the beast, but you retain your alignment, personality, and Intelligence, Wisdom, and Charisma scores. You also retain all of your skill and saving throw proficiencies, in addition to gaining those of the creature. If the creature has the same proficiency as you and the bonus in its stat block is higher than yours, use the creature’s bonus instead of yours. If the creature has any legendary or lair actions, you can’t use them.</li><li>When you transform, you assume the beast’s hit points and Hit Dice. When you revert to your normal form, you return to the number of hit points you had before you transformed. However, if you revert as a result of dropping to 0 hit points, any excess damage carries over to your normal form.</li><li>You can’t cast spells, and your ability to speak or take any action that requires hands is limited to the capabilities of your beast form. Transforming doesn’t break your concentration on a spell you’ve already cast, however, or prevent you from taking actions that are part of a spell, such as call lightning, that you’ve already cast.</li><li>You retain the benefit of any features from your class, race, or other source and can use them only if the new form is physically capable of doing so.</li><li>You choose whether your equipment falls to the ground in your space, merges into your new form, or is worn by it. Worn equipment functions as normal, but the DM decides whether it is practical for the new form to wear a piece of equipment, based on the creature’s shape and size. Your equipment doesn’t change size or shape to match the new form.</li></ul>' },
    'WILD_SHAPE_IMPROVED_L4': {
        id: 'WILD_SHAPE_IMPROVED_L4', skillType: SkillType.SKILL, level: 4, name: 'Wild Shape Improvement',
        description: '<p>At 4th level, you can use your action to magically assume the shape of a beast that you have seen before of challenge rating 1/2 or lower that doesn\'t have a flying speed. You can use this feature twice. You regain expended uses when you finish a short or long rest.</p>' },
    'WILD_SHAPE_IMPROVED_L8': {
        id: 'WILD_SHAPE_IMPROVED_L8', skillType: SkillType.SKILL, level: 8, name: 'Wild Shape Improvement',
        description: '<p>At 8th level, you can use your action to magically assume the shape of a beast that you have seen before of challenge rating 1 or lower. You can use this feature twice. You regain expended uses when you finish a short or long rest.</p>' },
    'DRUID_CIRCLE': {
        id: 'DRUID_CIRCLE', skillType: SkillType.SKILL, level: 2, name: 'Druid Circle',
        description: '<p>At 2nd level, you choose to identify with a circle of druids. Your choice grants you features at 2nd level and again at 6th, 10th, and 14th level.</p>' },
    'TIMELESS_BODY_L18': {
        id: 'TIMELESS_BODY_L18', skillType: SkillType.SKILL, level: 18, name: 'Timeless Body',
        description: '<p>Starting at 18th level, the primal magic that you wield causes you to age more slowly. For every 10 years that pass, your body ages only 1 year.</p>' },
    'BEAST_SPELLS': {
        id: 'BEAST_SPELLS', skillType: SkillType.SKILL, level: 18, name: 'Beast Spells',
        description: '<p>Beginning at 18th level, you can cast many of your druid spells in any shape you assume using Wild Shape. You can perform the somatic and verbal components of a druid spell while in a beast shape, but you aren’t able to provide material components.</p>' },
    'ARCHIDRUID': {
        id: 'ARCHIDRUID', skillType: SkillType.SKILL, level: 20, name: 'Archdruid',
        description: '<p>At 20th level, you can use your Wild Shape an unlimited number of times.</p><p>Additionally, you can ignore the verbal and somatic components of your druid spells, as well as any material components that lack a cost and aren’t consumed by a spell. You gain this benefit in both your normal shape and your beast shape from Wild Shape.</p>' },

    /** fighter skills */
    'SECOND_WIND': {
        id: 'SECOND_WIND', skillType: SkillType.SKILL, level: 2, name: 'Second Wind',
        description: '<p>You have a limited well of stamina that you can draw on to protect yourself from harm. On your turn, you can use a bonus action to regain hit points equal to 1d10 + your fighter level. Once you use this feature, you must finish a short or long rest before you can use it again.</p>' },
    'ACTION_SURGE_L2': {
        id: 'ACTION_SURGE', skillType: SkillType.SKILL, level: 2, name: 'Action Surge',
        description: '<p>Starting at 2nd level, you can push yourself beyond your normal limits for a moment. On your turn, you can take one additional action.</p><p>Once you use this feature, you must finish a short or long rest before you can use it again.</p>' },
    'MARTIAL_ARCHTYPE': {
        id: 'MARTIAL_ARCHTYPE', skillType: SkillType.SKILL, level: 3, name: 'Martial Archetype',
        description: '<p>At 3rd level, you choose an archetype that you strive to emulate in your combat styles and techniques. Choose Champion, Battle Master, or Eldritch Knight. The archetype you choose grants you features at 3rd level and again at 7th, 10th, 15th, and 18th level.</p>' },
    'INDOMNITABLE_L9': {
        id: 'INDOMNITABLE_L9', skillType: SkillType.SKILL, level: 9, name: 'Indomnitable',
        description: '<p>Beginning at 9th level, you can reroll a saving throw that you fail. If you do so, you must use the new roll, and you can’t use this feature again until you finish a long rest.</p>' },
    'INDOMNITABLE_L13': {
        id: 'INDOMNITABLE_L13', skillType: SkillType.SKILL, level: 13, name: 'Indomnitable',
        description: '<p>Beginning at 13th level, you can reroll two saving throws that you fail. If you do so, you must use the new roll, and you can’t use this feature again until you finish a long rest.</p>' },
    'INDOMNITABLE_L17': {
        id: 'INDOMNITABLE_L17', skillType: SkillType.SKILL, level: 17, name: 'Indomnitable',
        description: '<p>Beginning at 17th level, you can reroll two saving throws that you fail. If you do so, you must use the new roll, and you can’t use this feature again until you finish a long rest.</p>' },
    'ACTION_SURGE_L17': {
        id: 'ACTION_SURGE', skillType: SkillType.SKILL, level: 17, name: 'Action Surge',
        description: '<p>Starting at 17th level, you can use Action Surge twice before a rest, but only once on the same turn.</p>' },

    /** monk skills */
    'MARTIAL_ARTS': {
        id: 'MARTIAL_ARTS', skillType: SkillType.SKILL, level: 1, name: 'Martial Arts',
        description: '<p>At 1st level, your practice of martial arts gives you mastery of combat styles that use unarmed strikes and monk weapons, which are shortswords and any simple melee weapons that don’t have the two-handed or heavy property.</p><p>You gain the following benefits while you are unarmed or wielding only monk weapons and you aren’t wearing armor or wielding a shield:</p><ul><li>You can use Dexterity instead of Strength for the attack and damage rolls of your unarmed strikes and monk weapons.</li><li>You can roll a d4 in place of the normal damage of your unarmed strike or monk weapon. This die changes as you gain monk levels.</li><li>When you use the Attack action with an unarmed strike or a monk weapon on your turn, you can make one unarmed strike as a bonus action.</li></ul>' },
    'KI': {
        id: 'KI', skillType: SkillType.SKILL, level: 2, name: 'Ki',
        description: '<p>Starting at 2nd level, your training allows you to harness the mystic energy of ki. Your access to this energy is represented by a number of ki points. Your monk level determines the number of points you have.</p><p>You can spend these points to fuel various ki features. You start knowing three such features: <strong>Flurry of Blows</strong>, <strong>Patient Defense</strong>, and <strong>Step of the Wind</strong>. You learn more ki features as you gain levels in this class.</p><p>When you spend a ki point, it is unavailable until you finish a short or long rest, at the end of which you draw all of your expended ki back into yourself. You must spend at least 30 minutes of the rest meditating to regain your ki points.</p>' },
    'FLURRY_OF_BLOWS': {
        id: 'FLURRY_OF_BLOWS', skillType: SkillType.SKILL, level: 2, name: 'Flurry of Blows',
        description: '<p>Immediately after you take the Attack action on your turn, you can spend 1 ki point to make two unarmed strikes as a bonus action.</p>' },
    'PATIENT_DEFENSE': {
        id: 'PATIENT_DEFENSE', skillType: SkillType.SKILL, level: 2, name: 'Patient Defense',
        description: '<p>You can spend 1 ki point to take the Dodge action as a bonus action on your turn.</p>' },
    'STEP_OF_WIND': {
        id: 'STEP_OF_WIND', skillType: SkillType.SKILL, level: 2, name: 'Step of the Wind',
        description: '<p>You can spend 1 ki point to take the Disengage or Dash action as a bonus action on your turn, and your jump distance is doubled for the turn.</p>' },
    'UNARMORED_MOVEMENT_L2': {
        id: 'UNARMORED_MOVEMENT_L2', skillType: SkillType.SKILL, level: 2, name: 'Unarmored Movement',
        description: '<p>Starting at 2nd level, your speed increases by 10 feet while you are not wearing armor or wielding a shield. This bonus increases when you reach higher monk levels.</p>' },
    'MONASTIC_TRADITION': {
        id: 'MONASTIC_TRADITION', skillType: SkillType.SKILL, level: 3, name: 'Monastic Tradition',
        description: '<p>When you reach 3rd level, you commit yourself to a monastic tradition: the Way of the Open Hand, detailed at the end of the class description or one from another source. Your tradition grants you features at 3rd level and again at 6th, 11th, and 17th level.</p>' },
    'DEFLECT_MISSILES': {
        id: 'DEFLECT_MISSILES', skillType: SkillType.SKILL, level: 3, name: 'Deflect Missiles',
        description: '<p>Starting at 3rd level, you can use your reaction to deflect or catch the missile when you are hit by a ranged weapon attack. When you do so, the damage you take from the attack is reduced by 1d10 + your Dexterity modifier + your monk level.</p><p>If you reduce the damage to 0, you can catch the missile if it is small enough for you to hold in one hand and you have at least one hand free. If you catch a missile in this way, you can spend 1 ki point to make a ranged attack with the weapon or piece of ammunition you just caught, as part of the same reaction. You make this attack with proficiency, regardless of your weapon proficiencies, and the missile counts as a monk weapon for the attack, which has a normal range of 20 feet and a long range of 60 feet.</p>' },
    'SLOW_FALL': {
        id: 'SLOW_FALL', skillType: SkillType.SKILL, level: 4, name: 'Slow Fall',
        description: '<p>Beginning at 4th level, you can use your reaction when you fall to reduce any falling damage you take by an amount equal to five times your monk level.</p>' },
    'STUNNING_STRIKE': {
        id: 'STUNNING_STRIKE', skillType: SkillType.SKILL, level: 5, name: 'Stunning Strike',
        description: '<p>Starting at 5th level, you can interfere with the flow of ki in an opponent’s body. When you hit another creature with a melee weapon attack, you can spend 1 ki point to attempt a stunning strike. The target must succeed on a Constitution saving throw or be stunned until the end of your next turn.</p>' },
    'KI_EMPOWERED_STRIKES': {
        id: 'KI_EMPOWERED_STRIKES', skillType: SkillType.SKILL, level: 6, name: 'Ki-Empowered Strikes',
        description: '<p>Starting at 6th level, your unarmed strikes count as magical for the purpose of overcoming resistance and immunity to nonmagical attacks and damage.</p>' },
    'UNARMORED_MOVEMENT_L6': {
        id: 'UNARMORED_MOVEMENT_L6', skillType: SkillType.SKILL, level: 6, name: 'Unarmored Movement',
        description: '<p>At 6th level, your Unarmored Speed speed bonus increases to 15 feet while you are not wearing armor or wielding a shield.</p>' },
    'STILLNESS_OF_MIND': {
        id: 'STILLNESS_OF_MIND', skillType: SkillType.SKILL, level: 7, name: 'Stillness of Mind',
        description: '<p>Starting at 7th level, you can use your action to end one effect on yourself that is causing you to be charmed or frightened.</p>' },
    'UNARMORED_MOVEMENT_L9': {
        id: 'UNARMORED_MOVEMENT_L9', skillType: SkillType.SKILL, level: 9, name: 'Unarmored Movement Improvement',
        description: '<p>Starting at 9th level, your Unamormoved Movement allows you to move along vertical surfaces and across liquids on your turn without falling during the move.</p>' },
    'PURITY_OF_BODY': {
        id: 'PURITY_OF_BODY', skillType: SkillType.SKILL, level: 10, name: 'Purity of Body',
        description: '<p>At 10th level, your mastery of the ki flowing through you makes you immune to disease and poison.</p>' },
    'UNARMORED_MOVEMENT_L10': {
        id: 'UNARMORED_MOVEMENT_L10', skillType: SkillType.SKILL, level: 10, name: 'Unarmored Movement',
        description: '<p>At 10th level, your Unarmored Speed speed bonus increases to 20 feet while you are not wearing armor or wielding a shield.</p>' },
    'TONGUE_OF_SUN_AND_MOON': {
        id: 'TONGUE_OF_SUN_AND_MOON', skillType: SkillType.SKILL, level: 13, name: 'Tongue of the Sun and Moon',
        description: '<p>Starting at 13th level, you learn to touch the ki of other minds so that you understand all spoken languages. Moreover, any creature that can understand a language can understand what you say.</p>' },
    'DIAMOND_SOUL': {
        id: 'DIAMOND_SOUL', skillType: SkillType.SKILL, level: 14, name: 'Diamond Soul',
        description: '<p>Beginning at 14th level, your mastery of ki grants you proficiency in all saving throws.</p><p>Additionally, whenever you make a saving throw and fail, you can spend 1 ki point to reroll it and take the second result.</p>' },
    'UNARMORED_MOVEMENT_L14': {
        id: 'UNARMORED_MOVEMENT_L14', skillType: SkillType.SKILL, level: 14, name: 'Unarmored Movement',
        description: '<p>At 14th level, your Unarmored Speed speed bonus increases to 25 feet while you are not wearing armor or wielding a shield.</p>' },
    'TIMELESS_BODY_L15': {
        id: 'TIMELESS_BODY_L15', skillType: SkillType.SKILL, level: 15, name: 'Timeless Body',
        description: '<p>At 15th level, your ki sustains you so that you suffer none of the frailty of old age, and you can’t be aged magically. You can still die of old age, however. In addition, you no longer need food or water.</p>' },
    'EMPTY_BODY': {
        id: 'EMPTY_BODY', skillType: SkillType.SKILL, level: 18, name: 'Empty Body',
        description: '<p>Beginning at 18th level, you can use your action to spend 4 ki points to become invisible for 1 minute. During that time, you also have resistance to all damage but force damage.</p><p>Additionally, you can spend 8 ki points to cast the astral projection spell, without needing material components. When you do so, you can’t take any other creatures with you.</p>' },
    'UNARMORED_MOVEMENT_L18': {
        id: 'UNARMORED_MOVEMENT_L18', skillType: SkillType.SKILL, level: 19, name: 'Unarmored Movement',
        description: '<p>At 18th level, your Unarmored Speed speed bonus increases to 30 feet while you are not wearing armor or wielding a shield.</p>' },
    'PERFECT_SELF': {
        id: 'PERFECT_SELF', skillType: SkillType.SKILL, level: 20, name: 'Perfect Self',
        description: '<p>At 20th level, when you roll for initiative and have no ki points remaining, you regain 4 ki points.</p>' },


    /** paladin skills */

    'DIVINE_SENSE': {
        id: 'DIVINE_SENSE', skillType: SkillType.SKILL, level: 1, name: 'Divine Sense',
        description: '<p>The presence of strong evil registers on your senses like a noxious odor, and powerful good rings like heavenly music in your ears. As an action, you can open your awareness to detect such forces. Until the end of your next turn, you know the location of any celestial, fiend, or undead within 60 feet of you that is not behind total cover. You know the type (celestial, fiend, or undead) of any being whose presence you sense, but not its identity (the vampire Count Strahd von Zarovich, for instance). Within the same radius, you also detect the presence of any place or object that has been consecrated or desecrated, as with the hallow spell.</p><p>You can use this feature a number of times equal to 1 + your Charisma modifier. When you finish a long rest, you regain all expended uses.</p>' },
    'LAY_ON_HANDS': {
        id: 'LAY_ON_HANDS', skillType: SkillType.SKILL, level: 1, name: 'Lay on Hands',
        description: '<p>Your blessed touch can heal wounds. You have a pool of healing power that replenishes when you take a long rest. With that pool, you can restore a total number of hit points equal to your paladin level × 5.</p><p>As an action, you can touch a creature and draw power from the pool to restore a number of hit points to that creature, up to the maximum amount remaining in your pool.</p><p>Alternatively, you can expend 5 hit points from your pool of healing to cure the target of one disease or neutralize one poison affecting it. You can cure multiple diseases and neutralize multiple poisons with a single use of Lay on Hands, expending hit points separately for each one.</p><p>This feature has no effect on undead and constructs.</p>' },
    'SPELLS_PALADIN': {
        id: 'SPELLS_PALADIN', skillType: SkillType.MAGIC, level: 2, name: 'Spellcasting', school: SpellSchools.PALADIN,
        description: '<p>By 2nd level, you have learned to draw on divine magic through meditation and prayer to cast spells as a cleric does.</p><p>Charisma is your spellcasting ability for your paladin spells, since their power derives from the strength of your convictions. You use your Charisma whenever a spell refers to your spellcasting ability. In addition, you use your Charisma modifier when setting the saving throw DC for a paladin spell you cast and when making an attack roll with one.</p><p>You can use a holy symbol as a spellcasting focus for your paladin spells.</p>' },
    'DIVINE_SMITE': {
        id: 'DIVINE_SMITE', skillType: SkillType.SKILL, level: 2, name: 'Divine Smite',
        description: '<p>Starting at 2nd level, when you hit a creature with a melee weapon attack, you can expend one spell slot to deal radiant damage to the target, in addition to the weapon’s damage. The extra damage is 2d8 for a 1st-level spell slot, plus 1d8 for each spell level higher than 1st, to a maximum of 5d8. The damage increases by 1d8 if the target is an undead or a fiend, to a maximum of 6d8.</p>' },
    'DIVINE_HEALTH': {
        id: 'DIVINE_HEALTH', skillType: SkillType.SKILL, level: 3, name: 'Divine Health',
        description: '<p>By 3rd level, the divine magic flowing through you makes you immune to disease.</p>' },
    'SACRED_OATH': {
        id: 'SACRED_OATH', skillType: SkillType.SKILL, level: 3, name: 'Sacred Oath',
        description: '<p>When you reach 3rd level, you swear the oath that binds you as a paladin forever. Up to this time you have been in a preparatory stage, committed to the path but not yet sworn to it. Now you choose the Oath of Devotion detailed at the end of the class description or one from another source.</p><p>Your choice grants you features at 3rd level and again at 7th, 15th, and 20th level. Those features include oath spells and the Channel Divinity feature.</p><p><strong>Oath Spells</strong></p><p>Each oath has a list of associated spells. You gain access to these spells at the levels specified in the oath description. Once you gain access to an oath spell, you always have it prepared. Oath spells don’t count against the number of spells you can prepare each day.</p><p><strong>Channel Divinity</strong></p><p>Your oath allows you to channel divine energy to fuel magical effects. Each Channel Divinity option provided by your oath explains how to use it.</p><p>When you use your Channel Divinity, you choose which option to use. You must then finish a short or long rest to use your Channel Divinity again.</p><p>Some Channel Divinity effects require saving throws. When you use such an effect from this class, the DC equals your paladin spell save DC.</p>' },
    'AURA_OF_PROTECTION': {
        id: 'AURA_OF_PROTECTION', skillType: SkillType.SKILL, level: 6, name: 'Aura of Protection',
        description: '<p>Starting at 6th level, whenever you or a friendly creature within 10 feet of you must make a saving throw, the creature gains a bonus to the saving throw equal to your Charisma modifier (with a minimum bonus of +1). You must be conscious to grant this bonus.</p>' },
    'AURA_OF_COURAGE': {
        id: 'AURA_OF_COURAGE', skillType: SkillType.SKILL, level: 10, name: 'Aura of Courage',
        description: '<p>Starting at 10th level, you and friendly creatures within 10 feet of you can’t be frightened while you are conscious.</p>' },
    'IMPROVED_DIVINE_SMITE': {
        id: 'IMPROVED_DIVINE_SMITE', skillType: SkillType.SKILL, level: 11, name: 'Improved Divine Smite',
        description: '<p>By 11th level, you are so suffused with righteous might that all your melee weapon strikes carry divine power with them. Whenever you hit a creature with a melee weapon, the creature takes an extra 1d8 radiant damage.</p>' },
    'CLEANSING_TOUCH': {
        id: 'CLEANSING_TOUCH', skillType: SkillType.SKILL, level: 14, name: 'Cleansing Touch',
        description: '<p>Beginning at 14th level, you can use your action to end one spell on yourself or on one willing creature that you touch.</p><p>You can use this feature a number of times equal to your Charisma modifier (a minimum of once). You regain expended uses when you finish a long rest.</p>' },
    'AURA_IMPROVEMENTS': {
        id: 'AURA_IMPROVEMENTS', skillType: SkillType.SKILL, level: 18, name: 'Aura Improvements',
        description: '<p>At 18th level, the range of your auras increase to 30 feet.</p>' },

    /** ranger skills */
    'FAVOURED_ENEMY_L1': {
        id: 'FAVOURED_ENEMY_L1', skillType: SkillType.SKILL, level: 1, name: 'Favoured Enemy',
        description: '<p>Beginning at 1st level, you have significant experience studying, tracking, hunting, and even talking to a certain type of enemy.</p><p>Choose a type of favored enemy: aberrations, beasts, celestials, constructs, dragons, elementals, fey, fiends, giants, monstrosities, oozes, plants, or undead. Alternatively, you can select two races of humanoid (such as gnolls and orcs) as favored enemies.</p><p>You have advantage on Wisdom (Survival) checks to track your favored enemies, as well as on Intelligence checks to recall information about them.</p><p>When you gain this feature, you also learn one language of your choice that is spoken by your favored enemies, if they speak one at all.</p>' },
    'NATURAL_EXPLORER_L1': {
        id: 'NATURAL_EXPLORER_L1', skillType: SkillType.SKILL, level: 1, name: 'Natural Explorer',
        description: '<p>You are particularly familiar with one type of natural environment and are adept at traveling and surviving in such regions. Choose one type of favored terrain: arctic, coast, desert, forest, grassland, mountain, swamp, or the Underdark. When you make an Intelligence or Wisdom check related to your favored terrain, your proficiency bonus is doubled if you are using a skill that you’re proficient in.</p><p>While traveling for an hour or more in your favored terrain, you gain the following benefits:</p><ul><li>Difficult terrain doesn’t slow your group’s travel.</li><li>Your group can’t become lost except by magical means.</li><li>Even when you are engaged in another activity while traveling (such as foraging, navigating, or tracking), you remain alert to danger.</li><li>If you are traveling alone, you can move stealthily at a normal pace.</li><li>When you forage, you find twice as much food as you normally would.</li><li>While tracking other creatures, you also learn their exact number, their sizes, and how long ago they passed through the area.</li></ul><p>' },
    'SPELLS_RANGER': {
        id: 'SPELLS_RANGER', skillType: SkillType.MAGIC, level: 2, name: 'Spellcasting', school: SpellSchools.RANGER,
        description: '<p>By the time you reach 2nd level, you have learned to use the magical essence of nature to cast spells, much as a druid does.</p>' },
    'RANGER_ARCHETYPE': {
        id: 'RANGER_ARCHETYPE', skillType: SkillType.SKILL, level: 3, name: 'Ranger Archetype',
        description: '<p>At 3rd level, you choose an archetype that you strive to emulate: the Hunter that is detailed at the end of the class description or one from another source. Your choice grants you features at 3rd level and again at 7th, 11th, and 15th level.</p>' },
    'PRIMEVAL_AWARENESS': {
        id: 'PRIMEVAL_AWARENESS', skillType: SkillType.SKILL, level: 3, name: 'Primeval Awareness',
        description: '<p>Beginning at 3rd level, you can use your action and expend one ranger spell slot to focus your awareness on the region around you. For 1 minute per level of the spell slot you expend, you can sense whether the following types of creatures are present within 1 mile of you (or within up to 6 miles if you are in your favored terrain): aberrations, celestials, dragons, elementals, fey, fiends, and undead. This feature doesn’t reveal the creatures’ location or number.</p>' },
    'NATURAL_EXPLORER_L6': {
        id: 'NATURAL_EXPLORER_L6', skillType: SkillType.SKILL, level: 6, name: 'Natural Explorer',
        description: '<p>You can choose a 2nd type of environment to be familiar with.<p>' },
    'FAVOURED_ENEMY_L6': {
        id: 'FAVOURED_ENEMY_L6', skillType: SkillType.SKILL, level: 1, name: 'Favoured Enemy',
        description: '<p>Beginning at 6th level, you gain significant experience with a 2nd enemy.</p>' },
    'LANDS_STRIDE': {
        id: 'LANDS_STRIDE', skillType: SkillType.SKILL, level: 8, name: 'Land\'s Stride',
        description: '<p>Starting at 8th level, moving through nonmagical difficult terrain costs you no extra movement. You can also pass through nonmagical plants without being slowed by them and without taking damage from them if they have thorns, spines, or a similar hazard.</p><p>In addition, you have advantage on saving throws against plants that are magically created or manipulated to impede movement, such those created by the entangle spell.</p>' },
    'HIDE_PLAIN_SIGHT': {
        id: 'HIDE_PLAIN_SIGHT', skillType: SkillType.SKILL, level: 10, name: 'Hide in Plain Sight',
        description: '<p>Starting at 10th level, you can spend 1 minute creating camouflage for yourself. You must have access to fresh mud, dirt, plants, soot, and other naturally occurring materials with which to create your camouflage.</p><p>Once you are camouflaged in this way, you can try to hide by pressing yourself up against a solid surface, such as a tree or wall, that is at least as tall and wide as you are. You gain a +10 bonus to Dexterity (Stealth) checks as long as you remain there without moving or taking actions. Once you move or take an action or a reaction, you must camouflage yourself again to gain this benefit.</p>' },
    'NATURAL_EXPLORER_L10': {
        id: 'NATURAL_EXPLORER_L10', skillType: SkillType.SKILL, level: 10, name: 'Natural Explorer',
        description: '<p>You can choose a 3rd type of environment to be familiar with.<p>' },
    'VANISH': {
        id: 'VANISH', skillType: SkillType.SKILL, level: 14, name: 'Vanish',
        description: '<p>Starting at 14th level, you can use the Hide action as a bonus action on your turn. Also, you can’t be tracked by nonmagical means, unless you choose to leave a trail.</p>' },
    'FAVOURED_ENEMY_L14': {
        id: 'FAVOURED_ENEMY_L14', skillType: SkillType.SKILL, level: 1, name: 'Favoured Enemy',
        description: '<p>Beginning at 6th level, you gain significant experience with a 2nd enemy.</p>' },
    'FERAL_SENSES': {
        id: 'FERAL_SENSES', skillType: SkillType.SKILL, level: 18, name: 'Feral Senses',
        description: '<p>At 18th level, you gain preternatural senses that help you fight creatures you can’t see. When you attack a creature you can’t see, your inability to see it doesn’t impose disadvantage on your attack rolls against it.</p><p>You are also aware of the location of any invisible creature within 30 feet of you, provided that the creature isn’t hidden from you and you aren’t blinded or deafened.</p>' },
    'FOE_SLAYER': {
        id: 'FOE_SLAYER', skillType: SkillType.SKILL, level: 20, name: 'Foe Slayer',
        description: '<p>At 20th level, you become an unparalleled hunter of your enemies. Once on each of your turns, you can add your Wisdom modifier to the attack roll or the damage roll of an attack you make against one of your favored enemies. You can choose to use this feature before or after the roll, but before any effects of the roll are applied.</p>' },

    /** rogue skills */
    'EXPERTISE_L1': {
        id: 'EXPERTISE_L1', skillType: SkillType.SKILL, level: 1, name: 'Expertise',
        description: '<p>At 1st level, choose two of your skill proficiencies, or one of your skill proficiencies and your proficiency with thieves’ tools. Your proficiency bonus is doubled for any ability check you make that uses either of the chosen proficiencies.</p>' },
    'EXPERTISE_L6': {
        id: 'EXPERTISE_L6', skillType: SkillType.SKILL, level: 6, name: 'Expertise',
        description: '<p>At 6th level, choose two more of your skill proficiencies, or one of your skill proficiencies and your proficiency with thieves’ tools. Your proficiency bonus is doubled for any ability check you make that uses either of the chosen proficiencies.</p>' },
    'SNEAK_ATTACK': {
        id: 'SNEAK_ATTACK', skillType: SkillType.SKILL, level: 1, name: 'Sneak Attack',
        description: '<p>Beginning at 1st level, you know how to strike subtly and exploit a foe’s distraction. Once per turn, you can deal an extra 1d6 damage to one creature you hit with an attack if you have advantage on the attack roll. The attack must use a finesse or a ranged weapon.</p><p>You don’t need advantage on the attack roll if another enemy of the target is within 5 feet of it, that enemy isn’t incapacitated, and you don’t have disadvantage on the attack roll.</p><p>The amount of the extra damage increases as you gain levels in this class.</p>' },
    'THIEVES_CANT': {
        id: 'THIEVES_CANT', skillType: SkillType.LANGUAGE, level: 1, name: 'Thieve\'s Cant',
        description: '<p>During your rogue training you learned thieves’ cant, a secret mix of dialect, jargon, and code that allows you to hide messages in seemingly normal conversation. Only another creature that knows thieves’ cant understands such messages. It takes four times longer to convey such a message than it does to speak the same idea plainly.</p><p>In addition, you understand a set of secret signs and symbols used to convey short, simple messages, such as whether an area is dangerous or the territory of a thieves’ guild, whether loot is nearby, or whether the people in an area are easy marks or will provide a safe house for thieves on the run.</p>' },
    'CUNNING_ACTION': {
        id: 'CUNNING_ACTION', skillType: SkillType.SKILL, level: 2, name: 'Cunning Action',
        description: '<p>Starting at 2nd level, your quick thinking and agility allow you to move and act quickly. You can take a bonus action on each of your turns in combat. This action can be used only to take the Dash, Disengage, or Hide action.</p>' },
    'ROGUISH_ARCHETYPE': {
        id: 'ROGUISH_ARCHETYPE', skillType: SkillType.SKILL, level: 3, name: 'Roguish Archetype',
        description: '<p>At 3rd level, you choose an archetype that you emulate in the exercise of your rogue abilities: Thief, detailed at the end of the class description, or one from another source. Your archetype choice grants you features at 3rd level and then again at 9th, 13th, and 17th level.</p>' },
    'UNCANNY_DODGE': {
        id: 'UNCANNY_DODGE', skillType: SkillType.SKILL, level: 5, name: 'Uncanny Dodge',
        description: '<p>Starting at 5th level, when an attacker that you can see hits you with an attack, you can use your reaction to halve the attack’s damage against you.</p>' },
    'RELIABLE_TALENT': {
        id: 'RELIABLE_TALENT', skillType: SkillType.SKILL, level: 11, name: 'Reliable Talent',
        description: '<p>By 11th level, you have refined your chosen skills until they approach perfection. Whenever you make an ability check that lets you add your proficiency bonus, you can treat a d20 roll of 9 or lower as a 10.</p>' },
    'BLINDSENSE': {
        id: 'BLINDSENSE', skillType: SkillType.SKILL, level: 14, name: 'Blindsense',
        description: '<p>Starting at 14th level, if you are able to hear, you are aware of the location of any hidden or invisible creature within 10 feet of you.</p>' },
    'SLIPPERY_MIND': {
        id: 'SLIPPERY_MIND', skillType: SkillType.SKILL, level: 15, name: 'Slippery Mind',
        description: '<p>By 15th level, you have acquired greater mental strength. You gain proficiency in Wisdom saving throws.</p>' },
    'ELUSIVE': {
        id: 'ELUSIVE', skillType: SkillType.SKILL, level: 18, name: 'Elusive',
        description: '<p>Beginning at 18th level, you are so evasive that attackers rarely gain the upper hand against you. No attack roll has advantage against you while you aren’t incapacitated.</p>' },
    'STROKE_OF_LUCK': {
        id: 'STROKE_OF_LUCK', skillType: SkillType.SKILL, level: 20, name: 'Stroke of Luck',
        description: '<p>At 20th level, you have an uncanny knack for succeeding when you need to. If your attack misses a target within range, you can turn the miss into a hit. Alternatively, if you fail an ability check, you can treat the d20 roll as a 20.</p><p>Once you use this feature, you can’t use it again until you finish a short or long rest.</p>' },

    /** sorcerer skills */
    'SPELLS_SORCERER': {
        id: 'SPELLS_SORCERER', skillType: SkillType.MAGIC, level: 1, name: 'Spellcasting', school: SpellSchools.SORCERER,
        description: '<p>An event in your past, or in the life of a parent or ancestor, left an indelible mark on you, infusing you with arcane magic. This font of magic, whatever its origin, fuels your spells.</p><p>Charisma is your spellcasting ability for your sorcerer spells, since the power of your magic relies on your ability to project your will into the world. You use your Charisma whenever a spell refers to your spellcasting ability. In addition, you use your Charisma modifier when setting the saving throw DC for a sorcerer spell you cast and when making an attack roll with one.</p><p>You can use an arcane focus as a spellcasting focus for your sorcerer spells.</p>' },
    'SORCEROUS_ORIGIN': {
        id: 'SORCEROUS_ORIGIN', skillType: SkillType.SKILL, level: 1, name: 'Sorcerous Origin',
        description: '<p>Choose a sorcerous origin, which describes the source of your innate magical power: Draconic Bloodline, detailed at the end of the class description, or one from another source.</p>' },
    'FONT_OF_MAGIC': {
        id: 'FONT_OF_MAGIC', skillType: SkillType.SKILL, level: 2, name: 'Font of Magic',
        description: '<p>At 2nd level, you tap into a deep wellspring of magic within yourself. This wellspring is represented by sorcery points, which allow you to create a variety of magical effects.</p><p><strong>Sorcery Points</strong></p><p>You have 2 sorcery points, and you gain more as you reach higher levels. You regain all spent sorcery points when you finish a long rest.</p><p><strong>Flexible Casting</strong></p><p>You can use your sorcery points to gain additional spell slots, or sacrifice spell slots to gain additional sorcery points. You learn other ways to use your sorcery points as you reach higher levels.</p><p><strong>Creating Spell Slots</strong></p><p>You can transform unexpended sorcery points into one spell slot as a bonus action on your turn. The Creating Spell Slots table shows the cost of creating a spell slot of a given level. You can create spell slots no higher in level than 5th.</p><p>Any spell slot you create with this feature vanishes when you finish a long rest.</p><table><tr><th>Spell Slot Level</th><th>Sorcery Point Cost</th></tr><tr><td>1st</td><td>2</td></tr><tr><td>2nd</td><td>3</td></tr><tr><td>3rd</td><td>5</td></tr><tr><td>4th</td><td>6</td></tr><tr><td>5th></td><td>7</td></tr></table><p><strong>Converting a Spell Slot to Sorcery Points</strong></p><p>As a bonus action on your turn, you can expend one spell slot and gain a number of sorcery points equal to the slot’s level.</p>' },
    'METAMAGIC_L3': {
        id: 'METAMAGIC_L3', skillType: SkillType.SKILL, level: 3, name: 'Metamagic',
        description: '<p>At 3rd level, you gain the ability to twist your spells to suit your needs. You gain two Metamagic options of your choice.</p><p>You can use only one Metamagic option on a spell when you cast it, unless otherwise noted.</p>' },
    'METAMAGIC_L10': {
        id: 'METAMAGIC_L10', skillType: SkillType.SKILL, level: 10, name: 'Metamagic',
        description: '<p>At 10th level, you gain an additional ability to twist your spells to suit your needs. You gain two Metamagic options of your choice.</p><p>You can use only one Metamagic option on a spell when you cast it, unless otherwise noted.</p>' },
    'METAMAGIC_L17': {
        id: 'METAMAGIC_L17', skillType: SkillType.SKILL, level: 17, name: 'Metamagic',
        description: '<p>At 17th level, you gain an additional ability to twist your spells to suit your needs. You gain two Metamagic options of your choice.</p><p>You can use only one Metamagic option on a spell when you cast it, unless otherwise noted.</p>' },
    'SORCEROUS_RESTORATION': {
        id: 'SORCEROUS_RESTORATION', skillType: SkillType.SKILL, level: 20, name: 'Sorcerous Restoration',
        description: '<p>At 20th level, you regain 4 expended sorcery points whenever you finish a short rest.</p>' },

    /** warlock skills */
    'OTHERWORDLY_PATRON': {
        id: 'OTHERWORDLY_PATRON', skillType: SkillType.SKILL, level: 1, name: 'Otherwordly Patron',
        description: '<p>At 1st level, you have struck a bargain with an otherworldly being of your choice: the Fiend, which is detailed at the end of the class description, or one from another source. Your choice grants you features at 1st level and again at 6th, 10th, and 14th level.</p>' },
    'PACT_MAGIC': {
        id: 'PACT_MAGIC', skillType: SkillType.MAGIC, level: 1, name: 'Pact Magic', school: SpellSchools.WARLOCK,
        description: '<p>Your arcane research and the magic bestowed on you by your patron have given you facility with spells.</p><p><strong>Spellcasting Ability</strong></p><p>Charisma is your spellcasting ability for your warlock spells, so you use your Charisma whenever a spell refers to your spellcasting ability. In addition, you use your Charisma modifier when setting the saving throw DC for a warlock spell you cast and when making an attack roll with one.</p><p>You can use an arcane focus as a spellcasting focus for your warlock spells.</p>' },
    'ELDRITCH_ONVOCATIONS': {
        id: 'ELDRITCH_ONVOCATIONS', skillType: SkillType.SKILL, level: 2, name: 'Eldritch Invocations',
        description: '<p>In your study of occult lore, you have unearthed eldritch invocations, fragments of forbidden knowledge that imbue you with an abiding magical ability.</p><p>At 2nd level, you gain two eldritch invocations of your choice. When you gain certain warlock levels, you gain additional invocations of your choice.</p><p>Additionally, when you gain a level in this class, you can choose one of the invocations you know and replace it with another invocation that you could learn at that level.</p><p>If an eldritch invocation has prerequisites, you must meet them to learn it. You can learn the invocation at the same time that you meet its prerequisites. A level prerequisite refers to your level in this class.</p>' },
    'PACT_BOON': {
        id: 'PACT_BOON', skillType: SkillType.SKILL, level: 3, name: 'Pact Boon',
        description: '<p>At 3rd level, your otherworldly patron bestows a gift upon you for your loyal service. You gain one of the following features of your choice.</p>' },
    'MYSTIC_ARCANUM_L11': {
        id: 'MYSTIC_ARCANUM_L11', skillType: SkillType.SKILL, level: 11, name: 'Mystic Arcanum',
        description: '<p>At 11th level, your patron bestows upon you a magical secret called an arcanum. Choose one 6th-level spell from the warlock spell list as this arcanum.</p><p>You can cast your arcanum spell once without expending a spell slot. You must finish a long rest before you can do so again.</p>' },
    'MYSTIC_ARCANUM_L13': {
        id: 'MYSTIC_ARCANUM_L13', skillType: SkillType.SKILL, level: 11, name: 'Mystic Arcanum',
        description: '<p>At 13th level, your patron bestows upon you a magical secret called an arcanum. Choose one 7th-level spell from the warlock spell list as this arcanum.</p><p>You can cast your arcanum spell once without expending a spell slot. You must finish a long rest before you can do so again.</p>' },
    'MYSTIC_ARCANUM_L15': {
        id: 'MYSTIC_ARCANUM_L15', skillType: SkillType.SKILL, level: 11, name: 'Mystic Arcanum',
        description: '<p>At 15th level, your patron bestows upon you a magical secret called an arcanum. Choose one 8th-level spell from the warlock spell list as this arcanum.</p><p>You can cast your arcanum spell once without expending a spell slot. You must finish a long rest before you can do so again.</p>' },
    'ELDRITCH_MASTER': {
        id: 'ELDRITCH_MASTER', skillType: SkillType.SKILL, level: 20, name: 'Eldritch Master',
        description: '<p>At 20th level, you can draw on your inner reserve of mystical power while entreating your patron to regain expended spell slots. You can spend 1 minute entreating your patron for aid to regain all your expended spell slots from your Pact Magic feature. Once you regain spell slots with this feature, you must finish a long rest before you can do so again.</p>' },

    /** wizard skills */
    'SPELLS_WIZARD': {
        id: 'SPELLS_WIZARD', skillType: SkillType.MAGIC, level: 1, name: 'Spellcasting', school: SpellSchools.WIZARD,
        description: '<p>As a student of arcane magic, you have a spellbook containing spells that show the first glimmerings of your true power.</p><p><strong>Spellbook</strong></p><p>At 1st level, you have a spellbook containing six 1st-level wizard spells of your choice. Your spellbook is the repository of the wizard spells you know, except your cantrips, which are fixed in your mind.</p><p><strong>Preparing and Casting Spells</strong></p><p>The Wizard table shows how many spell slots you have to cast your wizard spells of 1st level and higher. To cast one of these spells, you must expend a slot of the spell’s level or higher. You regain all expended spell slots when you finish a long rest.</p><p>You prepare the list of wizard spells that are available for you to cast. To do so, choose a number of wizard spells from your spellbook equal to your Intelligence modifier + your wizard level (minimum of one spell). The spells must be of a level for which you have spell slots.</p><p>You can change your list of prepared spells when you finish a long rest. Preparing a new list of wizard spells requires time spent studying your spellbook and memorizing the incantations and gestures you must make to cast the spell: at least 1 minute per spell level for each spell on your list.</p><p><strong>Spellcasting Ability</strong></p><p>Intelligence is your spellcasting ability for your wizard spells, since you learn your spells through dedicated study and memorization. You use your Intelligence whenever a spell refers to your spellcasting ability. In addition, you use your Intelligence modifier when setting the saving throw DC for a wizard spell you cast and when making an attack roll with one.</p><p><strong>Ritual Casting</strong></p><p>You can cast a wizard spell as a ritual if that spell has the ritual tag and you have the spell in your spellbook. You don’t need to have the spell prepared.</p>' },
    'ARCANE_RECOVERY': {
        id: 'ARCANE_RECOVERY', skillType: SkillType.SKILL, level: 1, name: 'Arcane Recovery',
        description: '<p>You have learned to regain some of your magical energy by studying your spellbook. Once per day when you finish a short rest, you can choose expended spell slots to recover. The spell slots can have a combined level that is equal to or less than half your wizard level (rounded up), and none of the slots can be 6th level or higher.</p>' },
    'ARCANE_TRADITION': {
        id: 'ARCANE_TRADITION', skillType: SkillType.SKILL, level: 2, name: 'Arcane Tradition',
        description: '<p>When you reach 2nd level, you choose an arcane tradition, shaping your practice of magic through one of eight schools: Abjuration, Conjuration, Divination, Enchantment, Evocation, Illusion, Necromancy, or Transmutation. The School of Evocation is detailed at the end of the class description, and more choices are available in other sources.</p><p>Your choice grants you features at 2nd level and again at 6th, 10th, and 14th level.</p>' },
    'SPELL_MASTERY': {
        id: 'SPELL_MASTERY', skillType: SkillType.SKILL, level: 18, name: 'Spell Mastery',
        description: '<p>At 18th level, you have achieved such mastery over certain spells that you can cast them at will. Choose a 1st-level wizard spell and a 2nd-level wizard spell that are in your spellbook. You can cast those spells at their lowest level without expending a spell slot when you have them prepared. If you want to cast either spell at a higher level, you must expend a spell slot as normal.</p><p>By spending 8 hours in study, you can exchange one or both of the spells you chose for different spells of the same levels.</p>' },
    'SIGNATURE_SPELLS': {
        id: 'SIGNATURE_SPELLS', skillType: SkillType.SKILL, level: 20, name: 'Signature Spells',
        description: '<p>When you reach 20th level, you gain mastery over two powerful spells and can cast them with little effort. Choose two 3rd-level wizard spells in your spellbook as your signature spells. You always have these spells prepared, they don’t count against the number of spells you have prepared, and you can cast each of them once at 3rd level without expending a spell slot. When you do so, you can’t do so again until you finish a short or long rest.</p>' },
};
