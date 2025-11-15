import Nav from "../nav/Nav";
import "./h.css";

const Header = () => {
  return (
    <div className="header">
      <Nav />
      <div className="couple_name_section">
        <h1 className="couple_name">David & Katy</h1>
      </div>

      <div className="date_section">
        <h2 className="date">June 06, 2026</h2>
      </div>
    </div>
  );
};

export default Header;
