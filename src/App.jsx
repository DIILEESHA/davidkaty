import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Home from "./Home";
import RsvpForm from "./pages/rsvps/RsvpForm";
import AdminDashboard from "./pages/rsvps/AdminDashboard";
import "./App.css";
import Nav from "./components/nav/Nav";
import Landing from "./Landing";
import { useEffect, useState } from "react";

const AppWrapper = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

const App = () => {
  // const location = useLocation();

  // Show Nav only on Home page
  // const showNav = location.pathname === "/";

  const [entered, setEntered] = useState(false);

  useEffect(() => {
    const hasEntered = localStorage.getItem("site_entered") === "true";
    setEntered(hasEntered);
  }, []);

  const handleEnter = () => {
    localStorage.setItem("site_entered", "true");
    setEntered(true);
  };

  return (
    <>
      {!entered && <Landing onEnter={handleEnter} />}
      <div className="tex">
        {/* {showNav && <Nav />} */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rsvp" element={<RsvpForm />} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
      </div>
    </>
  );
};

export default AppWrapper;
