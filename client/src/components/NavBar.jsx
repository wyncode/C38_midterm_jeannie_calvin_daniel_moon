import React from "react";
import Nav from "react-bootstrap/Nav";



const NavigationBar = () => {
  return(
<>
  <Nav style=
      {{ 
        backgroundColor: "lightblue", 
        height: 70,
      }} 
  className="justify-content-end" activeKey="/home">
    <Nav.Item>
      <Nav.Link href="/home">Home</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link-1">Search For Jobs</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link-2">Resources</Nav.Link>
    </Nav.Item>
  </Nav>
  </>
  )
}


export default NavigationBar;
