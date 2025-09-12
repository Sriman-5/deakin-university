import React from "react";
import { Card, Image, Button, Rating } from "semantic-ui-react";
import "./FeaturedArticles.css";

export default function FeaturedArticles() {
 
  const articles = [
    {
      title: "AWS",
      description: "Learn to use Managed identity in Azure Active Directory to minimze the number of passwords you need. Learn to use managed identities to access Microsoft Graph...",
      image: "./featured4.jpeg",
      author: "Rod Paddock",
      rating: 4.5
    },
    {
      title: "State & Props Basics",
      description: "These articles provide actionable insights for enhancing code quality, user experience, and development efficiency across diverse technology stacks...",
      image: "./featured2.jpeg",
      author: "Jane Smith",
      rating: 5
    },
    {
      title: "Code Focus",
      description: "Power Platform 2023 is a special collection of articles written primarily by Microsoft MVPs covering major features of Microsoft Power Platform...",
      image: "./featured3.jpeg",
      author: "Charles Lamanna",
      rating: 4.75
    }
  ];

  return (
    <div className="featured-section">
      <h2 className="section-title">Featured Articles</h2>
      <Card.Group itemsPerRow={3} stackable>
        {articles.map((article, index) => (
          <Card key={index}>
            <Image src={article.image} alt={article.title} wrapped ui={false} />
            <Card.Content>
              <Card.Header>{article.title}</Card.Header>
              <Card.Description>{article.description}</Card.Description>
            </Card.Content>
            <Card.Content extra>
              <Rating
                icon="star"
                defaultRating={article.rating}
                maxRating={5}
                disabled
              />{" "}
              {article.rating} &nbsp; {article.author}
            </Card.Content>
          </Card>
        ))}
      </Card.Group>

      <div className="see-more">
       <Button as="a" href="/articles">See all articles</Button>
      </div>
    </div>
  );
}
