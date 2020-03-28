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
        const response = await fetch('https://api.rootnet.in/covid19-in/stats/latest');
        const mapData = await response.json();
        setMapCases(mapData.data.regional);
        // console.log(mapData.data.regional);
    }

    return (
        <Container fluid>
            <Row>

                <Col xs={12} lg={7}>
                    <div className="indian">

                        <h3>Indian Statistics</h3>
                        <Table striped bordered hover variant="dark">
                            <thead>
                                <tr>
                                    <th>Sr.no</th>
                                    <th>State</th>
                                    <th>Total Cases</th>
                                    <th>Discharged</th>
                                    <th>Deaths</th>
                                </tr>
                            </thead>
                            <tbody>
                                {mapcases.map(states => (
                                    <tr>
                                        <td>{i++}</td>
                                        <td>{states.loc}</td>
                                        <td>{states.confirmedCasesIndian + states.confirmedCasesForeign}</td>
                                        <td>{states.discharged}</td>
                                        <td>{states.deaths}</td>
                                    </tr>

                                ))}

                            </tbody>

                        </Table>
                    </div>
                </Col>
                <Col xs={12} lg={5}>
                    <Contacts />
                </Col>
            </Row>
        </Container>
    )
}

export default Map;