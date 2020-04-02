import React, { useEffect, useState, Image } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import CountryList from '../components/CountryList';
import Total from '../components/Total';
import { FaGithubSquare } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import flag from '../assets/64.png'



const Home = () => {
    const [cases, setCases] = useState([]);
    const [casesTotal, setCasesTotal] = useState([]);
    const [search, setSearch] = useState('');
    const [searchData, setSearchData] = useState([])

    useEffect(() => {
        getDataTotalCountry();
        getDataTotal();
    }, []);


    const getDataTotalCountry = async () => {
        const response = await fetch('https://corona.lmao.ninja/countries')
        const data = await response.json();
        setCases(data);
        setSearchData(data)
        // console.log(data);
    }

    const getDataTotal = async () => {
        const responseTotal = await fetch('https://corona.lmao.ninja/all')
        const dataTotal = await responseTotal.json();
        setCasesTotal(dataTotal);
        // console.log(dataTotal);
    }

    const updateSearch = e => {
        setSearch(e.target.value);
        const newData = cases.filter(item => {
            const itemData = `${item.country.toUpperCase()}`;
            const textData = e.target.value.toUpperCase();
            return itemData.indexOf(textData) > -1;
        });

        setSearchData(newData)

    }



    return (

        <div className="mainSection">
            <Container fluid>
                <Row>
                    <Col xs={12} lg={4}>
                        <div className="about">
                            <h3>About me</h3>
                            <div className="profile">
                                <h4>
                                    Anubhav Singh <img src={flag} width="40" />
                                </h4>

                                <p>
                                    Full Stack Web Developer, Alphacode

                                </p>
                                <p>
                                    Email : sinanu1998@gmail.com
                                </p>
                                <a href="https://github.com/asrrocks" target="_blank" rel="noopener noreferrer"><FaGithubSquare /></a>
                                <a href="https://www.linkedin.com/in/anubhav-singh-36983010a/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                                <h3>"STAY HOME, STAY SAFE"</h3>
                            </div>
                            <Link to="/map" className="map">Indian Statistics</Link> <br /><br />
                            <Link to="/district" className="map">District Wise Data</Link>

                        </div>
                    </Col>
                    <Col xs={12} lg={4}>

                        <Total casesTotalsNO={casesTotal.cases} deathsTotal={casesTotal.deaths} recovered={casesTotal.recovered} active={casesTotal.active} affectedCount={casesTotal.affectedCountries} />

                    </Col>
                    <Col xs={12} lg={4}>
                        <h3>Country Wise Information</h3>
                        <div className="searchBar">
                            <Form>
                                <Form.Group controlId="exampleForm.ControlInput1">
                                    <Form.Control type="text" value={search} placeholder="Enter Country Name" onChange={updateSearch} />
                                </Form.Group>

                            </Form>
                        </div>
                        <div className="country-container">

                            {searchData.map(countries => (

                                <CountryList key={countries.country} countryName={countries.country} flag={countries.countryInfo.flag} totalCases={countries.cases} casesToday={countries.todayCases} activeCases={countries.active} deaths={countries.deaths} deathsToday={countries.todayDeaths} recoveredCases={countries.recovered} criticalCases={countries.critical} />
                            ))}
                        </div>

                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Home;