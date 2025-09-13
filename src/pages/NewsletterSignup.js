import React, { useState } from "react";
import "./NewsletterSignup.css";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:3000/api/send-welcome", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage("Welcome email sent successfully!");
        setEmail("");
      } else {
        setMessage("" + data.message);
      }
    } catch (err) {
      console.error("Error:", err);
      setMessage("Failed to connect to server. Try again.");
    }
  };

  return (
    <div className="newsletter-section">
      <h3>SIGN UP FOR OUR DAILY INSIDER</h3>
      <form className="newsletter-form" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your email"
          className="newsletter-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit" className="newsletter-button">
          Subscribe
        </button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}
