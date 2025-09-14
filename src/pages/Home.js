
import React from "react";
import { Container } from "semantic-ui-react";
import NewsletterSignup from "../pages/NewsletterSignup";
import FeaturedArticles from "../pages/FeaturedArticles";
import Footer from "../pages/Footer";
import HeroSection from "../pages/HeroSection";
import Tutorials from "../pages/FeaturedTutorials";


export default function Home() {
  return (
    <>
      
      <HeroSection />
      <Container style={{ marginTop: 20, marginBottom: 40 }}>
        <FeaturedArticles />
        <Tutorials />
        <NewsletterSignup />
        
      </Container>
      <Footer />
    </>
  );
}
