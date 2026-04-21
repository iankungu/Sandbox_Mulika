import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import UserPage from "./UserPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* This is your default homepage */}
        <Route path="/" element={<LandingPage />} />

        {/* when report is clicked */}
        <Route path="/report" element={<UserPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
