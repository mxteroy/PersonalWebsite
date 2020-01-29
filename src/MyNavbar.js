import React from 'react';
import Nav from 'react-bootstrap/Nav';
import './styles/navbar.css';

export default class MyNavbar extends React.Component{
  render() {
    return (
      <Nav className="mynavbar justify-content-center" defaultActiveKey="/home" as="ul">
        <Nav.Item as="li">
          <Nav.Link id="nav-link" href="/home">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link id="nav-link" eventKey="link-1">Resume</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link id="nav-link" eventKey="link-2">Notes</Nav.Link>
        </Nav.Item>
      </Nav>
    );
  }
};