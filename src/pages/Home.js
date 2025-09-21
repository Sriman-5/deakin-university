
import React, { useContext } from "react";
import { Container } from "semantic-ui-react";
import HeroSection from "./HeroSection";
import FeaturedArticles from "./FeaturedArticles";
import Tutorials from "./FeaturedTutorials";
import NewsletterSignup from "./NewsletterSignup";
import Footer from "./Footer";
import PremiumFeatures from "../components/PremiumFeatures";
import { UserContext } from "../context/UserContext";

export default function Home() {
  const { currentUser, isPremium } = useContext(UserContext);

  
  if (!currentUser) {
    return <p style={{ textAlign: "center", marginTop: "50px" }}>Please log in to access the home page.</p>;
  }

  return (
    <>
      <HeroSection />
      <Container style={{ marginTop: 20, marginBottom: 40 }}>
        <FeaturedArticles />
        <Tutorials />
        <NewsletterSignup />

        {isPremium && <PremiumFeatures />}
      </Container>
      <Footer />
    </>
  );
}
