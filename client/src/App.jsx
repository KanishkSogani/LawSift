import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import Navbar from "./pages/Navbar";
import Upload from "./pages/Upload";
function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route className="bg" path="/" element={<LandingPage />} />
          <Route className="bg" path="/upload" element={<Upload />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
