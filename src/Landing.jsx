import { useEffect, useState } from "react";
import "./Landing.css";
import beeVideo from "./assets/beevideo2.mp4";

const Landing = ({ onEnter }) => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Reveal text/button after the bee animation has played
    const timer = setTimeout(() => setShowContent(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="landing">
      <video
        className="landing_video"
        src={beeVideo}
        autoPlay
        muted
        loop
        playsInline
        controls={false}
      />

      <div className="landing_overlay" />

      <div className={`landing_content ${showContent ? "show" : "hidden"}`}>
        <div className="landing_badge">David &amp; Katy</div>
        <h1 className="landing_title">Welcome</h1>
        <p className="landing_sub">Join us in celebrating our special day</p>
        <button
          className="landing_button"
          onClick={onEnter}
          disabled={!showContent}
        >
          Enter
        </button>
      </div>
    </div>
  );
};

export default Landing;
