import { useState } from "react";
import Footer from "../../components/footer/Footer";
import "./rs.css";
import { House } from "lucide-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RsvpForm = () => {
  const [attendance, setAttendance] = useState("");
  const [fullName, setFullName] = useState("");
  const [guestCount, setGuestCount] = useState("");
  const [childCount, setChildCount] = useState("");
  const [guestNames, setGuestNames] = useState("");
  const [busToEvent, setBusToEvent] = useState(false);
  const [busReturn, setBusReturn] = useState(false);
  const [allergies, setAllergies] = useState("");
  const [message, setMessage] = useState("");

  // Errors
  const [errors, setErrors] = useState({});

  // Validation Logic
  const validate = () => {
    let temp = {};

    if (!fullName.trim()) temp.fullName = "Full Name is required";

    if (!attendance) temp.attendance = "Please select attendance";

    if (attendance === "accept") {
      if (!guestCount || Number(guestCount) < 1) {
        temp.guestCount = "Please enter number of guests (at least 1)";
      }
      if (childCount && Number(childCount) < 0) {
        temp.childCount = "Children count cannot be negative";
      }
      if (!guestNames.trim()) {
        temp.guestNames = "Please list the names of guests attending";
      }
    }

    setErrors(temp);

    return Object.keys(temp).length === 0;
  };

  const handleAttendanceChange = (value) => {
    setAttendance(value);
    setErrors({});
    if (value !== "accept") {
      setGuestCount("");
      setChildCount("");
      setGuestNames("");
      setBusToEvent(false);
      setBusReturn(false);
      setAllergies("");
    }
  };

const FORM_ENDPOINT = "https://formspree.io/f/xldqzzne";

const handleSubmit = async (e) => {
  e.preventDefault();

  if (!validate()) return;

  try {
    const payload = {
      fullName,
      attendance,
      guestCount: attendance === "accept" ? guestCount : "",
      childCount: attendance === "accept" ? childCount : "",
      guestNames: attendance === "accept" ? guestNames : "",
      busToEvent: attendance === "accept" ? busToEvent : false,
      busReturn: attendance === "accept" ? busReturn : false,
      allergies: attendance === "accept" ? allergies : "",
      message,
    };

    const res = await fetch(FORM_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      throw new Error("Form submission failed");
    }

    toast.success("RSVP Submitted Successfully!");

    // Clear fields
    setFullName("");
    setAttendance("");
    setGuestCount("");
    setChildCount("");
    setGuestNames("");
    setBusToEvent(false);
    setBusReturn(false);
    setAllergies("");
    setMessage("");
    setErrors({});
  } catch (error) {
    toast.error("Error submitting RSVP");
    console.log(error);
  }
};


  return (
    <div className="rsvps tex">
      <div className="home_section">
        <div className="homer">
          <a href="/">

          <House color="#fff" size={15} />
          </a>
        </div>
        <div className="homer">/</div>
        <div className="homer">
          <h2 className="tt">rsvp</h2>
        </div>
      </div>

      <div className="rsvp_container">
        <h2 className="rsvp_titles">rsvp</h2>
        <div className="line"></div>

        <form className="rsvp_form" onSubmit={handleSubmit}>
          {/* FULL NAME */}
          <div className="form_input_section">
            <label className="rsvp_label">Full Name</label>
            <input
              type="text"
              className="rsvp_input"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
            {errors.fullName && <span className="error">{errors.fullName}</span>}
          </div>

          {/* ATTENDANCE */}
          <div className="form_input_section">
            <label className="rsvp_label">Will you be attending?</label>
<ToastContainer 
  position="top-right"
  autoClose={5000}
  hideProgressBar={false}
  newestOnTop={false}
  closeOnClick
  rtl={false}
  pauseOnFocusLoss
  draggable
  pauseOnHover
/>

            <div className="former">
              <input
                type="radio"
                id="attend_accept"
                name="attend"
              value="accept"
              checked={attendance === "accept"}
              onChange={(e) => {
                handleAttendanceChange(e.target.value);
              }}
            />
              <label htmlFor="attend_accept" className="form_label">
                Accepts with pleasure
              </label>
            </div>

            <div className="former">
              <input
                type="radio"
                id="attend_decline"
                name="attend"
              value="decline"
              checked={attendance === "decline"}
              onChange={(e) => {
                handleAttendanceChange(e.target.value);
              }}
            />
              <label htmlFor="attend_decline" className="form_label">
                Declines with regret
              </label>
            </div>

            {errors.attendance && (
              <span className="error">{errors.attendance}</span>
            )}
          </div>

          {/* ADDITIONAL DETAILS */}
          <div className="form_input_section">
            <label className="rsvp_label">
              How many guests?{" "}
              <span className="note">(if attending)</span>
            </label>
            <input
              type="number"
              min="1"
              className="rsvp_input"
              value={guestCount}
              onChange={(e) => setGuestCount(e.target.value)}
              disabled={attendance !== "accept"}
            />
            {errors.guestCount && (
              <span className="error">{errors.guestCount}</span>
            )}
          </div>

          <div className="form_input_section">
            <label className="rsvp_label">
              How many children under 12?{" "}
              <span className="note">(if attending)</span>
            </label>
            <input
              type="number"
              min="0"
              className="rsvp_input"
              value={childCount}
              onChange={(e) => setChildCount(e.target.value)}
              disabled={attendance !== "accept"}
            />
            {errors.childCount && (
              <span className="error">{errors.childCount}</span>
            )}
          </div>

          <div className="form_input_section">
            <label className="rsvp_label">List of names</label>
            <textarea
              rows={4}
              className="rsvp_input"
              value={guestNames}
              onChange={(e) => setGuestNames(e.target.value)}
              placeholder="Please include all guest names"
              disabled={attendance !== "accept"}
            ></textarea>
            {errors.guestNames && (
              <span className="error">{errors.guestNames}</span>
            )}
          </div>

          <div className="form_input_section">
            <label className="rsvp_label">Bus transport</label>
            <div className="former">
              <input
                type="checkbox"
                id="bus_to"
                checked={busToEvent}
                onChange={(e) => setBusToEvent(e.target.checked)}
                disabled={attendance !== "accept"}
              />
              <label htmlFor="bus_to" className="form_label">
                Bus transport to the event
              </label>
            </div>
            <div className="former">
              <input
                type="checkbox"
                id="bus_return"
                checked={busReturn}
                onChange={(e) => setBusReturn(e.target.checked)}
                disabled={attendance !== "accept"}
              />
              <label htmlFor="bus_return" className="form_label">
                Bus transport leaving the event
              </label>
            </div>
          </div>

          <div className="form_input_section">
            <label className="rsvp_label">
              Food allergies and other information
            </label>
            <textarea
              rows={4}
              className="rsvp_input"
              value={allergies}
              onChange={(e) => setAllergies(e.target.value)}
              placeholder="Let us know any dietary needs or other details."
              disabled={attendance !== "accept"}
            ></textarea>
          </div>

          {/* MESSAGE */}
          <div className="form_input_section">
            <label className="rsvp_label">Message to the Couple</label>
            <textarea
              rows={10}
              className="rsvp_input"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>

          {/* SUBMIT BUTTON */}
          <button type="submit" className="submit_btn">
            Submit RSVP
          </button>
        </form>
      </div>

      <Footer />
    </div>
  );
};

export default RsvpForm;
