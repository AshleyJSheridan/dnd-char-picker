"use client";

import React, { SetStateAction, useState } from "react";
import { Background, Backgrounds } from "@/app/enums/backgrounds";
import BackgroundDetails from "./backgroundDetails";

export default function Background({canShow, background, setBackground}: {
    canShow: boolean, background: Background, setBackground: React.Dispatch<SetStateAction<Background|null>>
}) {
    let [selectedBackground, setSelectedBackground] = useState(null);

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
    }

    function getBackgroundDetailsModal() {
        if(!selectedBackground)
            return '';

        return (
            <BackgroundDetails
                background={selectedBackground}
                setSelectedBackground={setSelectedBackground}
            />
        );
    }

    function handleConfirmBackgroundSelect(background) {

        //setBackground(background);
        /*setCurrentStep({
            ...currentStep,
            current: currentStep.current + 1,
            maxCompleted: Math.max(currentStep.maxCompleted, currentStep.current)
        });*/
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
