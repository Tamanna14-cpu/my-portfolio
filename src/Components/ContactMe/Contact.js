import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Navigation from '../Navigation/Navigation';

const Contact = () => {
    return (
        <div>

            <Row >
                <Col xs={10} md={11}>
                    <h2>contact me</h2>
                </Col>

                <Col xs={2} md={1}>

                    <Navigation></Navigation>

                </Col>
            </Row>
        </div>
    );
};

export default Contact;