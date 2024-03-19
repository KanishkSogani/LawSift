import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import LandingPage from "./components/LandingPage";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route className="bg" path="/" element={<LandingPage />} />
          <Route className="bg" path="/Dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
