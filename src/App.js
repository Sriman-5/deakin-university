// src/App.js
import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { UserContext } from "./context/UserContext";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Plans from "./pages/Plans";
import Payment from "./pages/Payment";
import PostEditor from "./pages/PostEditor";
import HeaderBar from "./pages/HeaderBar";

// ✅ Named component
function AppLayout() {
  const location = useLocation();
  const { currentUser, isPremium, setIsPremium } = useContext(UserContext);

  const hideHeader = ["/", "/login", "/signup"].includes(location.pathname);

  return (
    <>
      {!hideHeader && <HeaderBar />}

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/home"
          element={<Home currentUser={currentUser} isPremium={isPremium} />}
        />
        <Route
          path="/plans"
          element={<Plans currentUser={currentUser} isPremium={isPremium} setIsPremium={setIsPremium} />}
        />
        <Route path="/payment" element={<Payment />} />
        <Route path="/create-post" element={<PostEditor />} />

        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </>
  );
}

// ✅ Only one default export
export default function App() {
  return (
    <Router>
      <AppLayout />
    </Router>
  );
}
