import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
  return (
    <div id="navBar">
      <Nav className="justify-content-end" activeKey="/home">
        <div id="home">
          <Nav.Item>
            <Link to="/">Home</Link>
          </Nav.Item>
        </div>

        <div id="search">
          <Nav.Item>
            <Link to="/searchforjobs">Search For Jobs</Link>
          </Nav.Item>
        </div>
        <div id="resource">
          <Nav.Item>
            <Link to="/resources">Resources</Link>
          </Nav.Item>
        </div>
      </Nav>
    </div>
  );
};

export default NavigationBar;
