export default function RaceIntro({raceName}) {
    function getRaceIntro() {
        switch(raceName) {
            case 'Dwarf':
                return <RaceIntroDwarf/>;
            case 'Hill Dwarf':
                return <RaceIntroHillDwarf/>;
            case 'Mountain Dwarf':
                return <RaceIntroMountainDwarf/>;
            case 'Elf':
                return <RaceIntroElf/>;
            case 'High Elf':
                return <RaceIntroHighElf/>;
            case 'Wood Elf':
                return <RaceIntroWoodElf/>;
            case 'Drow (Dark Elf)':
                return <RaceIntroDrow/>;
            case 'Halfling':
                return <RaceIntroHalfling/>;
            case 'Lightfoot':
                return <RaceIntroLightfootHalfling/>;
            case 'Stout':
                return <RaceIntroStoutHalfling/>;
            case 'Human':
                return <RaceIntroHuman/>;
            case 'Dragonborn':
                return <RaceIntroDragonborn/>;
            case 'Gnome':
                return <RaceIntroGnome/>;
            case 'Forest Gnome':
                return <RaceIntroForestGnome/>;
            case 'Rock Gnome':
                return <RaceIntroRockGnome/>;
            case 'Half-Elf':
                return <RaceIntroHalfElf/>;
            case 'Half-Orc':
                return <RaceIntroHalfOrc/>;
            case 'Tiefling':
                return <RaceIntroTiefling/>;
            default: return '';
        }
    }

    return (
        <section className="race-details-intro">
            <h2 className="race-intro-heading">{raceName}</h2>
            {getRaceIntro()}
        </section>
    );
}

export function RaceIntroDwarf() {
    return (
        <p>Dwarves are a hardy and industrious race, renowned for their exceptional craftsmanship in metalworking and stonecutting. Their culture is centered around clan-based societies within mountainous or subterranean realms, where strong family ties and traditions are paramount. Characteristically, dwarves are shorter and stockier than humans, often sporting long beards. They are known for their stubbornness, sense of justice, and deep-rooted sense of honor and fairness. Despite their serious nature, they also revel in grand celebrations and feasts, displaying their joyous and communal spirit.</p>
    )
}

export function RaceIntroHillDwarf() {
    return (
        <p>Hill Dwarves are a resilient subrace, known for their robust health and endurance. Slightly taller and leaner than their mountain cousins, they thrive in hill terrains, skillfully blending farming and stonework. Their societies emphasize strong family and clan bonds, with a culture rich in hospitality and storytelling. Hill Dwarves' connection to the earth and practical craftsmanship, combined with traditional dwarven strength, makes them versatile characters in D&D, adept at both survival and artisanal pursuits.</p>
    )
}

export function RaceIntroMountainDwarf() {
    return (
        <p>Mountain Dwarves are renowned for their unparalleled strength and steadfastness, epitomizing the classic dwarven virtues. These sturdy beings, dwelling in the heart of mountains, are exceptional warriors and master smiths, crafting the finest weapons and armor. Their robust build and natural resilience grant them superior physical prowess. Mountain Dwarves are deeply rooted in ancient traditions, with a culture that revolves around clan loyalty and honor. Their fortresses, carved into mountain rock, are bastions of security and craftsmanship. This subrace's blend of formidable combat skills and enduring cultural heritage makes them iconic characters in D&D, embodying the quintessential dwarf traits of bravery, skill, and tenacity.</p>
    )
}

export function RaceIntroElf() {
    return (
        <p>Elves are a mystical and elegant race, known for their grace, longevity, and affinity with nature and magic. These ethereal beings are often portrayed as tall and slender, with pointed ears and otherworldly beauty. Elves live in harmonious balance with the natural world, often residing in ancient forests or other serene environments. They are deeply connected to the arcane arts, with many elves exhibiting proficiency in magic and spellcasting. Esteemed for their wisdom and insight gained over long lifespans, elves are often viewed as guardians of ancient knowledge and lore within the world of D&D. Their culture is rich with traditions, art, music, and a deep-seated respect for the beauty and mysteries of the natural world.</p>
    )
}

export function RaceIntroHighElf() {
    return (
        <p>High Elves are known for their intellect, magical prowess, and innate grace. Tall and slender, with an air of otherworldly elegance, they excel in spellcasting, particularly in the arcane arts. High Elves have a deep connection to nature and magic, often living in ancient, mystical forests. Their long lifespans grant them a perspective that combines wisdom with a thirst for knowledge and exploration. High Elves value art, music, and lore, creating societies rich in culture and tradition. This subrace of elves is distinguished by their keen intellect and versatility, making them powerful and sophisticated characters in the realm of D&D.</p>
    )
}

export function RaceIntroWoodElf() {
    return (
        <p>Wood Elves blend the mystical charm of elves with a rugged, survivalist nature. They are known for their stealth, keen senses, and deep affinity with the natural world, often dwelling in dense forests. Slightly more robust and earthy in appearance compared to their High Elf kin, Wood Elves are skilled hunters and trackers, moving silently and swiftly through the wilderness. They possess a strong bond with nature, reflected in their druidic practices and a lifestyle that favors harmony with the natural environment. Wood Elves are characterized by their adaptability, resourcefulness, and a fierce dedication to protecting their woodland realms, making them skilled and resilient characters in D&D adventures.</p>
    )
}

export function RaceIntroDrow() {
    return (
        <p>Drow, also known as Dark Elves, are a subrace known for their dark beauty, cunning, and powerful magic. They reside in the subterranean depths of the Underdark, a stark contrast to their surface-dwelling elven kin. Drow are distinguished by their striking appearance, typically having dark skin and white or silver hair. They are often associated with stealth, espionage, and a deep mastery of both arcane and divine magic, particularly favoring spells of illusion and enchantment. Drow society is matriarchal and notoriously cutthroat, with a strong emphasis on the worship of their deity, Lolth. These elves are intriguing characters in D&D, offering a blend of enigmatic allure, magical prowess, and complex societal dynamics.</p>
    )
}

export function RaceIntroHalfling() {
    return (
        <p>Halflings are a small, nimble race known for their cheerful disposition and love of comfort. Standing around three feet tall, they are adept at blending into their surroundings, making them skilled in stealth and agility. Halflings prefer peaceful, pastoral lives in rural settings, where they cultivate strong community bonds and enjoy simple pleasures like good food and cozy homes. Despite their size, they are brave and can be surprisingly resourceful in challenging situations. Their innate luck and curious nature often make them excellent adventurers. Halflings bring a light-hearted and resilient spirit to D&D, embodying a blend of stealth, community, and unassuming courage.</p>
    )
}

export function RaceIntroStoutHalfling() {
    return (
        <p>Stout Halflings are a subrace that combines typical halfling traits with remarkable resilience and hardiness. Slightly more robust than their Lightfoot counterparts, Stout Halflings are known for their toughness and durability, often likened to dwarves in their sturdiness. They possess a natural resistance to toxins and poisons, reflecting their adaptability and survival skills. Despite their hardy nature, they still maintain the classic halfling love for comfort, community, and peace. Stout Halflings excel in roles that require both physical endurance and the traditional halfling agility and stealth, making them uniquely equipped for a variety of challenges in D&D adventures. Their blend of resilience, sociability, and traditional halfling charm makes them well-rounded and versatile characters.
        </p>
    )
}

export function RaceIntroLightfootHalfling() {
    return (
        <p>Lightfoot Halflings are known for their stealthy and nimble nature, embodying the quintessential characteristics of the halfling race with added agility and discretion. They are smaller and lighter than their kin, making them particularly adept at moving quietly and remaining unseen. Lightfoot Halflings have a natural inclination towards affability and charm, often using their social skills to navigate through various situations. They cherish community and comfort but also possess a strong sense of wanderlust, making them well-suited for adventure. Their innate ability to hide and blend into their surroundings, combined with their charismatic demeanor, makes Lightfoot Halflings versatile and endearing characters in D&D campaigns.</p>
    )
}

export function RaceIntroHuman() {
    return (
        <p>Humans are the most versatile and diverse race, known for their adaptability, ambition, and drive. They come in a wide range of appearances, cultures, and beliefs, reflecting the broad spectrum of human diversity. This flexibility allows them to excel in a variety of roles, from warriors and mages to merchants and diplomats. Humans have shorter lifespans compared to other races, which often instills in them a sense of urgency and a desire to achieve greatness. Their societies are characterized by rapid growth and change, leading to a dynamic range of civilizations and histories. In D&D campaigns, humans are celebrated for their ability to adapt and thrive in almost any environment, making them a popular choice for players who value flexibility and the opportunity to craft a unique character narrative.</p>
    )
}

export function RaceIntroDragonborn() {
    return (
        <p>Dragonborn are a proud and powerful race, known for their draconic heritage that manifests in their physical appearance and abilities. They possess a distinct, imposing presence with scales covering their bodies, a dragon-like head, and a strong, muscular build. Dragonborn are often associated with a breath weapon and a natural resistance to a type of damage, both linked to their draconic ancestry. Their culture is steeped in honor and tradition, with a strong emphasis on personal excellence and achieving greatness. Dragonborn communities value loyalty, strength, and the ability to protect and uplift one another. In D&D campaigns, they are renowned for their combat prowess and charismatic leadership, making them formidable warriors or spellcasters and respected figures in any adventuring party.</p>
    )
}

export function RaceIntroGnome() {
    return (
        <p>Gnomes are small, inventive, and curious beings, known for their vibrant personalities and intellectual pursuits. Standing just over 3 feet tall on average, they are distinguished by their diminutive stature and whimsical, often eccentric, appearance. Gnomes are natural tinkerers and inventors, with a deep affinity for magic, particularly illusions. They have a strong sense of wonder and are driven by a desire to explore, understand, and innovate. Gnomes live in tight-knit communities where they value humor, ingenuity, and the sharing of knowledge. Their playful nature and intellectual curiosity make them adept at problem-solving and magical experimentation. In D&D campaigns, gnomes are often chosen for their cleverness, creativity, and magical abilities, bringing a unique blend of whimsy and intellect to any adventure.</p>
    )
}

export function RaceIntroForestGnome() {
    return (
        <p>Forest Gnomes are a subrace known for their deep connection with nature and remarkable stealth. Smaller and even more elusive than their gnome kin, they possess innate magical abilities related to the natural world, like speaking with small animals and using illusion to camouflage themselves. These gnomes are typically shy, preferring the tranquility of forest environments where they can live in harmony with nature. Their communities are often hidden and integrated within the natural landscape, reflecting their desire for peace and privacy. Forest Gnomes have a keen intellect and a curiosity about the world around them, which, combined with their magical affinity and stealth, makes them excellent scouts and allies to creatures of the forest. In D&D, they bring a unique blend of subtlety, magic, and a deep understanding of the natural world to the adventuring party.</p>
    )
}

export function RaceIntroRockGnome() {
    return (
        <p>Rock Gnomes are a subrace distinguished by their remarkable inventiveness and mechanical aptitude. These gnomes are especially skilled in the crafting of intricate devices and contraptions, often integrating magic and technology. Slightly sturdier than their Forest Gnome counterparts, Rock Gnomes have a keen intellect and a natural knack for engineering and alchemy. They are curious and resourceful, always eager to explore how things work and to apply their knowledge in practical ways. Their communities usually revolve around workshops and laboratories, bustling with creative energy and innovation. In D&D campaigns, Rock Gnomes are valued for their exceptional crafting skills, ability to create useful gadgets, and their clever problem-solving, making them versatile and indispensable members of any adventuring party.</p>
    )
}

export function RaceIntroHalfElf() {
    return (
        <p>Half-Elves are a blend of human and elven heritage, combining the best traits of both races. They inherit the grace and longevity of elves along with the adaptability and diversity of humans. This unique mix often results in individuals who are charismatic, socially adept, and naturally inclined towards diplomacy. Half-Elves usually possess a blend of physical features from both races, such as the pointed ears of elves and the varied height and build of humans. They often find themselves bridging different cultures, understanding both the refined, artistic nature of elves and the ambitious, dynamic spirit of humans. In D&D campaigns, Half-Elves are celebrated for their versatility, fitting into a wide range of roles and social situations, making them highly adaptable and relatable characters for players.</p>
    )
}

export function RaceIntroHalfOrc() {
    return (
        <p>Half-Orcs combine the formidable strength of orcs with the versatility of humans, creating a race known for their physical prowess and tenacity. They often inherit the orcish traits of prominent jaws, tusk-like teeth, and a robust build, paired with the adaptability and varied features of humans. This blend results in individuals who are naturally suited for combat, excelling as fierce warriors or tenacious adventurers. Despite facing prejudice in some societies due to their intimidating appearance and orcish heritage, Half-Orcs are known for their loyalty and a surprising capacity for compassion. They possess a raw determination and resilience that can inspire those around them. In D&D campaigns, Half-Orcs are valued for their strength, endurance, and the unique perspective they bring as characters straddling two worlds.</p>
    )
}

export function RaceIntroTiefling() {
    return (
        <p>Tieflings are a race marked by their infernal heritage, which manifests in distinctive features like horns, tails, and often unusual skin tones. This lineage traces back to a pact made generations ago, imbuing them with an inherent link to the infernal. Tieflings often face prejudice and mistrust due to their demonic appearance, which leads many to develop a strong, independent spirit and a resilience against adversity. They are naturally inclined towards magic, particularly spells that manipulate fire or darkness. Tieflings are charismatic and intelligent, with a natural aptitude for deception and persuasion. In D&D campaigns, they are intriguing characters, often chosen for their unique abilities, mysterious background, and the dynamic role-playing opportunities their complex heritage provides.</p>
    )
}

