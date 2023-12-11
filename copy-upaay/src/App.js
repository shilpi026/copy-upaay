// src/App.js

import React from 'react'
import './App.css'; // You can create this file for additional styl


function App() {
  return (
    <div className="App">
      <Navbar />
      {/* Your main content goes here */}
    </div>
  );
}


function Navbar() {
  
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="https://upaay.org.in/assets/images/upaay_logo.png" alt="Logo" />
      </div>
      <div className="nav-links mr-5"> 
         {/* <ul className=''></ul> */}
        <a href="#">Home</a>
        <a href="#">About us</a>
        {/* <a href='#'><Dropdown></Dropdown></a> */}
        {/* <section className='drop-section'>
                  <ul onClick={handleClick} className={click ? 'drop-menu' : 'dropdown-menu'}>
                      {MenuItems.map((item, index) => {
                          return (
                              <li key={index}>
                                  <Link className='menu-items' to={item.path} onClick={() => setClick(false)}>
                                      {item.title}
                                  </Link>
                              </li>
                          )
                      })}
                  </ul>
              </section> */}

              
        <a href='#'>Gallery</a>
        <a href='#'>FAQs</a>
        <a href='#'>Blog</a>
        <a href='#'>Contact Us</a>
       
  {/* // <Nav className="mr-5">
  //         <Nav.Link href="#home">Home</Nav.Link>
  //         <Nav.Link href="#about">About</Nav.Link>
  //         <NavDropdown title="Services" id="basic-nav-dropdown">
  //           <NavDropdown.Item href="#service1">Service 1</NavDropdown.Item>
  //           <NavDropdown.Item href="#service2">Service 2</NavDropdown.Item>
  //           <NavDropdown.Item href="#service3">Service 3</NavDropdown.Item>
  //         </NavDropdown>
  //         <Nav.Link href="#gallery">Gallery</Nav.Link>
  //         <Nav.Link href="#faqs">FAQs</Nav.Link>
  //         <Nav.Link href="#blog">Blog</Nav.Link>
  //         <Nav.Link href="#contact">Contact Us</Nav.Link>
  //         </Nav> */}
      </div> 
    </nav>
    
  );
}


export default App;
