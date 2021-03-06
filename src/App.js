import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar.js";
import Home from "./components/Pages/Home.js";
import Consult from "./components/Pages/Consult.js";
import Predict from "./components/Pages/Predict.js";
import Signup from "./components/signup";
import Signin from "./components/signin";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/consult" element={<Consult />} />
        <Route path="/predict" element={<Predict />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Signin />} />
      </Routes>
    </Router>
  );
}

export default App;
