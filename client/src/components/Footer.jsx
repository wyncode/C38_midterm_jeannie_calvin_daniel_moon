import React from 'react';
import Nav from 'react-bootstrap/Nav';

function Footer() {
  return (
    <Nav id="footer" defaultActiveKey="/home" as="ul" className="footer">
      <Nav.Item as="li" id="button">
        <Nav.Link id="footertext" href="/home">
          Daniel Riera
        </Nav.Link>
      </Nav.Item>
      <Nav.Item as="li" id="button">
        <Nav.Link id="footertext" eventKey="link-1">
          Moon Guo
        </Nav.Link>
      </Nav.Item>
      <Nav.Item as="li" id="button">
        <Nav.Link id="footertext" eventKey="link-2">
          Jeannie Torres
        </Nav.Link>
      </Nav.Item>
      <Nav.Item as="li" id="button">
        <Nav.Link id="footertext" eventKey="link-2">
          Calvin Malagon
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default Footer;
