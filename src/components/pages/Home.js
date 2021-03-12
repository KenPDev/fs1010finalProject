import React from 'react'
import { Container, Row, Col, Button, CardBody, CardTitle, CardText, CardFooter, Card } from 'reactstrap'
import image1 from '../../images/P1000003-400x300.JPG'
import crows from '../../images/crow1.gif'
import portal from '../../images/PortalInterface.png'

const Home = () => {
    return(
        <Container>
            <Row className="my-2"  style={{backgroundColor: 'gainsboro', paddingLeft:'120px'}}>
                <Col lg="5" style={{padding: '50px 50px', backgroundColor: '#ffffff'}}>
                    <h1 className="font-weight-light">Ken Pink</h1>
                    <h2 className="font-weight-light">Multimedia</h2>
                    <p>I studied creative writing an am a Technical Communications graduate. I have worked as a Multimedia Web Developer though I would call myself a Multmedia Web Content Developer.</p>
                  </Col>
                <Col lg="7">
                    <img src={image1} className="img-fluid rounded mb-4 mb-lg-0" alt="blue bottle" />
                </Col>
            </Row>
            <Card className="gradient">
                <CardBody>
                    <CardText><p className="text-white m-0">
                        “Do question, even the basics! You will be a fool for once! If you don't, you will be, for a lifetime..”
                        ― Himmilicious</p>
                   </CardText>
                </CardBody>
            </Card>
            <Row style={{justifyContent: 'center', alignItems: 'center', paddingBottom: '50px'}}>
                <Col md="4" className="mb-5"  style={{paddingTop:"10px"}}>
                    <Card style={{paddingTop:"10px"}}>
                    <img src={portal} className="img-fluid rounded mb-4 mb-lg-0" alt="support site landing page" style={{paddingBottom:'28px'}} />
                        <CardBody>
                            <CardTitle><h2>Work Port folio</h2></CardTitle>
                            <CardBody>A pdf with some writing examples</CardBody>
                        </CardBody>
                        <CardFooter>
                            <Button color="primary" size="sm" href="portfolioWork">Go to Portfolio</Button>
                        </CardFooter>
                    </Card>
                </Col>
                <Col md="4" className="mb-5"  style={{paddingTop:"10px"}}>
                    <Card >
                    <img src={crows} className="img-fluid rounded mb-4 mb-lg-0" alt="crows gif" />
                        <CardBody>
                            <CardTitle><h2>Creative Port folio</h2></CardTitle>
                            <CardBody>An animated GIFs (more to come)</CardBody>
                        </CardBody>
                        <CardFooter>
                            <Button color="primary" size="sm"  href="portfolioCreative">Go to Portfolio</Button>
                        </CardFooter>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Home