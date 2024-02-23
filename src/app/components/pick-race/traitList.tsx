import { Language } from "@/app/enums/languages";
import { Trait } from "@/app/repositories/traits";
import React from "react";

export default function TraitList({traits, languages}: {traits?: Trait[], languages?: Language[]}) {
    function getList(traits: Trait[]) {
        if(!traits)
            return '';

        return traits.map(trait => 
            <React.Fragment key={crypto.randomUUID()}>
                <dt>{trait.name}</dt>
                <dd>{trait.description}</dd>
            </React.Fragment>
        );
    }

    function getLanguageBlock(languages?: Language[]) {
        if(!languages || languages.length === 0)
            return '';

        return (
            <>
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
            </>
        )
    }

    function getLanguageList(languages: Language[]) {
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

            {getLanguageBlock(languages)}
        </section>
    );
}