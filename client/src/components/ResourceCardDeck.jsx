import React from 'react';
import { CardDeck, Card, Button } from 'react-bootstrap';

const ResourceCardDeck = () => {
  return (
    <CardDeck className="carddeck">
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Learn from Home</Card.Title>
          <Card.Text>
            Enjoy Extra Quizzes & Projects and Exclusive Content. Practice with
            Our App. Enroll Today! It's Never Too Late to Learn a New Skill!
            Learn to Code and Join Our 45+ Million Users.
          </Card.Text>
          <Button variant="primary">Go to CodeAcdemy</Button>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Becoming A Developer</Card.Title>
          <Card.Text>
            Over 800 web developers, UX/UI designers & digital marketers have
            graduated from our South Florida campus.Over 400 companies have
            hired developers and product designers from Wyncode.
          </Card.Text>
          <Button variant="primary">Go to WynCode</Button>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Skill Share </Card.Title>
          <Card.Text>
            Skillshare is an online learning community for people who want to
            learn from educational videos. The courses, which are not
            accredited, are available through subscription.
          </Card.Text>
          <Button variant="primary">Go to SkillShare</Button>
        </Card.Body>
      </Card>
    </CardDeck>
  );
};

export default ResourceCardDeck;
