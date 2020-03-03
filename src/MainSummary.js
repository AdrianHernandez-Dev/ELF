import React from 'react';
import Total from './Total'
import Summary from './Summary'


function MainSummary(props) {
    return (
        <section className="main__summary" role="region">
            <h3>NEW GREENLEAF 2018</h3>

            {Object.keys(props.selected)
                .map((key, index, title) =>
                <Summary 
                    key={key}
                    index={index}
                    name={props.selected[key][0]}
                    title={Object.keys(props.selected)[index]}
                    cost={props.selected[key][1]}
                    selectedParts={props.selected}
                />
            )}
            <Total 
                total={props.total}
            />
        </section>
    )
}

export default MainSummary;