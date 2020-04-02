import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Accordion, Card } from 'react-bootstrap';

const District = () => {
    const [distData, setDistData] = useState([]);
    // const [distDataIndiv, setDistDataIndiv] = useState([]);

    useEffect(() => {
        getDistData();
    }, []);

    const getDistData = async () => {
        const response = await fetch('https://api.covid19india.org/v2/state_district_wise.json');
        const DistData = await response.json();
        setDistData(DistData);
        // setDistDataIndiv(DistData.state.districtData);
        console.log(DistData);
    }

    return (
        <div className="container-dist">
            <Container fluid>
                <h3>District Data - India</h3>
                <Row>
                    {distData.map(district => (
                        <Col lg={2} xs={12}>
                            <div className="indiv-country">
                                <Accordion>
                                    <Card className="bgTrans1">
                                        <Accordion.Toggle as={Card.Header} className="bgTransp" eventKey="0">
                                            {district.state}
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="0" className="bgTrans">
                                            <Card.Body className="bgTrans1">
                                                {district.districtData.map(ind => (
                                                    <h6>{ind.district} - <span className="badge badge-warning">{ind.confirmed}</span> </h6>
                                                ))}

                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>

                                </Accordion>
                            </div>
                        </Col>
                    ))}

                </Row>
            </Container>
        </div>

    );
}

export default District;