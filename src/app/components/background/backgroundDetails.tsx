import React from "react";
import { formatMoney } from "@/app/helpers/moneyFormatter";
import Characteristics from "./characteristics";

export default function BackgroundDetails({background, setSelectedBackground}) {
    React.useEffect(() => {
        document.addEventListener("keydown", escFunction, false);

        return () => {
            document.removeEventListener("keydown", escFunction, false);
        }
    }, []);

    function escFunction(event){
        if (event.key === "Escape") {
            handleCloseModal();
        }
    }

    function handleCloseModal() {
        setSelectedBackground(null);
    }

    function next() {
        //confirmCharClass(charClass);
    }

    function getSkillProficiencies(proficiencies) {
        return proficiencies.map(proficiency => `${proficiency.name} (${proficiency.primaryAbility.id})`).join(', ');
    }

    function getEquipmentList(equipment) {
        return equipment.map(gear => gear.name).join(', ');
    }

    function getCharacteristicBlock(label, characteristics) {
        if(!label)
            return '';

        return (
            <Characteristics label={label} characteristics={characteristics}/>
        );
    }

    if(!background)
        return '';

    return (
        <div className="modal-background">
            <div className="modal">
                <div role="dialog" className="modal-dialog" aria-labelledby={'modal-heading-' + background.id}>
                    <button  
                        className="close-modal"
                        type="button"
                        aria-label="Close"
                        onClick={() => handleCloseModal()}
                    ></button>

                    <h2 id={'modal-heading-' + background.id}>Confirm Background - {background.name}</h2>

                    <button className="button-next" onClick={() => next()}>Next</button>

                    <div className={'modal-content class-' + background.name.toLowerCase()}>
                        <h3>{background.name}</h3>
                        <p className="background-description">{background.description}</p>

                        <dl className="background-proficiences-equipment">
                            <dt>Skill proficiencies</dt>
                            <dd>{getSkillProficiencies(background.proficiencies)}</dd>

                            <dt>Equipment</dt>
                            <dd>{getEquipmentList(background.equipment)}</dd>

                            <dt>Starting money</dt>
                            <dd>{formatMoney(background.startingGold)}</dd>
                        </dl>

                        <fieldset className="characteristics-block">
                            <legend>Click dice to randomly select from the options.</legend>

                            {getCharacteristicBlock(background.characterStyles?.label, background.characterStyles?.styles)}

                            {getCharacteristicBlock('Personality Trait', background.suggestedCharacteristics.personalityTraits)}
                            {getCharacteristicBlock('Ideal', background.suggestedCharacteristics.ideals)}
                            {getCharacteristicBlock('Bond', background.suggestedCharacteristics.bonds)}
                            {getCharacteristicBlock('Flaw', background.suggestedCharacteristics.flaws)}
                        </fieldset>
                    </div>

                    <button className="button-next" onClick={() => next()}>Next</button>
                </div>
            </div>
        </div>
    );
}