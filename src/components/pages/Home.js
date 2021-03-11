import React from 'react'
import { Container, Row, Col, Button, CardBody, CardTitle, CardText, CardFooter, Card } from 'reactstrap'
import image1 from '../../images/P1000003-400x300.JPG'
//import kiteGif from '../../images/kites-5-1000fps.gif'
//import logo from '../../../src/logo192.png'
import crows from '../../images/crow1.gif'
import portal from '../../images/PortalInterface.png'
import yorkCourses from '../../images/yorkCourses2.png'
//import {gradient} from '../../../src/index.css'

const Home = () => {
    return(
        <Container>
            <Row className="my-5"  style={{backgroundColor: '#D6EAF8', alignItems:'center'}}>
                <Col lg="5" style={{backgroundColor: '#D6EAF8'}}>
                    <h1 className="font-weight-light">Ken Pink Multimedia</h1>
                    <p>I studied creative writing and am trained as a Technical Writer. </p>
                    <Button color="secondary">Call to Action!</Button>
                </Col>
                <Col lg="7">
                    <img src={image1} className="img-fluid rounded mb-4 mb-lg-0" alt="blue bottle" />
                </Col>
            </Row>
            <Card className="gradient">
                <CardBody>
                    <CardText><p className="text-white m-0">This call to action card is a great place to showcase some important information</p></CardText>
                </CardBody>
            </Card>
            <Row>
                <Col md="4" className="mb-5" style={{paddingTop:"10px"}}>
                    <Card>
                        <img src={yorkCourses} className="img-fluid rounded mb-4 mb-lg-0" alt="web dev course list" style={{paddingBottom:'5px'}} />
                        <CardBody>
                            <CardTitle><h2>School Portfolio</h2></CardTitle>
                            <CardBody>Some school exercises</CardBody>
                        </CardBody>
                        <CardFooter>
                            <Button color="primary" size="sm">Go to Portfolio</Button>  
                        </CardFooter>
                    </Card>
                </Col>
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
                            <CardBody>Some animated GIFs</CardBody>
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