import React from 'react'
import { Container, Row, Col, Button } from 'reactstrap'
import crows from '../../images/crow1.gif'
import seagull from '../../images/seagull_4.gif'


const portfolioCreative = () => {
  return (
      <Container>
      <Row className="my-5">

      <img src={seagull} className="img-fluid rounded mb-4 mb-lg-0" alt="seagull gif" style={{height:'200px'}}/>
      </Row>

  </Container>
  )
}

  export default portfolioCreative