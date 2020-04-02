import React from 'react'
import flag from '../assets/64.png'

const CountryList = ({ countryName, flag, totalCases, casesToday, activeCases, deaths, deathsToday, recoveredCases, criticalCases }) => {
    return (
        <div className="indiv-country">
            <h4>{countryName}&nbsp;<img src={flag} width="50" /></h4>
            <p>
                <span className="badge badge-warning bigFont" id="countryCasesTotal">Cases : {totalCases} </span> | <span className="badge badge-warning bigFont"
                    id="countryCasesToday">Today :{casesToday} </span> | <span
                        className="badge badge-warning bigFont" id="countryCasesActive">Active : {activeCases}
                </span>
            </p>
            <p><span className="badge badge-danger bigFont" id="countryDeathsTotal">Deaths : {deaths}
            </span> | <span className="badge badge-danger bigFont"
                id="countryDeathsToday">Today : {deathsToday} </span></p>
            <p><span className="badge badge-success bigFont" id="countryRecovered">Recovered : {recoveredCases}
            </span> | <span className="badge badge-light bigFont"
                id="countryCritical">Critical : {criticalCases} </span></p>
        </div>

    );
}
export default CountryList;