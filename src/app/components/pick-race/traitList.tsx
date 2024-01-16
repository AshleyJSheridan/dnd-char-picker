import React from "react";

export default function TraitList({traits}) {
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

    if(traits === undefined) {
        console.log(traits)
        return '';
    }

    return (
        <section className="race-details-traits">
            <h3>Traits</h3>
            <dl className="traits-list">
                {getList(traits)}
            </dl>
        </section>
    );
}