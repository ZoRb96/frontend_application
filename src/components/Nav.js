import React from 'react';
import { Button, Form, Container, Col, Row, Card, NavItem, NavDropdown, MenuItem, Image, Glyphicon } from 'react-bootstrap'
import logo from './saurav.jpg'

function Nav(props) {
    return (
        <>
    <nav class="navbar navbar-expand-sm row shadow mb-5" style={{ height: "60px", background: "#f1f2f6" }}>
    <div class="container-fluid">
    <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
  <ul class="navbar-nav">
      <li class="nav-item">
      <div className="p-2">Saurav Kr. Bhagabati</div>
      </li>
      <li class="nav-item">
      <Image src={logo} style={{ height: "50px", width: "50px", padding: "2px", marginRight: "10px" }} alt="Logo" roundedCircle />
      </li>
     
  </ul>
  </div>
  </div>
</nav>
            {/* <div style={{ height: "60px", background: "#f1f2f6" }} className="row shadow mb-5 d-flex">
            <Row>
                <Col md={9}></Col>
                <Col md={3}>
                <Row style={{position: 'relative'}}>
                <Col md={8}>
                <div className="mt-3">Saurav Kr. Bhagabati</div>
                </Col>
                <Col md={4}>
                    <Image src={logo} style={{ height: "50px", width: "50px" }} alt="Logo" roundedCircle />
                    </Col>
                </Row>
                </Col>
                </Row>
            </div> */}
            
        </>
    );
}

export default Nav;