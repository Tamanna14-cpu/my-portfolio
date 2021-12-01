import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import Navigation from '../Navigation/Navigation';

const Projects = () => {

    const [myprojects, setMyprojects] = useState([]);

    useEffect(() => {
        async function serviceData() {
            try {
                const res = await fetch('./projects.json');
                const data = await res.json();
                setMyprojects(data);
            }
            catch (error) {
                console.log(error)
            }
        };
        serviceData();
    }, [])



    return (
        <div>
            <h1 className="my-5 text-center pt-5 font-monospace fw-bold">All of My Projects</h1>

            <Row className="g-4 my-5 pb-5">
                <Col xs={10} md={11}>
                    <Row xs={1} md={2}>
                        {
                            myprojects.map(project => <Col>
                                <Card className="m-3" >
                                    <Card.Img variant="top" className="course-img" src={project.image} />
                                    <Card.Body>

                                        <Card.Title>
                                            <div className="d-flex justify-content-between text-muted">
                                                <div>{project.title}</div>
                                            </div>
                                        </Card.Title>

                                        <Card.Text>

                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>)
                        }
                    </Row>
                </Col>

                <Col xs={2} md={1}>
                    <Navigation></Navigation>
                </Col>

            </Row>
        </div>
    );
};

export default Projects;