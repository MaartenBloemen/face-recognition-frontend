import React, {Component} from "react";
import {Navbar, Nav} from "react-bootstrap";

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark" sticky="top">
                <Navbar.Brand href="/">
                    <i className="fa fa-grin-alt"/> Face recognition
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link className={window.location.pathname === "/" ? "active" : ""}
                                  href="/">
                            <i className="fa fa-smile"/> face recognition without blinking
                        </Nav.Link>
                        <Nav.Link className={window.location.pathname === "/blinking" ? "active" : ""}
                                  href="/blinking">
                            <i className="fa fa-smile-beam"/> face recognition with blinking
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Header;