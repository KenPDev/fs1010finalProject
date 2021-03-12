import React from 'react'
import { Container, Row } from 'reactstrap'
import crows from '../../images/crow1.gif'

const portfolioCreative = () => {
  return (
      <Container>
      <Row className="my-7">
      <img src={crows} className="img-fluid rounded mb-4 mb-lg-0" alt="seagull gif" style={{height:'700px'}}/>
      </Row>

  </Container>
  )
}

  export default portfolioCreative