import React, { useState } from 'react'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Container } from 'reactstrap'
import { NavLink as RouteLink } from 'react-router-dom'


const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => setIsOpen(!isOpen)

    return (
        //<Navbar dark color="dark" expand="md" fixed="top">
        <Navbar style={{backgroundColor: '#6c757d'}} expand="md" fixed="top">
            <Container>
            <NavbarBrand style={{backgroundColor: '#6c757d'}}href="">Example Portfolio Site</NavbarBrand>
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
                       <NavLink tag={RouteLink} to="/contact">Contact Us</NavLink>
                    </NavItem>
                    <NavItem>
                       <NavLink tag={RouteLink} to="/contact2">Contact Us</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink tag={RouteLink} to="/submissions">Submissions</NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation