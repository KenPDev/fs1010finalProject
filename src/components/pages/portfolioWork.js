import React from 'react'
import { Container, Row, Col, Button } from 'reactstrap'
import samplePDF from '../../images/WritingExamples.pdf'

const portfolioWork = () => {
  return (
      <Container>
      <Row className="my-5">
        <Col lg="5">
              <h1 className="font-weight-light">Technical Writing</h1>
              <p>Here are some examples of writing I did at my last job. They include three procedures (one internal and two client-facing) for using the customer support site.</p>
              <Button color="primary" href={samplePDF} target={"_blank"}>Open PDF</Button>
        </Col>
      </Row>
  </Container>
  )
}

  export default portfolioWork