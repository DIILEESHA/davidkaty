import "./e.css";

import heater from "../../assets/heat.jpg"

const Enter = () => {
  return (
    <div className="enter">
      <div className="enter_middle">
        <h2 className="timeline_title" id="where-to-stay">
          where to stay
        </h2>

        <p className="enter_p width_cut">
          Guests are more than welcome to stay on-site at Redlands Breaks! You
          can either: Please contact David and Katy if you’d like to stay
          on-site. For those preferring local accommodation, here are nearby
          options:
        </p>

        <div className="enter_grid">
          <div className="enter_subs">
            <img
              src="https://www.crownhotelblandford.co.uk/wp-content/uploads/sites/3/2023/09/DSC_3341.jpg?format=auto&width=1920"
              alt=""
              className="enter_band_img"
            />

            <h2 className="band_name">The Crown Hotel, Blandford Forum</h2>

            <p className="band_more">
              A cozy and elegant stay just a short drive from the venue.
            </p>

            <button className="view">
              <a
                href="https://www.crownhotelblandford.co.uk/"
                target="_blank"
                className="website_link"
              >
                website Link
              </a>
            </button>
          </div>

          <div className="enter_subs">
            <img
              src="https://plumbermanor.co.uk/wp-content/uploads/2018/01/summer-gardens-min.jpg"
              alt=""
              className="enter_band_img"
            />

            <h2 className="band_name">Plumber Manor</h2>

            <p className="band_more">
              A charming Dorset country house hotel for a luxury stay.
            </p>
            <button className="view">
              <a
                href="https://plumbermanor.co.uk/"
                target="_blank"
                className="website_link"
              >
                website Link
              </a>
            </button>
          </div>
        </div>
      </div>

      {/* step2 */}
      <div className="enter_middle" id="band">
        <h2 className="timeline_title">Entertainment</h2>
        <p className="enter_p">
          We have lined up an amazing selection of entertainment for our big
          day!
        </p>

        <div className="enter_grid">
          <div className="enter_subs">
            <img
              src={heater}
              alt=""
              className="enter_band_img"
            />

            <h2 className="band_name">The Hype Band</h2>

            <p className="band_more">
            An energetic band delivering high-energy performances that get guests excited and set the tone for a fun celebration.
            </p>

            <button className="view">
              <a
                href="https://www.thehypeband.co.uk/"
                target="_blank"
                className="website_link"
              >
                website Link
              </a>
            </button>
          </div>

          <div className="enter_subs">
            <img
              src="https://img.warble-entertainment.com//689/the-hype10.jpg"
              alt=""
              className="enter_band_img"
            />

            <h2 className="band_name">The Nashville Heat</h2>

            <p className="band_more">
             A talented group blending soulful melodies and vibrant rhythms to create a lively and memorable atmosphere.
            </p>
            <button className="view">
              <a
                href="http://www.thenashvilleheat.co.uk/"
                target="_blank"
                className="website_link"
              >
                website Link
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Enter;
