import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MainProjects = () => {

    const [myprojects, setMyprojects] = useState([]);

    useEffect(() => {
        async function serviceData() {
            try {
                const res = await fetch('./projects.json');
                const data = await res.json();
                setMyprojects(data.slice(0, 4));
            }
            catch (error) {
                console.log(error)
            }
        };
        serviceData();
    }, [])


    return (
        <div>
            <h1 className="my-5 text-center pt-5 font-monospace fw-bold">My Projects</h1>

            <Row xs={1} md={2} className="g-4 my-5 pb-5">
                {
                    myprojects.map(project => <Col>
                        <Card className="card-height service-card" >
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
                            <Link to={`/projects/${project.id}`}>
                                <button type="button" className="btn btn-outline-secondary ">Explore More</button>
                            </Link>
                        </Card>
                    </Col>)
                }

            </Row>

        </div>
    );
};

export default MainProjects;