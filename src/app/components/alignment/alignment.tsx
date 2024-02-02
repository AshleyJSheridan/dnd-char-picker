"use client";

import { ICurrentStep } from "@/app/interfaces/iCurrentStep";
import { Alignments } from "../../enums/alignments";
import { SetStateAction } from "react";

export default function Alignment({canShow, currentStep, setCurrentStep, alignment, setAlignment}: 
    {
        canShow: boolean, 
        currentStep: ICurrentStep, 
        setCurrentStep: React.Dispatch<SetStateAction<ICurrentStep>>, 
        alignment: string, 
        setAlignment: React.Dispatch<SetStateAction<string>>
    }) {

    function handleAlignmentSelection(alignmentSelection: string) {
        setAlignment(alignmentSelection);
    }

    function getAlignments() {
        return Alignments.map(a => 
            <li key={crypto.randomUUID()} className={'alignment ' + ((alignment === a.name) ? 'active' : '')}>
                <button type="button" onClick={() => handleAlignmentSelection(a.name)}>
                    <span className="alignment-name">{a.name}</span>
                    <span className="alignment-description">{a.description}</span>
                </button>
            </li>
        );
    }

    function next() {
        setCurrentStep({
            ...currentStep,
            current: currentStep.current + 1,
            maxCompleted: Math.max(currentStep.maxCompleted, currentStep.current)
        }); 
    }

    if(!canShow)
        return '';

    return (
        <section className="alignment-selection">
            <ul className="alignment-list">
                {getAlignments()}
            </ul>
            <button className="button-next" onClick={() => next()}>Next</button>
        </section>
    );
}