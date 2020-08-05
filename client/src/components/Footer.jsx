import React from 'react';
import Nav from 'react-bootstrap/Nav';

function Footer() {
  return (
    <Nav id="footer" defaultActiveKey="/home" as="ul" className="footer">
      <Nav.Item as="li">
        <Nav.Link id="footertext" href="https://github.com/DanRie19">
          Daniel Riera
        </Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link id="footertext" href="https://github.com/DevloperM">
          Moon Guo 
        </Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link id="footertext" href="https://github.com/Jeanniet89">
          Jeannie Torres
        </Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link id="footertext" href="https://github.com/Cal9233">
          Calvin Malagon
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default Footer;
