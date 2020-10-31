/* eslint-disable react/jsx-no-undef */
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavLink } from 'react-bootstrap';
//import { FiMenu } from 'react-icons/fi'

import './Nav.css'
import { Link } from 'react-router-dom'



function Navbars() {
  return (



















 <Navbar bg="light"  expand="lg" variant="danger" className='fixed-top' >







ouse</p>


    <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
  
    <NavLink componentClass={Link} href="/" to="/">Home</NavLink>
  <NavLink componentClass={Link} href="/about" to="/about">About</NavLink>
  <NavLink componentClass={Link} href="/give" to="/give">Give</NavLink>
  <NavLink componentClass={Link} href="/connect" to="/connect">Connect</NavLink>
  <NavLink componentClass={Link} href="/contact" to="/contactus">Contact Us</NavLink>
  
  
   
    </Nav>


  
  </Navbar.Collapse>
</Navbar>




<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
<Navbar.Brand className=''>
 <Link to="/">
   <img
     src="/Pictures/navbar2.jpg"
     alt="Third slide"
     className="Navbarimage" />
 </Link>
 <p className='firetext'>Fire Prayer h
</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
    
    
    
    
    
    
    
    
    
    </Nav>
    <Nav>
      <Nav.Link href="#deets">More deets</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Dank memes
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>


  )
}



export default Navbars