import React from "react";
import "./NewsletterSignup.css";

export default function NewsletterSignup() {
  return (
    <div className="newsletter-section">
      <h3>SIGN UP FOR OUR DAILY INSIDER</h3>
      <form className="newsletter-form">
        <input
          type="email"
          placeholder="Enter your email"
          className="newsletter-input"
        />
        <button type="submit" className="newsletter-button">
          Subscribe
        </button>
      </form>
    </div>
  );
}
