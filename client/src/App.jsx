import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import LandingPage from "./components/LandingPage";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import Try from "./components/Try";

import { useState } from "react";
function App() {
  const [image, setImage] = useState(null);
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route
            className="bg"
            path="/"
            element={<LandingPage image={image} setImage={setImage} />}
          />
          <Route
            className="bg"
            path="/Dashboard"
            element={<Dashboard image={image} setImage={setImage} />}
          />
          <Route className="bg" path="/try" element={<Try />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
