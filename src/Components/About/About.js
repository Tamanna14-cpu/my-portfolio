import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Navigation from '../Navigation/Navigation';
import myImage from '../../image/tamanna.png';

const About = () => {
    return (
        <Row>
            <Col xs={10} md={11}>
                <img src={myImage} alt="" className="my-img mt-5  w-50" />

                <h1 className="mt-5  fw-bold">- I'm Tamanna Akter.</h1>
                <h1 className="ms-4">React Developer</h1>
                <h5 className="mt-5 ">I'm a front‑end developer focused on crafting clean & user‑friendly experiences. I am passionate about building excellent software that improves the lives of those around me. I've completed 20+ projects based on react.js with a good UI sense.
                    <br />
                    <br />
                    🌼love to listening music, read books, travelling & recite poems.
                </h5>

                <div className="d-flex  my-3">
                    <h5 className="bg-gray p-2 me-2">React</h5>
                    <h5 className="bg-gray p-2 me-2">Node.js</h5>
                    <h5 className="bg-gray p-2 me-2">Express.js</h5>
                    <h5 className="bg-gray p-2 me-2">MongoDB</h5>
                </div>
            </Col>

            <Col xs={2} md={1}>
                <Navigation></Navigation>
            </Col>

        </Row>
    );
};

export default About;