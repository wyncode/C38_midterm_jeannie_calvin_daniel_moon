import React from 'react';
import { CardDeck, Card } from 'react-bootstrap';

const HomeCards = () => {
  return (
    <div className="container">
       <h1 className="hometitletext">TOP LANGUAGES</h1>
    <div id="homepgcards">
      <CardDeck>
        <Card>
          <Card.Body id="homepagecards">
            <Card.Title>PYTHON</Card.Title>
            <Card.Text>
              Python is surprisingly easy to read. As an interpreted language,
              it does not transform code to become computer-readable. Python is
              also a high-level, general-purpose programming language.
              Developers designed it to become a chameleon of the programming
              world.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body id="homepagecards">
            <Card.Title>JS</Card.Title>
            <Card.Text>
              JavaScript is a scripting or programming language that allows you
              to implement complex features on web pages — every time a web page
              does more than just sit there and display static information for
              you to look at — displaying timely content updates, interactive
              maps, animated 2D/3D graphics, scrolling video jukeboxes, etc. —
              you can bet that JavaScript is probably involved.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body id="homepagecards">
            <Card.Title>React</Card.Title>
            <Card.Text>
              React.js is an open-source JavaScript library that is used for
              building user interfaces specifically for single-page
              applications. It's used for handling the view layer for web and
              mobile apps. React also allows us to create reusable UI
              components. React was first created by Jordan Walke, a software
              engineer working for Facebook.
            </Card.Text>
          </Card.Body>
        </Card>
      </CardDeck>
    </div>
    </div>
  );
};

export default HomeCards;
