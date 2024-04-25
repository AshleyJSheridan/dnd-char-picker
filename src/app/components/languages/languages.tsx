import { Language, Languages } from "@/app/enums/languages";
import { SkillType } from "@/app/enums/skillType";
import { TraitType } from "@/app/enums/traitTypes";
import { PersistState } from "@/app/helpers/persistStateHelper";
import { ICurrentStep } from "@/app/interfaces/iCurrentStep";
import { CharClass } from "@/app/repositories/charClasses";
import { Race } from "@/app/repositories/races";
import React, { useState } from "react";
import { SetStateAction } from "react";

export default function CharLanguages({canShow, currentStep, setCurrentStep, race, charClass, setLanguages}: {
    canShow: boolean,
    currentStep: ICurrentStep, 
    setCurrentStep: React.Dispatch<SetStateAction<ICurrentStep>>,
    race: Race | null,
    charClass: CharClass | null,
    setLanguages: React.Dispatch<SetStateAction<string[]>>,
}) {
    const [selectedLanguages, setSelectedLanguages] = useState({});
    const [charLanguageTotal, setCharLanguageTotal] = useState(0);

    if(canShow && race && charClass) {
        initialiseSelectedLanguages(race, charClass);
        initialiseAvailableCount(race, charClass);
    }

    function next() {
        if(getSelectedCount() !== charLanguageTotal)
            return;

        const langIds = Object.entries(selectedLanguages).filter(([lang, details]) => {
            return details.selected;
        }).map(([lang, {}]) => {
            return lang;
        });

        setLanguages(langIds);
        setCurrentStep({
            ...currentStep,
            current: currentStep.current + 1,
            maxCompleted: Math.max(currentStep.maxCompleted, currentStep.current)
        });
        PersistState.save('languages', langIds);
    }

    function initialiseAvailableCount(race: Race, charClass: CharClass): void {
        if(charLanguageTotal > 0)
            return;

        let count = 0;
        count += race.languages.length ?? 0;
        count += race.traits.filter(trait => trait.type === TraitType.LANGUAGE).length ?? 0;
        count += race.subrace?.traits.filter(trait => trait.type === TraitType.ABILITY_INCREASE).length ?? 0;

        count += charClass.classSkills.filter(skill => skill.skillType === SkillType.LANGUAGE).length ?? 0;

        setCharLanguageTotal(count);
    }

    function getSelectedCount(): number {
        return Object.entries(selectedLanguages).filter(([lang, details]) => {
            return details.selected;
        }).length;
    }

    function initialiseSelectedLanguages(race: Race, charClass: CharClass): void {
        if(Object.keys(selectedLanguages).length > 0)
            return;

        // first, default all languages to unselected and non-readonly
        let newSelectedLanguages = {...selectedLanguages};
        Object.keys(Languages).forEach(lang => {
            newSelectedLanguages[lang] = { selected: false, readonly: false };
        })

        // update racial languages
        race.languages.map(lang => {
            newSelectedLanguages[lang.id] = { selected: true, readonly: true };
        });

        // update class-specific languages
        charClass.classSkills.filter((skill) => skill.skillType === SkillType.LANGUAGE).map(lang => {
            newSelectedLanguages[lang.id] = { selected: true, readonly: true };
        });

        setSelectedLanguages(newSelectedLanguages);
    }

    function handleLanguageUpdate(details: any) {
        const eventTarget: EventTarget = details.target;
        const languageId: string = details.languageId;

        if(eventTarget instanceof HTMLInputElement) {
            let selectedLanguage = selectedLanguages[languageId];

            // language is fixed by race or class, do nothing
            if(selectedLanguage.readonly)
                return;

            // todo add check for total selected

            let updatedLanguages = {...selectedLanguages};

            if(updatedLanguages[languageId].selected) {
                // de-select
                updatedLanguages[languageId].selected = false;
            } else {
                // select
                if(getSelectedCount() < charLanguageTotal) {
                    updatedLanguages[languageId].selected = true;
                }
            }

            setSelectedLanguages(updatedLanguages);
        }
    }

    function getLanguages(race: Race | null, charClass: CharClass | null) {
        // fix for race condition where languages haven't been initialised
        if(Object.keys(selectedLanguages).length === 0)
            return '';

        return Object.entries(Languages).map(([lang, {}]) => {
            const language: Language = Languages[lang];
            const selectedLanguage = selectedLanguages[lang];

            if(language.limitedAccess === true && selectedLanguage.selected === false) {
                return;
            }

            return (
                <React.Fragment key={language.id}>
                    <li>
                        <div className="checkbox">
                            <input
                                type="checkbox"
                                name="selected-skill" 
                                id={"selected-skill-" + language.id}
                                checked={selectedLanguage.selected}
                                readOnly={selectedLanguage.readonly}
                                onChange={event => handleLanguageUpdate({target: event.target, languageId: language.id})}
                            />
                            <label htmlFor={"selected-skill-" + language.id}>
                                {language.name}

                                <dl className="language-attributes">
                                    <dt>Typical speakers</dt><dd>{language.typicalSpeakers}</dd>
                                    <dt>Script</dt><dd>{language.script}</dd>
                                </dl>    
                            </label>
                            
                        </div>
                    </li>
                </React.Fragment>
            )
        });
    }

    if(!canShow)
        return '';

    return (
        <section className="languages-selection">
            <h2>Languages</h2>
            <p>Selected: {getSelectedCount()} of {charLanguageTotal} languages</p>

            <button className="button-next" onClick={() => next()}>Next</button>

            <ul className="languages-list">
                {getLanguages(race, charClass)}
            </ul>

            <button className="button-next" onClick={() => next()}>Next</button>
        </section>
    )
}