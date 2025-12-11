import "./f.css";

import log from "../../assets/logz.jpg";
import cos from "../../assets/couple.jpg";
import cos2 from "../../assets/couple3.jpg";

const Footer = () => {
  return (
    <div className="fook">
      <div className="coupler">
        <img src={cos} alt="" className="cop" />
      </div>{" "}
      <div className="coupler2">
        <img src={cos2} alt="" className="cop" />
      </div>
      <div className="footer">
        <img src={log} alt="" className="logo" />
        <h2 className="footer_title">David + Katy</h2>

        <h2 className="wedding_details">wedding details</h2>

        <p className="wedding_p">
          <a
            href="https://www.redlandsbreaks.co.uk/"
            target="_blank"
            style={{ color: "inherit" }}
          >
            Redlands Breaks, Hazelbury Bryan, DT10 2AH
          </a>
        </p>
      </div>
      <div className="fook_btn">© 2025 David & Katy . All rights reserved.</div>
    </div>
  );
};

export default Footer;
