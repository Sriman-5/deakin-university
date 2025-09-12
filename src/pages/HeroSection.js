import React from "react";
import { Segment, Image } from "semantic-ui-react";

export default function HeroSection() {
  return (
    <Segment basic style={{ padding: 0 }}>
      <Image
        src="/4348.png" 
        alt="Hero Banner"
        fluid
        style={{
        display: "flex",
        justifyContent: "center", 
        alignItems: "center",     
        height: "480px", 
       

        boxShadow: "none"     
      }}
      />
    </Segment>
  );
}
