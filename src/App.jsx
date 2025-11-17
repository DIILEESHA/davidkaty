import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import RsvpForm from "./pages/rsvps/RsvpForm";
import AdminDashboard from "./pages/rsvps/AdminDashboard";
import "./App.css";

const App = () => {
  return (
    <div className="sold">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rsvp" element={<RsvpForm />} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
