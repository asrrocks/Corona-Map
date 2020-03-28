import React from 'react';
// import { Link } from 'react-router-dom';

const Total = ({ casesTotalsNO, deathsTotal, recovered }) => {
    return (
        <div className="totalContainer">
            <h3>Global Coronavirus Information</h3>
            <div className="indiv">
                <h6>Global</h6>
                <h4>Coronavirus Total Cases</h4>
                <h5> <span className="badge badge-warning">{casesTotalsNO}</span> </h5>
            </div>

            <div className="indiv">
                <h6>Global</h6>
                <h4>Total Deaths</h4>
                <h5> <span className="badge badge-danger">{deathsTotal}</span> </h5>
            </div>

            <div className="indiv">
                <h6>Global</h6>
                <h4>Total Recovered</h4>
                <h5> <span className="badge badge-success">{recovered}</span> </h5>
            </div>
            {/* <Link to="/map" className="map">Indian Statistics</Link> */}
        </div>

    );
}
export default Total;