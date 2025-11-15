import "./r.css";

const Rsvp = () => {
  return (
    <div className="rsvp">
      <h2 className="rsvp_title">rsvp</h2>
      <p className="rsvp_p">
        Please let us know if you’ll be joining us on our special day. To RSVP,
        press the button below
      </p>

      <button className="rsvp_btn">
        <a href="rsvp" style={{ color: "inherit", textDecoration: "none" }}>
          rsvp here
        </a>
      </button>

      <p className="rsvp_p">Kindly respond by January 15, 2026</p>
    </div>
  );
};

export default Rsvp;
