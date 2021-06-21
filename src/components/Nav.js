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


        </>
    );
}

export default Nav;