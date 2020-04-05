import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Table } from 'react-bootstrap';
import Contacts from '../components/Contacts';


const Map = () => {


    const [mapcases, setMapCases] = useState([]);

    var i = 1;
    useEffect(() => {
        getMapData();
    }, []);

    const getMapData = async () => {
        const response = await fetch('https://api.covid19india.org/data.json');
        const mapData = await response.json();
        setMapCases(mapData.statewise.slice(1));
        // console.log(mapData.data.regional);
    }

    return (
        <Container fluid>
            <Row>

                <Col xs={12} lg={6}>
                    <div className="indian">

                        <h3>Indian Statistics</h3>
                        <Table striped bordered hover variant="dark">
                            <thead>
                                <tr>
                                    <th>State</th>
                                    <th>Cases</th>
                                    <th>Recovered</th>
                                    <th>Deaths</th>
                                </tr>
                            </thead>
                            <tbody>
                                {mapcases.map(states => (
                                    <tr>
                                        <td>{states.state}</td>
                                        <td>{states.confirmed}</td>
                                        <td>{states.recovered}</td>
                                        <td>{states.deaths}</td>
                                    </tr>

                                ))}

                            </tbody>

                        </Table>
                    </div>
                </Col>
                <Col xs={12} lg={6}>
                    <Contacts />
                </Col>
            </Row>
        </Container>
    )
}

export default Map;