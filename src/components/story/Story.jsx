import "./s.css";
import str from "../../assets/couple3.jpg";
import tr from "../../assets/details.jpg";

const Story = () => {
  return (
    <div className="story">
      <div className="story_grid">
        <div className="story_sub">
          <img src={str} alt="" className="story_img" />
        </div>
        <div className="story_sub ui">
          <h2 className="strory_title">our story</h2>

          <p className="story_p">
            We met years ago and somehow every little moment since then the
            laughter, the adventures, and even the quiet mornings has led us
            here. We can’t wait to celebrate our wedding day with friends and
            family at Redlands Breaks.
          </p>
        </div>
      </div>
      <div className="story_grid">
        <div className="story_sub mi">
          <h2 className="strory_title qa">details</h2>

          <div className="story_detail_grid">
            <div className="story_grid_ul">
              <ul className="story_ul">
                <li className="story_li tum">date</li>
                <li className="story_li tum">ceremony time</li>
                <li className="story_li tum">venue</li>
                <li className="story_li tum">dress code</li>
              </ul>
            </div>
            <div className="story_grid_ul down">
              <ul className="story_ul">
                <li className="story_li">June 6, 2026</li>
                <li className="story_li">2:00 PM</li>

                <li className="story_li">
                  <a
                    href="https://www.redlandsbreaks.co.uk/"
                    target="_blank"
                    style={{ color: "inherit" }}
                  >
                    Redlands Breaks
                  </a>
                </li>
                <li className="story_li">
                  Relaxed country attire (flat shoes recommended)
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="story_sub">
          <img src={tr} alt="" className="story_img" />
        </div>
      </div>
    </div>
  );
};

export default Story;
