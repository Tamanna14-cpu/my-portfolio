import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Loading from '../Loading/Loading';

const MainProjects = () => {

    const [myprojects, setMyprojects] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function serviceData() {
            try {
                const res = await fetch('./projects.json');
                const data = await res.json();
                setMyprojects(data.slice(0, 4));
                setIsLoading(false);
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
            {
                isLoading ?

                    <Loading></Loading>

                    :

                    <Row xs={1} md={2} className="g-4 my-5 pb-5">
                        {
                            myprojects.map(project => <Col>
                                <Card className="card-height service-card" >
                                    <Card.Img variant="top" className="course-img" src={project.image} />
                                    <Card.Body>

                                        <Card.Title>
                                            <div className="d-flex justify-content-between">
                                                <div>{project.title}</div>
                                            </div>
                                        </Card.Title>

                                        <Card.Text>
                                            <div>{project.description}</div>
                                        </Card.Text>

                                        <a href={project.live} target="blank" className="me-4">Live Webite</a>

                                        <a href={project.client} target="blank" className="me-4">Frontend Code</a>

                                        {project?.server && <a href={project.server} target="blank" >Backend Code</a>}

                                    </Card.Body>

                                    <Link to={`/projects/${project.id}`} className="ms-3 mb-3">
                                        <button className="btn btn-outline-secondary">Explore More</button>
                                    </Link>
                                </Card>
                            </Col>)
                        }

                    </Row>
            }

        </div>
    );
};

export default MainProjects;