import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
  return (
    <>
      <Nav
        style={{
          backgroundColor: 'lightblue',
          height: 70
        }}
        className="justify-content-end"
        activeKey="/home"
      >
        <Nav.Item>
          <Link to="/">Home</Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/searchforjobs">Search For Jobs</Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/resources">Resources</Link>
        </Nav.Item>
      </Nav>
    </>
  );
};

export default NavigationBar;
