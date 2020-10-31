/* eslint-disable react/jsx-no-undef */
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavLink } from 'react-bootstrap';
//import { FiMenu } from 'react-icons/fi'

import './Nav.css'
import { Link } from 'react-router-dom'



function Navbars() {
  return (



















 <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">Link</Nav.Link>
      <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>


  
  </Navbar.Collapse>
</Navbar>
    <>
      <Navbar   >
        <Navbar.Brand className=''>
          <Link to="/">
            <img
              src="/Pictures/navbar2.jpg"
              alt="Third slide"
              className="Navbarimage" />
          </Link>
          <p className='firetext'>Fire Prayer house</p>
        </Navbar.Brand>
        
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="justify-content-center ">

          <NavLink componentClass={Link} href="/" to="/">Home</NavLink>
          <NavLink componentClass={Link} href="/about" to="/about">About</NavLink>
          <NavLink componentClass={Link} href="/give" to="/give">Give</NavLink>
          <NavLink componentClass={Link} href="/connect" to="/connect">Connect</NavLink>
          <NavLink componentClass={Link} href="/contact" to="/contactus">Contact Us</NavLink>

        </Nav>
        </Navbar.Collapse>

      </Navbar>


    </>


  )
}



export default Navbars