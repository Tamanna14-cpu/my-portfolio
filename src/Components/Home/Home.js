import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Navigation from '../Navigation/Navigation';
import './Home.css';
import myImage from '../../image/tamanna.png';
import MainProjects from '../MainProjects/MainProjects';


const Home = () => {
    return (
        <Row >
            <Col xs={10} md={11}>
                <Row className="margin">
                    <Col md={8} className="my-img">
                        <img src={myImage} alt="" className="my-img mt-5  w-75" />
                    </Col>

                    <Col md={4}>

                        <div className="left-align">
                            <h1 className="mt-5 pt-5 fw-bold">- I'm Tamanna Akter.</h1>
                            <h1 className="ms-4">React Developer</h1>
                            <h5 className="mt-5 ">I'm a front‑end developer focused on crafting clean & user‑friendly experiences. I am passionate about building excellent software that improves the lives of those around me. I've completed 20+ projects based on react.js with a good UI sense.
                                <br />
                                <br />
                                🌼love to listening music, read books, travelling & recite poems.
                            </h5>

                            <div className="d-flex justify-content-evenly my-3">
                                <h5 className="bg-gray p-2">react.js</h5>
                                <h5 className="bg-gray p-2">node.js</h5>
                                <h5 className="bg-gray p-2">express.js</h5>
                                <h5 className="bg-gray p-2">mongodb</h5>
                            </div>


                        </div>

                        <div class="buton from-center">
                            <a href="https://drive.google.com/uc?export=download&id=1MFPgcTTzlUDc5XVU_2DRGE8SnFM72p_n">
                                <i class="far fa-file me-2"></i>My Resume</a>
                        </div>
                    </Col>
                </Row>
            </Col>

            <Col xs={2} md={1}>
                <Navigation></Navigation>
            </Col>

            <MainProjects></MainProjects>
        </Row>
    );
};

export default Home;