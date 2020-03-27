import React from 'react'

const CountryList = ({ countryName, totalCases, casesToday, activeCases, deaths, deathsToday, recoveredCases, criticalCases }) => {
    return (
        <div className="indiv-country">
            <h2>{countryName}</h2>
            <p>
                <span className="badge badge-secondary bigFont" id="countryCasesTotal">Cases : {totalCases} </span> | <span className="badge badge-secondary bigFont"
                    id="countryCasesToday">Today :{casesToday} </span> | <span
                        className="badge badge-secondary bigFont" id="countryCasesActive">Active : {activeCases}
                </span>
            </p>
            <p><span className="badge badge-secondary bigFont" id="countryDeathsTotal">Deaths : {deaths}
            </span> | <span className="badge badge-secondary bigFont"
                id="countryDeathsToday">Today : {deathsToday} </span></p>
            <p><span className="badge badge-secondary bigFont" id="countryRecovered">Recovered : {recoveredCases}
            </span> | <span className="badge badge-secondary bigFont"
                id="countryCritical">Critical : {criticalCases} </span></p>
        </div>

    );
}
export default CountryList;