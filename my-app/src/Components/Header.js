import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes, Link} from "react-router-dom";
import {
  Button,
  Container,
  Nav,
  Navbar,
  Form,
  FormControl,
} from "react-bootstrap";
import logo from "./logo512.png";

//Pages
import Glówna from "../Pages/Glówna";
import Info from "../Pages/Info";
import Pomoc from "../Pages/Pomoc";
import Kontakt from "../Pages/Kontakt";
import Infoq1 from "../Pages/infoq1";
import Infoq2 from "../Pages/infoq2";
import Infoq3 from "../Pages/infoq3";
import Infoq4 from "../Pages/infoq4";
import Infoq5 from "../Pages/infoq5";

export default class Header extends Component {
    render() {
      return (
        <>
          <Navbar className="page-title"
            sticky="top"
            collapseOnSelect
            expand="lg"
            variant="info"
          >
            <Container>
              <Navbar.Brand href="/">
                <img
                  src={logo}
                  height="40"
                  width="30"
                  className="d-inline-block align-top text-center"
                  alt="logo"
                />
              </Navbar.Brand>
              <Navbar.Toggle aria-aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="/"> Glówna </Nav.Link>
                  <Nav.Link href="/info"> O nas </Nav.Link>
                  <Nav.Link href="/pomoc"> Jak Pomoc </Nav.Link>
                  <Nav.Link href="/kontakt"> Kontakt </Nav.Link>
                </Nav>
                <Form className= "d-flex">
                    <FormControl
                      type="search"
                      placeholder="Szukaj"
                      className="me-2"
                      aria-label="Search"
                    />
                    <Button variant="outline-dark">Szukaj</Button>
                </Form>
              </Navbar.Collapse>
            </Container>
            
          </Navbar>
  
          <Router>
              <Routes>
                  <Route path="/" element = {<Glówna/>} />
                  <Route path="/info" element = {<Info/>} />
                  <Route path="/pomoc" element = {<Pomoc/>} />
                  <Route path="/kontakt" element = {<Kontakt/>} />
                  <Route path="/infoq1" element = {<Infoq1/>} />
                  <Route path="/infoq2" element = {<Infoq2/>} />
                  <Route path="/infoq3" element = {<Infoq3/>} />
                  <Route path="/infoq4" element = {<Infoq4/>} />
                  <Route path="/infoq5" element = {<Infoq5/>} />

                  <Route path="#characteristics" id={<characteristics/>} />
                  <Route path="#description" id={<description/>} />
                </Routes>
            </Router>
            </>
        );
    }

}