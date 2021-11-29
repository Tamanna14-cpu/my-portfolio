import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Navigation from '../Navigation/Navigation';
import './Home.css';
import myImage from '../../image/bithy.png';
import MainProjects from '../MainProjects/MainProjects';


const Home = () => {
    return (
        <Row >
            <Col xs={10} md={11}>
                <Row className="margin">
                    <Col xs={6} md={8} className="my-img">
                        <img src={myImage} alt="" className="my-img mt-5  w-75" />
                    </Col>

                    <Col xs={6} md={4}>

                        <h1 className="mt-5 pt-5">- I'm Tamanna Akter.</h1>
                        <h1 className="ms-4">Web Developer</h1>
                        <h5 className="mt-5 ">I'm a Bangladeshi based front‑end developer focused on crafting, clean & user‑friendly experiences, I am passionate about building excellent software that improves the lives of those around me.</h5>

                        <div class="btn from-center">
                            <a href="https://drive.google.com/file/d/1MFPgcTTzlUDc5XVU_2DRGE8SnFM72p_n/view?usp=sharing" target="_blank">My Resume</a>
                        </div>
                    </Col>
                </Row>

                <MainProjects></MainProjects>
            </Col>

            <Col xs={2} md={1}>

                <Navigation></Navigation>

            </Col>
        </Row>
    );
};

export default Home;