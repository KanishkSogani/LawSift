import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import Dashboard from "./pages/Dashboard";

import { useState } from "react";
function App() {
  const [data, setData] = useState([]);
  return (
    <div>
      <Router>
        <Routes>
          <Route
            className="bg"
            path="/"
            element={<LandingPage setData={setData} />}
          />
          <Route
            className="bg"
            path="/Dashboard"
            element={<Dashboard data={data} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
