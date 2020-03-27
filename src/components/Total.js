import React from 'react';

const Total = ({ casesTotalsNO, deathsTotal, recovered }) => {
    return (
        <div className="totalContainer">
            <h3>Global Coronavirus Information</h3>
            <div className="indiv">
                <h6>Global</h6>
                <h3>Coronavirus Total Cases</h3>
                <h4>{casesTotalsNO}</h4>
            </div>

            <div className="indiv">
                <h6>Global</h6>
                <h3>Total Deaths</h3>
                <h4>{deathsTotal}</h4>
            </div>

            <div className="indiv">
                <h6>Global</h6>
                <h3>Total Recovered</h3>
                <h4>{recovered}</h4>
            </div>

        </div>

    );
}
export default Total;