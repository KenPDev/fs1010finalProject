import React from 'react'
import { Container } from 'reactstrap'


const Footer = () => {
    return(
    <footer className="py-4 bg-primary" style={{position: "fixed", bottom:0, width: '100%'}}>
        <Container>
            <p className="m-0 text-center" style={{color:'#ffffff'}}>Copyright &copy; Ken Pink 2021</p>
        </Container>
    </footer>
  )
}

export default Footer