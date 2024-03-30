import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import Dashboard from "./pages/Dashboard";
import { useState } from "react";
import Uploadpdf from "./pages/Uploadpdf";
function App() {
  const [data, setData] = useState([]);
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage setData={setData} />} />
          <Route path="/Dashboard" element={<Dashboard data={data} />} />
          <Route path="/upload/:docID" element={<Uploadpdf data={data} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
