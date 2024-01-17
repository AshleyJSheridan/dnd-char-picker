import React from "react";

export default function TraitList({traits, languages}) {
    function getList(traits) {
        if(!traits)
            return '';

        return traits.map(trait => 
            <React.Fragment key={crypto.randomUUID()}>
                <dt>{trait.name}</dt>
                <dd>{trait.description}</dd>
            </React.Fragment>
        );
    }

    function getLanguageList(languages) {
        if(!languages)
            return '';

        return languages.map(language =>
            <tr key={crypto.randomUUID()}>
                <td>{language.name}</td>
                <td>{language.typicalSpeakers}</td>
                <td>{language.script}</td>
            </tr>
        );
    }

    if(traits === undefined) {
        return '';
    }

    return (
        <section className="race-details-traits">
            <h3>Traits</h3>
            <dl className="traits-list">
                {getList(traits)}
            </dl>

            <h3>Languages</h3>
            <table className="traits-list">
                <thead>
                    <tr>
                        <th>Language</th><th>Typical Speakers</th><th>Script</th>
                    </tr>
                </thead>
                <tbody>
                    {getLanguageList(languages)}
                </tbody>
            </table>
        </section>
    );
}