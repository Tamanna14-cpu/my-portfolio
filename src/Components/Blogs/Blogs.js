import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Navigation from '../Navigation/Navigation';

const Blogs = () => {
    return (
        <Row >
            <Col xs={10} md={11}>
                <h3>blogs are coming soon</h3>
            </Col>

            <Col xs={2} md={1}>
                <Navigation></Navigation>
            </Col>
        </Row>

    );
};

export default Blogs;