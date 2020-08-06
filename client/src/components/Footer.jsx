import React from 'react';
import Nav from 'react-bootstrap/Nav';

function Footer() {
  return (
    <Nav id="footer" defaultActiveKey="/home" as="ul" className="footer">
      <Nav.Item as="li" id="button">
        <Nav.Link
          id="footertext"
          href="https://github.com/DanRie19"
          target="_blank"
        >
          Daniel Riera
        </Nav.Link>
      </Nav.Item>
      <Nav.Item as="li" id="button">
        <Nav.Link
          id="footertext"
          href="https://github.com/DevloperM"
          target="_blank"
        >
          Moon Guo
        </Nav.Link>
      </Nav.Item>
      <Nav.Item as="li" id="button">
        <Nav.Link
          id="footertext"
          href="https://github.com/Jeanniet89"
          target="_blank"
        >
          Jeannie Torres
        </Nav.Link>
      </Nav.Item>
      <Nav.Item as="li" id="button">
        <Nav.Link
          id="footertext"
          href="https://github.com/Cal9233"
          target="_blank"
        >
          Calvin Malagon
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default Footer;
