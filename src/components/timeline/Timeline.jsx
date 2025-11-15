import "./t.css";
import seat from "../../assets/seated.png";
import ant from "../../assets/a.png";
import band from "../../assets/b.png";
import wedding from "../../assets/c.png";
import cake from "../../assets/cc.png";
import photo from "../../assets/p.png";
import dance from "../../assets/da.png";
import last from "../../assets/mu.png";
import fire from "../../assets/ff.png";
import guest from "../../assets/gg.png";
import night from "../../assets/nn.png";

const Timeline = () => {
  return (
    <div className="timeline">
      <h1 className="timeline_title">timeline</h1>

      <div className="timeline_grid">
        {/* 12:00 PM */}
        <div className="timeline_sub icon_sub">
          <img src={ant} alt="" className="timeline_icon" />
        </div>
        <div className="timeline_sub">
          <h2 className="event_actual_time">12:00 PM</h2>
          <p className="actual_timeline">Welcome Drinks & Appetisers</p>
        </div>

        {/* 1:00 PM */}
        <div className="timeline_sub icon_sub">
          <img src={band} alt="" className="timeline_icon" />
        </div>
        <div className="timeline_sub">
          <h2 className="event_actual_time">1:00 PM</h2>
          <p className="actual_timeline">1st Band Performance</p>
        </div>

        {/* 1:45 PM */}
        <div className="timeline_sub icon_sub">
          <img src={seat} alt="" className="timeline_icon" />
        </div>
        <div className="timeline_sub">
          <h2 className="event_actual_time">1:45 PM</h2>
          <p className="actual_timeline">Please Be Seated for Ceremony</p>
        </div>

        {/* 2:00 PM */}
        <div className="timeline_sub icon_sub">
          <img src={wedding} alt="" className="timeline_icon" />
        </div>
        <div className="timeline_sub">
          <h2 className="event_actual_time">2:00 PM</h2>
          <p className="actual_timeline">Wedding Ceremony</p>
        </div>

        {/* 3:00 PM */}
        <div className="timeline_sub icon_sub">
          <img src={seat} alt="" className="timeline_icon" />
        </div>
        <div className="timeline_sub">
          <h2 className="event_actual_time">3:00 PM</h2>
          <p className="actual_timeline">Speeches & Food</p>
        </div>

        {/* 4:00 PM */}
        <div className="timeline_sub icon_sub">
          <img src={cake} alt="" className="timeline_icon" />
        </div>
        <div className="timeline_sub">
          <h2 className="event_actual_time">4:00 PM</h2>
          <p className="actual_timeline">Cake Cutting</p>
        </div>

        {/* 4:15 PM */}
        <div className="timeline_sub icon_sub">
          <img src={photo} alt="" className="timeline_icon" />
        </div>
        <div className="timeline_sub">
          <h2 className="event_actual_time">4:15 PM</h2>
          <p className="actual_timeline">Photo Shoot</p>
        </div>

        {/* 5:00–6:00 PM */}
        <div className="timeline_sub icon_sub">
          <img src={guest} alt="" className="timeline_icon" />
        </div>
        <div className="timeline_sub">
          <h2 className="event_actual_time">5:00 PM – 6:00 PM</h2>
          <p className="actual_timeline">Evening Guests Arrive & 2nd Band</p>
        </div>

        {/* 7:00 PM */}
        <div className="timeline_sub icon_sub">
          <img src={dance} alt="" className="timeline_icon" />
        </div>
        <div className="timeline_sub">
          <h2 className="event_actual_time">7:00 PM</h2>
          <p className="actual_timeline">First Dance</p>
        </div>

        {/* 9:00 PM */}
        <div className="timeline_sub icon_sub">
          <img src={fire} alt="" className="timeline_icon" />
        </div>
        <div className="timeline_sub">
          <h2 className="event_actual_time">9:00 PM</h2>
          <p className="actual_timeline">Fire Dancers</p>
        </div>

        {/* 10:00 PM */}
        <div className="timeline_sub icon_sub">
          <img src={last} alt="" className="timeline_icon" />
        </div>
        <div className="timeline_sub">
          <h2 className="event_actual_time">10:00 PM</h2>
          <p className="actual_timeline">3rd Music Act</p>
        </div>

        {/* 11:00 PM */}
        <div className="timeline_sub icon_sub">
          <img src={night} alt="" className="timeline_icon" />
        </div>
        <div className="timeline_sub">
          <h2 className="event_actual_time">11:00 PM</h2>
          <p className="actual_timeline">End of Night</p>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
