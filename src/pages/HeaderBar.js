import React, { useEffect, useState } from "react";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { useNavigate, Link } from "react-router-dom";
import "./HeaderBar.css";

export default function HeaderBar() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => setUser(u));
    return () => unsub();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      // navigate to the login route; App.js has /login and / set up
      navigate("/login", { replace: true });
    } catch (err) {
      console.error("Logout failed:", err);
      navigate("/login", { replace: true });
    }
  };

  return (
    <header className="header-container">
      <div className="logo">DEV@Deakin</div>

      <input
        type="text"
        placeholder="Search..."
        className="search-bar"
      />

      <div className="header-buttons">
        {/* remove Post button if you don't need it */}
        {/* <button className="post-btn">Post</button> */}

        {user ? (
          <button className="logout-btn" onClick={handleLogout}>
            Logout
          </button>
        ) : (
          <Link to="/login">
            <button className="login-btn">Login</button>
          </Link>
        )}
      </div>
    </header>
  );
}
