"use client";

import { Backgrounds } from "@/app/enums/backgrounds";

export default function Background({canShow, charClass, background, setBackground}) {
    const backgroundSelections = Backgrounds.map(background => 
        <li key={background.id}>
            {background.name}
        </li>
    );

    if(!canShow)
        return '';

    return (
        <ul>
            {backgroundSelections}
        </ul>
    );
};
