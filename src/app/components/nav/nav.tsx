"use client";

import { ICurrentStep } from "@/app/interfaces/iCurrentStep";
import { NavItems } from "../../enums/navItems";
import { SetStateAction } from "react";

export default function Nav({currentStep, setCurrentStep}: {
    currentStep: ICurrentStep, setCurrentStep: React.Dispatch<SetStateAction<ICurrentStep>>
}) {
    const navContent = NavItems.map(nav =>
        <li key={nav.id} className={(currentStep.current === nav.id) ? 'active' : ''}>
            <button type="button" onClick={() => jumpToCharSection(nav.id)}>
                {nav.name}
            </button>
        </li>
    );

    function jumpToCharSection(section: number) {
        if(section === currentStep.current || section > (currentStep.maxCompleted + 1))
            return null;

        setCurrentStep({
            ...currentStep,
            current: section
        });
    }

    return (
        <nav className="main-nav">
            <ul>
                {navContent}
            </ul>
        </nav>
    )
}