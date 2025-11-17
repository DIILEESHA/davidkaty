import "./e.css";
import heater from "../../assets/heat.jpg";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Enter = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-150px" });

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: "easeOut" } },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 1, ease: "easeOut" } },
  };

  const zoomIn = {
    hidden: { opacity: 0, scale: 1.1 },
    show: { opacity: 1, scale: 1, transition: { duration: 1, ease: "easeOut" } },
  };

  return (
    <div className="enter">
      <motion.div
        ref={ref}
        className="enter_middle"
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        variants={fadeIn}
      >
        <motion.h2 className="timeline_title" id="where-to-stay" variants={fadeUp}>
          where to stay
        </motion.h2>

        <motion.p className="enter_p width_cut" variants={fadeUp} transition={{ delay: 0.2 }}>
          Guests are more than welcome to stay on-site at Redlands Breaks! You
          can either: Please contact David and Katy if you’d like to stay
          on-site. For those preferring local accommodation, here are nearby
          options:
        </motion.p>

        <div className="enter_grid">
          <motion.div className="enter_subs" variants={zoomIn} transition={{ delay: 0.3 }}>
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
          </motion.div>

          <motion.div className="enter_subs" variants={zoomIn} transition={{ delay: 0.5 }}>
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
          </motion.div>
        </div>
      </motion.div>

      {/* Entertainment Section */}
      <motion.div
        className="enter_middle"
        id="band"
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        variants={fadeIn}
        transition={{ delay: 0.6 }}
      >
        <motion.h2 className="timeline_title" variants={fadeUp}>
          Entertainment
        </motion.h2>

        <motion.p className="enter_p" variants={fadeUp} transition={{ delay: 0.2 }}>
          We have lined up an amazing selection of entertainment for our big
          day!
        </motion.p>

        <div className="enter_grid">
          <motion.div className="enter_subs" variants={zoomIn} transition={{ delay: 0.3 }}>
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
          </motion.div>

          <motion.div className="enter_subs" variants={zoomIn} transition={{ delay: 0.5 }}>
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
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Enter;
