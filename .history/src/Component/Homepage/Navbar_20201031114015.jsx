/* eslint-disable react/jsx-no-undef */
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavLink } from 'react-bootstrap';
//import { FiMenu } from 'react-icons/fi'

import './Nav.css'
import { Link } from 'react-router-dom'



function Navbars() {
  return (



















 <Navbarbg="light" collapseOnSelect expand="sm" variant="danger" className='fixed-top' >
 <Navbar.Brand className=''>
 <Link to="/">
   <img
     src="/Pictures/navbar2.jpg"
     alt="Third slide"
     className="Navbarimage" />
 </Link>
 <p className='firetext'>Fire Prayer house</p>
</Navbar.Brand>

    <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
  
  
  
  
  
  
  
  
      
    </Nav>


  
  </Navbar.Collapse>
</Navbar>
    <>
      <Navbar   >
       
        
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="justify-content-center ">

        
        
        
        
        

        </Nav>
        </Navbar.Collapse>

      </Navbar>


    </>


  )
}



export default Navbars