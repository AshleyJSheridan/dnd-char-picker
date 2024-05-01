"use client";

import React, { SetStateAction, useState } from "react";
import { Background, Backgrounds } from "@/app/enums/backgrounds";
import BackgroundDetails from "./backgroundDetails";
import { ICurrentStep } from "@/app/interfaces/iCurrentStep";
import { PersistState } from "@/app/helpers/persistStateHelper";

export default function CharBackground({canShow, moveNextStep, setBackground}: {
    canShow: boolean,
    moveNextStep: Function,
    setBackground: React.Dispatch<SetStateAction<Background|null>>
}) {
    let [selectedBackground, setSelectedBackground] = useState<Background|null>(null);

    const backgroundSelections = Backgrounds.map(background => 
        <li 
            key={background.id}
            className="class-background"
            onClick={() => handleBackgroundSelect(background as Background)}
        >
            {background.name}
        </li>
    );

    function handleBackgroundSelect(background: Background) {
        setSelectedBackground(background);
        PersistState.save('background', background);
    }

    function getBackgroundDetailsModal() {
        if(!selectedBackground)
            return '';

        return (
            <BackgroundDetails
                background={selectedBackground}
                setSelectedBackground={setSelectedBackground}
                confirmBackground={handleConfirmBackgroundSelect}
            />
        );
    }

    function handleConfirmBackgroundSelect(background: Background): void {
        setBackground(background);
        moveNextStep();
    }

    if(!canShow)
        return '';

    return (
        <>
            <section className="background-selection">
                <ul className="background-list">
                    {backgroundSelections}
                </ul>
            </section>
            {getBackgroundDetailsModal()}
        </>
    );
};
