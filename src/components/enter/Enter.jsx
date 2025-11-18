import "./e.css";
import heater from "../../assets/heat.jpg";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

// ⭐ Lightweight Scroll Trigger Hook
const useScroll = () => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return [ref, visible];
};

// ⭐ Super-light animation
const fade = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Enter = () => {
  const [ref, show] = useScroll();

  return (
    <div className="enter" ref={ref}>
      {/* WHERE TO STAY */}
      <motion.div
        className="enter_middle"
        initial="hidden"
        animate={show ? "show" : "hidden"}
        variants={fade}
      >
        <h2 className="timeline_title" id="where-to-stay">Where to stay</h2>

        <p className="enter_p width_cut">
          Guests are welcome to stay on-site at Redlands Breaks. Contact David
          and Katy if you’d like to stay there. For those preferring local
          accommodation, here are nearby options:
        </p>

        <div className="enter_grid">
          <motion.div className="enter_subs" variants={fade}>
            <img
              src="https://www.crownhotelblandford.co.uk/wp-content/uploads/sites/3/2023/09/DSC_3341.jpg?format=auto&width=1920"
              className="enter_band_img"
              alt=""
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
                Website Link
              </a>
            </button>
          </motion.div>

          <motion.div className="enter_subs" variants={fade}>
            <img
              src="https://plumbermanor.co.uk/wp-content/uploads/2018/01/summer-gardens-min.jpg"
              className="enter_band_img"
              alt=""
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
                Website Link
              </a>
            </button>
          </motion.div>
        </div>

        <p className="enter_p width_cut">
          A bus will run from central Blandford to the venue and back. It leaves
          Morrison car park at 5:30 PM and returns from Redlands at 11:00 PM.
        </p>
      </motion.div>

      {/* ENTERTAINMENT */}
      <motion.div
        className="enter_middle"
        id="band"
        initial="hidden"
        animate={show ? "show" : "hidden"}
        variants={fade}
      >
        <h2 className="timeline_title">Entertainment</h2>

        <p className="enter_p">
          We have lined up an amazing selection of entertainment for our big day!
        </p>

        <div className="enter_grid dotss">
          <motion.div className="enter_subs" variants={fade}>
            <img src={heater} alt="" className="enter_band_img" />
            <h2 className="band_name">The Hype Band</h2>
            <p className="band_more">
              An energetic band delivering high-energy performances.
            </p>
            <button className="view">
              <a
                href="https://www.thehypeband.co.uk/"
                target="_blank"
                className="website_link"
              >
                Website Link
              </a>
            </button>
          </motion.div>

          <motion.div className="enter_subs" variants={fade}>
            <div className="img_grid">
              <div className="img_sub_grid">
                <img
                  src="https://www.pastiche.org.uk/wp-content/uploads/2025/02/MirrorMenkCYpTuZupzOMtkmfYumSAkq.jpeg"
                  className="other_img"
                />
              </div>
              <div className="img_sub_grid">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGZ8VYInxzPMmtHv2i81AZcEOk5pqCfXKS2Q&s"
                  className="other_img"
                />
              </div>
              <div className="img_sub_grid">
                <img
                  src="https://www.womangettingmarried.com/wp-content/uploads/2025/02/minimalist-wedding-photobooth-683x1024.jpg"
                  className="other_img"
                />
              </div>
              <div className="img_sub_grid">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh_rs-OFpoWP553jOVQ7A5KAfpvDAK-jTRtazD8WRlK3Y5KV5TcSaXx4jKelUSCW4gdVc&usqp=CAU"
                  className="other_img"
                />
              </div>
              <div className="img_sub_grid">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcGPDokQGSSNwcRMtLnSOurX92saxt7eAMGw&s"
                  className="other_img"
                />
              </div>
              <div className="img_sub_grid">
                <img
                  src="https://thumbs.dreamstime.com/b/amazing-fire-show-night-festival-wedding-party-fire-da-amazing-fire-show-night-festival-wedding-party-fire-117880520.jpg"
                  className="other_img"
                />
              </div>
            </div>
            <h2 className="band_name">Other Entertainment</h2>
            <p className="band_more">
Evening fun includes Mirror Men, Bucking Bronco, Photo Booth, Character Man, Wendy Sax, and Fire Dancers.
            </p>
          </motion.div>

          <motion.div className="enter_subs" variants={fade}>
            <img
              src="https://img.warble-entertainment.com//689/the-hype10.jpg"
              className="enter_band_img"
            />
            <h2 className="band_name">The Nashville Heat</h2>
            <p className="band_more">
              A talented group blending soulful melodies and vibrant rhythms.
            </p>
            <button className="view">
              <a
                href="http://www.thenashvilleheat.co.uk/"
                target="_blank"
                className="website_link"
              >
                Website Link
              </a>
            </button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Enter;
