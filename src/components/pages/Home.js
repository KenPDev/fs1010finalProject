import React from 'react'
import { Container, Row, Col, Button, CardBody, CardTitle, CardText, CardFooter, Card } from 'reactstrap'
import image1 from './P1000003.JPG'
const Home = () => {
    return(
        <Container>
            <Row className="my-5">
                <Col lg="7">
<img src={image1} className="img-fluid rounded mb-4 mb-lg-0" alt="blue bottle" />
                </Col>
                <Col lg="5">
                    <h1 className="font-weight-light">Ken Pink Multimedia</h1>
                    <p>I studied creative writing and am trained as a Technical Writer. I like videography and video editing, photography and graphics editing and am a musician. I am interested in creating multimedia web content. At my last job I was hired as a Multimedia Web Developer and managed a technical support knowledge base.</p>



                    <Button color="primary">Call to Action!</Button>
                </Col>
            </Row>
            <Card className="text-white bg-secondary my-5 py-4 text-center">
                <CardBody>
                    <CardText><p className="text-white m-0">This call to action card is a great place to showcase some important information or display a clever tagline!</p></CardText>
                </CardBody>
            </Card>
            <Row>
                <Col md="4" className="mb-5">
                    <Card>
                        <CardBody>
                            <CardTitle><h2>Card One</h2></CardTitle>
                            <CardBody>Some text</CardBody>
                        </CardBody>
                        <CardFooter>
                            <Button color="primary" size="sm">CTA</Button>
                        </CardFooter>
                    </Card>
                </Col>
                <Col md="4" className="mb-5">
                    <Card>
                        <CardBody>
                            <CardTitle><h2>Card One</h2></CardTitle>
                            <CardBody>Some text</CardBody>
                        </CardBody>
                        <CardFooter>
                            <Button color="primary" size="sm">CTA</Button>
                        </CardFooter>
                    </Card>
                </Col>
                <Col md="4" className="mb-5">
                    <Card>
                        <CardBody>
                            <CardTitle><h2>Card One</h2></CardTitle>
                            <CardBody>Some text</CardBody>
                        </CardBody>
                        <CardFooter>
                            <Button color="primary" size="sm">CTA</Button>
                        </CardFooter>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Home