import React from "react";
import { Card, Image, Button, Rating } from "semantic-ui-react";
import "./FeaturedTutorials.css";

export default function FeaturedTutorials() {
  const tutorials = [
    {
      title: "AWS",
      description: "AWS offers scalable cloud computing, storage, and global application deployment.",
      image: "./AWS.jpg",
      username: "Sriram_AWS",
      rating: 3.5
    },
    {
      title: "JS",
      description: "JavaScript (JS) is a high-level, multi-paradigm programming",
      image: "./js.png",
      username: "Sriman_JS",
      rating: 5
    },
    {
      title: "REACT",
      description: "React lets you build user interfaces out of individual pieces called components.",
      image: "./react2.png",
      username: "Panda_react",
      rating: 4.3
    }
  ];

  return (
    <div className="featured-section">
      <h2 className="section-title">Featured Tutorials</h2>
      <Card.Group itemsPerRow={3} stackable>
        {tutorials.map((tutorial, index) => (
          <Card key={index}>
            <Image src={tutorial.image} alt={tutorial.title} wrapped ui={false} />
            <Card.Content>
              <Card.Header>{tutorial.title}</Card.Header>
              <Card.Description>{tutorial.description}</Card.Description>
            </Card.Content>
            <Card.Content extra>
              <Rating
                icon="star"
                defaultRating={tutorial.rating}
                maxRating={5}
                disabled
              />{" "}
              {tutorial.rating} &nbsp; {tutorial.username}
            </Card.Content>
          </Card>
        ))}
      </Card.Group>

      <div className="see-more">
        <Button>See all tutorials</Button>
      </div>
    </div>
  );
}
