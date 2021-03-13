import React from 'react'
import { Container, Row, Col, Button } from 'reactstrap'
import kiteGif from '../../images/kites-5-1000fps.gif'


const About = () => {
    return (
        <Container>
            <Row className="my-5">
                <Col lg="7">
                    <img src={kiteGif} className="img-fluid rounded mb-4 mb-lg-0" alt="blue bottle" />
                </Col>
                <Col lg="5">
                    <h1 className="font-weight-light">About Me</h1>
                    <p>I am taking Full Stack Web Development to build on the skills I already have to help me continue working in an industry that I really enjoy. </p>
                    <p>I am a creative person more than a technical one but am working on it.</p>
                    <Button color="primary" href="/contact">Contact Me</Button>
                </Col>
            </Row>
        </Container>
    )
}

export default About