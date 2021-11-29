import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';

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
            <h1 className="my-5 mx-auto pt-5">My Projects</h1>

            <Row xs={1} md={2} className="g-4 my-5 pb-5">
                {
                    myprojects.map(project => <Col>
                        <Card className="card-height service-card" >
                            <Card.Img variant="top" className="course-img" src={project.image} />
                            <Card.Body>
                                <Card.Text>
                                    <div className="d-flex justify-content-between text-muted">
                                        <div>{project.title}</div>
                                    </div>
                                </Card.Text>
                                <Card.Title>

                                </Card.Title>
                            </Card.Body>
                            {/* <Link to={`/services/${id}`} className="see-btn">
                            <button type="button" className="btn btn-outline-secondary ">See More</button>
                        </Link> */}
                        </Card>
                    </Col>)
                }

            </Row>

        </div>
    );
};

export default MainProjects;