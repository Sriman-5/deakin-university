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
      navigate("/login", { replace: true });
    } catch (err) {
      console.error("Logout failed:", err);
      navigate("/login", { replace: true });
    }
  };

  return (
    <header className="header-container">
      <div className="logo">DEV@Deakin</div>

      <input type="text" placeholder="Search..." className="search-bar" />

      <div className="header-buttons">

        {/* ⬅️ added Plans link */}
        <Link to="/plans">
          <button className="plans-btn">Plans</button>
        </Link>

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
