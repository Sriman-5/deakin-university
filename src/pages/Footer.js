import React from "react";
import "./Footer.css";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Explore Section */}
        <div className="footer-column">
          <h4>Explore</h4>
          <ul>
            <li><a href="/home">Home</a></li>
            <li><a href="/questions">Questions</a></li>
            <li><a href="/articles">Articles</a></li>
            <li><a href="/tutorials">Tutorials</a></li>
          </ul>
        </div>

        {/* Support Section */}
        <div className="footer-column">
          <h4>Support</h4>
          <ul>
            <li><a href="/faqs">FAQs</a></li>
            <li><a href="/help">Help</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>

        {/* Social Section */}
        <div className="footer-column">
          <h4>Stay Connected</h4>
          <div className="footer-social">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>DEV@Deakin 2022</p>
        <p>
          <a href="/privacy-policy">Privacy Policy</a> |{" "}
          <a href="/terms">Terms</a> |{" "}
          <a href="/code-of-conduct">Code of Conduct</a>
        </p>
      </div>
    </footer>
  );
}
