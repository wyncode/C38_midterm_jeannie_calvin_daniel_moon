import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import logo from "../assets/images/logo-via-logohub copy.png"

const NavigationBar = () => {
  return (
    <div id="navBar">
      <Nav className="justify-content-end" activeKey="/home">
        <img className="navlogo" src={logo} alt="logo.." style= {{width: "105px"}}/>
        <div id="home">
          <Nav.Item id="button">
            <Link id="navtext" to="/">
              Home
            </Link>
          </Nav.Item>
        </div>

        <div id="search">
          <Nav.Item id="button">
            <Link id="navtext" to="/searchforjobs">
              Search For Jobs
            </Link>
          </Nav.Item>
        </div>
        <div id="resource">
          <Nav.Item id="button">
            <Link id="navtext" to="/resources">
              Resources
            </Link>
          </Nav.Item>
        </div>
      </Nav>
    </div>
  );
};

export default NavigationBar;
