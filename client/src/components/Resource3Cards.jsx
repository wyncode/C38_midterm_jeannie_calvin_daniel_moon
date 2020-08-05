import React from 'react';
import { CardDeck, Card } from 'react-bootstrap';
import card31 from '../assets/images/card31.jpg';
import card3T from '../assets/images/card3T.jpg';
import WBE_Tech from '../assets/images/WBE_Tech.jpg';
function Resource3Cards(props) {
  return (
    <CardDeck className="cards">
      <Card>
        <Card.Img variant="top" src={WBE_Tech} />
        <Card.Body>
          <Card.Title>U.S Employment Report</Card.Title>
          <Card.Text>
            Did you know that one of the industries that has seen the best job
            growth in the U.S. is mining? Check out our report , from the end of
            December 2019 through May 2020, U.S. employment in the mining sector
            has increased 16 percent.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src={card31} />
        <Card.Body>
          <Card.Title>Job Market Report</Card.Title>
          <Card.Text>
            By publishing and comparing month-by-month job growth and pay growth
            across the U.S. by metro, industry and more, the Job Market Report
            offers a fresh, forward-looking and more detailed perspective into
            how the job market and economy are changing.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src={card3T} />
        <Card.Body>
          <Card.Title>2020 Tech Industry</Card.Title>
          <Card.Text>
            Tech jobs, tech industry, economic impact, tech salary, technology
            trends, data and analysis by city,tech employment in the U.S.
            developers – the largest and fasting growing category of tech jobs.
          </Card.Text>
        </Card.Body>
      </Card>
    </CardDeck>
  );
}
export default Resource3Cards;
