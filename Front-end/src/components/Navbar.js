import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import img from "../media/images/img8.jpg";

//components
import MainPage from "./MainPage";
export default function TopNavbar() {
  return (
    <Navbar expand="lg" className="Navbar">
      <Navbar.Brand href="#home">Find Study Buddy</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Link to="/" className="Link">
            <p className="link-text"> Home</p>
          </Link>
          <Link to="/add-request" className="Link">
            <p className="link-text"> Add Request</p>
          </Link>
          <Link to="/Login" className="Link">
            <p className="link-text"> Login User</p>
          </Link>
          <Link to="/profile" className="Link">
            <img src={img} className="avatar-img" alt="avatar" />
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
