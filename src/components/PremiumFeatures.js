import React from "react";
import { Card, Container, Segment } from "semantic-ui-react";

function PremiumFeatures({ isPremium }) {
  // ✅ Do not render anything if the user is not premium
  if (!isPremium) return null;

  return (
    <Container style={{ marginTop: "2em" }}>
      <Segment>
        <h2>Premium Features</h2>
        <Card.Group itemsPerRow={3} stackable>
          
          <Card
            as="a"
            href="https://mail.google.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/image copy 3.png"
              alt="Gmail Logo"
              style={{ maxHeight: "100px", objectFit: "contain" }}
            />
            <Card.Content>
              <Card.Header>Messages</Card.Header>
              <Card.Description>Gmail Seamlessly connection with peoples.</Card.Description>
            </Card.Content>
          </Card>

          <Card
            as="a"
            href="https://www.adobe.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/image copy.png"
              alt="Adobe Logo"
              style={{ maxHeight: "100px", objectFit: "contain" }}
            />
            <Card.Content>
              <Card.Header>Banners</Card.Header>
              <Card.Description>You can create banners using Adobe</Card.Description>
            </Card.Content>
          </Card>

          <Card
            as="a"
            href="https://www.canva.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/image copy 5.png"
              alt="Canva Logo"
              style={{ maxHeight: "100px", objectFit: "contain" }}
            />
            <Card.Content>
              <Card.Header>Themes</Card.Header>
              <Card.Description>Create stunning designs and themes</Card.Description>
            </Card.Content>
          </Card>

        </Card.Group>
      </Segment>
    </Container>
  );
}

export default PremiumFeatures;
