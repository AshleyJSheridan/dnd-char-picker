"use client";

export default function Gender({canShow, gender, setGender, currentStep, setCurrentStep}) {
    function handleGenderSelection(genderSelection) {
        setGender(genderSelection);
    }

    function next() {
        if(gender > 0) {
            setCurrentStep({
                ...currentStep,
                current: currentStep.current + 1,
                maxCompleted: Math.max(currentStep.maxCompleted, currentStep.current)
            }); 
        }
    }

    if(!canShow)
        return '';

    return (
        <>
            <section className="gender-selection">
                <ul>
                    <li className={'gender-male ' + ((gender === 1) ? 'active' : '')}>
                        <button onClick={() => handleGenderSelection(1)}>
                            <span className="gender-symbol"></span>
                            Male
                        </button>
                    </li>
                    <li className={'gender-female ' + ((gender === 2) ? 'active' : '')}>
                        <button onClick={() => handleGenderSelection(2)}>
                            <span className="gender-symbol"></span>
                            Female
                        </button>
                    </li>
                </ul>
            </section>
            <button className="button-next" onClick={() => next()} disabled={gender === 0}>Next</button>
        </>
    );
}
