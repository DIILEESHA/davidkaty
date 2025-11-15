import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import RsvpForm from "./pages/rsvps/RsvpForm";
import AdminDashboard from "./pages/rsvps/AdminDashboard"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rsvp" element={<RsvpForm />} />
        <Route path="/admin" element={<AdminDashboard/>}/>
      </Routes>
    </Router>
  );
};

export default App;
