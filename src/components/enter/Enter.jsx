import "./e.css";
import heater from "../../assets/heat.jpg";
import mirr from "../../assets/mirror.jpeg";
import h from "../../assets/horse.jpeg";
import p from "../../assets/photo.webp";
import c from "../../assets/characterman.jpeg";
import s from "../../assets/sax.jpeg";
import f from "../../assets/fire.webp";

const Enter = () => {
  return (
    <div className="enter">
      {/* WHERE TO STAY */}
      <div className="enter_middle fade-in">
        <h2 className="timeline_title" id="where-to-stay">
          Where to stay
        </h2>
        <p className="enter_p width_cut">
          Guests are welcome to stay on-site at Redlands Breaks. Contact David
          and Katy if you’d like to stay there. For those preferring local
          accommodation, here are nearby options:
        </p>

        <div className="enter_grid">
          <div className="enter_subs fade-in">
            <img
              src="https://www.crownhotelblandford.co.uk/wp-content/uploads/sites/3/2023/09/DSC_3341.jpg?format=auto&width=1920"
              className="enter_band_img"
              alt=""
              loading="lazy"
            />
            <h2 className="band_name">The Crown Hotel, Blandford Forum</h2>
            <p className="band_more">
              A cozy and elegant stay just a short drive from the venue.
            </p>

            <button className="view">

            <a
              href="https://www.crownhotelblandford.co.uk/"
              target="_blank"
              className=" website_link"
            >
              Website Link
            </a>
              </button>
          </div>

          <div className="enter_subs fade-in">
            <img
              src="https://plumbermanor.co.uk/wp-content/uploads/2018/01/summer-gardens-min.jpg"
              className="enter_band_img"
              alt=""
              loading="lazy"
            />
            <h2 className="band_name">Plumber Manor</h2>
            <p className="band_more">
              A charming Dorset country house hotel for a luxury stay.
            </p>


            <button className="view">

            <a
              href="https://plumbermanor.co.uk/"
              target="_blank"
              className=" website_link"
            >
              Website Link
            </a>
              </button>
          </div>
        </div>

        <p className="enter_p width_cut">
          A bus will run from central Blandford to the venue and back. It leaves
          Morrison car park at 5:30 PM and returns from Redlands at 11:00 PM.
        </p>
      </div>

      {/* ENTERTAINMENT */}
      <div className="enter_middle fade-in" id="band">
        <h2 className="timeline_title">Entertainment</h2>
        <p className="enter_p">
          We have lined up an amazing selection of entertainment for our big
          day!
        </p>

        <div className="enter_grid dotss">
          <div className="enter_subs fade-in">
            <img
              src={heater}
              alt=""
              className="enter_band_img"
              loading="lazy"
            />
            <h2 className="band_name">The Hype Band</h2>
            <p className="band_more">
              An energetic band delivering high-energy performances.
            </p>


            <button className="view">

            <a
              href="https://www.thehypeband.co.uk/"
              target="_blank"
              className=" website_link"
            >
              Website Link
            </a>
              </button>
          </div>

          <div className="enter_subs fade-in">
            <div className="img_grid">
              {[mirr, h, p, c, s, f].map((img, i) => (
                <div key={i} className="img_sub_grid">
                  <img src={img} alt="" className="other_img" loading="lazy" />
                </div>
              ))}
            </div>
            <h2 className="band_name">Other Entertainment</h2>
            <p className="band_more">
              Evening fun includes Mirror Men, Bucking Bronco, Photo Booth,
              Character Man, Wendy Sax, and Fire Dancers.
            </p>
          </div>

          <div className="enter_subs fade-in">
            <img
              src="https://img.warble-entertainment.com//689/the-hype10.jpg"
              className="enter_band_img"
              alt=""
              loading="lazy"
            />
            <h2 className="band_name">The Nashville Heat</h2>
            <p className="band_more">
              A talented group blending soulful melodies and vibrant rhythms.
            </p>

            <button className="view">
              <a
                href="http://www.thenashvilleheat.co.uk/"
                target="_blank"
                className=" website_link"
              >
                Website Link
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Enter;
