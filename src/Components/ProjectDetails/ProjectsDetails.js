import React, { useEffect, useState } from 'react';
import { Card, Carousel, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import Navigation from '../Navigation/Navigation';


const ProjectsDetails = () => {

    let params = useParams();
    console.log(params.id);


    const [serviceDetails, setServiceDetails] = useState([]);

    useEffect(() => {
        async function callApi() {
            let res = await fetch('../projects.json');
            res = await res.json();
            res = await res.find(serviceDetails => serviceDetails.id === params.id)
            setServiceDetails(res)
            // console.log('serviceDetails', serviceDetails);
        }
        callApi();
    }, [])

    const { title, description, image1, image2, image3, live, client } = serviceDetails;


    return (
        <Container>
            <Row className="g-4 mt-4 d-flex justify-content-between">

                <Col xs={10} md={9}>
                    <Card className="card-height">
                        <Carousel className="pt-4">
                            <Carousel.Item>
                                <img className="d-block w-100" src={image1} alt="" />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className="d-block w-100" src={image2} alt="" />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className="d-block w-100" src={image3} alt="" />
                            </Carousel.Item>

                        </Carousel>
                        <Card.Body>
                            <Card.Title>{title}</Card.Title>
                            <Card.Text>
                                <div>{description}</div>

                            </Card.Text>
                            <a href={live} target="blank" className="me-4">Live Webite</a>

                            <a href={client} target="blank" className="me-4">Frontend Code</a>

                            {serviceDetails?.server && <a href={serviceDetails.server} target="blank" >Backend Code</a>}

                        </Card.Body>
                    </Card>
                </Col>

                <Col xs={2} md={2}>
                    <Navigation></Navigation>
                </Col>
            </Row>
        </Container>
    );
};

export default ProjectsDetails;