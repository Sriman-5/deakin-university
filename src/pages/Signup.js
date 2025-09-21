import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { useNavigate, Link } from "react-router-dom";
import { Button, Form, Grid, Header, Message } from "semantic-ui-react";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const trimmedEmail = email.trim();

    try {
    
      await createUserWithEmailAndPassword(auth, trimmedEmail, password);

      const res = await fetch("/api/sendWelcomeEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: trimmedEmail }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Failed to send welcome email");
      }

    
      navigate("/home");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Grid
      textAlign="center"
      style={{ height: "100vh" }}
      verticalAlign="middle"
    >
      <Grid.Column style={{ maxWidth: 400 }}>
        <Header as="h2" textAlign="center">
          Sign Up
        </Header>

        <Form
          onSubmit={handleSignup}
          className="ui raised very padded text container segment"
        >
          {error && <Message negative>{error}</Message>}

          <Form.Input
            placeholder="Enter your email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <Form.Input
            placeholder="Enter your password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <Button primary fluid type="submit" disabled={loading}>
            {loading ? "Signing Up..." : "Sign Up"}
          </Button>

          <Message style={{ marginTop: "1em" }}>
            Already have an account? <Link to="/">Login</Link>
          </Message>
        </Form>
      </Grid.Column>
    </Grid>
  );
}
