import React, { useState } from "react";
import "./NewsletterSignup.css";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    setMessage("");

    try {
      // Use the Netlify Functions path. Works locally with `netlify dev` and when deployed.
      const res = await fetch("/.netlify/functions/send-welcome", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        setMessage("Welcome email sent successfully!");
        setEmail("");
      } else {
        setStatus("error");
        // prefer server message if present
        setMessage(data && data.error ? data.error : data.message || "Something went wrong");
      }
    } catch (err) {
      console.error("Network error:", err);
      setStatus("error");
      setMessage("Failed to connect to server. Try running `netlify dev`, or check function deployment.");
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
        <button type="submit" className="newsletter-button" disabled={status === "loading"}>
          {status === "loading" ? "Sending..." : "Subscribe"}
        </button>
      </form>
      {message && <p className={status === "error" ? "error" : "success"}>{message}</p>}
    </div>
  );
}
