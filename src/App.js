import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import HeaderBar from "./pages/HeaderBar";
import "./App.css";

function AppLayout() {
  const location = useLocation();

  const hideHeader = location.pathname === "/" || location.pathname === "/login" || location.pathname === "/signup";

  return (
    <>
      {!hideHeader && <HeaderBar />}

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </>
  );
}

export default function App() {
  return (
    <Router>
      <AppLayout />
    </Router>
  );
}
