import React, { useState } from 'react'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Container } from 'reactstrap'
import { NavLink as RouteLink } from 'react-router-dom'


const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => setIsOpen(!isOpen)

    return (
        <Navbar style={{backgroundColor: 'lightsteelblue'}} expand="md" fixed="top">
            <Container>
            <NavbarBrand style={{backgroundColor: 'lightsteelblue'}}href="">Example Portfolio Site</NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink tag={RouteLink} to="/">Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink tag={RouteLink} to="/about">About Me</NavLink>
                    </NavItem>
                    <NavItem>
                       <NavLink tag={RouteLink} to="/contact">Contact Me</NavLink>
                    </NavItem>
                    <NavItem>
                       <NavLink tag={RouteLink} to="/login">Login</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink tag={RouteLink} to="/listings">Submissions</NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation