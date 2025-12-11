import "./s.css";
import str from "../../assets/couple3.jpg";
import tr from "../../assets/details.jpg";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

const Story = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);

  const inView1 = useInView(ref1, { once: true, margin: "-150px" });
  const inView2 = useInView(ref2, { once: true, margin: "-150px" });

  // Unique animations
  const zoomFade = {
    hidden: { opacity: 0, scale: 1.1 },
    show: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  const slideRight = {
    hidden: { opacity: 0, x: 80 },
    show: { opacity: 1, x: 0, transition: { duration: 0.9, ease: "easeOut" } },
  };

  const slideLeft = {
    hidden: { opacity: 0, x: -80 },
    show: { opacity: 1, x: 0, transition: { duration: 0.9, ease: "easeOut" } },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
  };

  const titleFade = {
    hidden: { opacity: 0, letterSpacing: "5px" },
    show: {
      opacity: 1,
      letterSpacing: "0px",
      transition: { duration: 1.1, ease: "easeOut" },
    },
  };

  return (
    <div className="story">
      {/* FIRST BLOCK */}
      <div ref={ref1} className="story_grid oo">
        {/* Left Image - zoom fade */}
        <motion.div
          className="story_sub"
          variants={zoomFade}
          initial="hidden"
          animate={inView1 ? "show" : "hidden"}
        >
          <img src={str} alt="" className="story_img story_img_top" />
        </motion.div>

        {/* Text - slide right */}
        <motion.div
          className="story_sub ui"
          variants={slideRight}
          initial="hidden"
          animate={inView1 ? "show" : "hidden"}
        >
          <motion.h2
            className="strory_title"
            variants={titleFade}
            initial="hidden"
            animate={inView1 ? "show" : "hidden"}
          >
            our story
          </motion.h2>

          <motion.p
            className="story_p"
            variants={fadeUp}
            initial="hidden"
            animate={inView1 ? "show" : "hidden"}
          >
            David and Katy first crossed paths 21 years ago when David walked
            into the barbershop and Katy happened to be the one to cut his
            hair. That chance moment turned into years of staying in touch,
            growing closer, and building a bond that always found its way back
            to them.
            <br />
            <br />
            Three years ago, their story found a new chapter—one filled with
            laughter, adventures, and creating a business together. Every step
            since has led them to this moment. They are so excited to celebrate
            our wedding day with the people who mean the most to them, right
            here at their home, Redlands Breaks.
          </motion.p>
        </motion.div>
      </div>

      {/* SECOND BLOCK */}
      <div ref={ref2} className="story_grid ooo">
        {/* Details Text - fade up */}
        <motion.div
          className="story_sub mi"
          variants={fadeUp}
          initial="hidden"
          animate={inView2 ? "show" : "hidden"}
        >
          <motion.h2
            className="strory_title qa"
            variants={titleFade}
            initial="hidden"
            animate={inView2 ? "show" : "hidden"}
          >
            details
          </motion.h2>

          <motion.div
            className="story_detail_grid"
            variants={fadeUp}
            initial="hidden"
            animate={inView2 ? "show" : "hidden"}
          >
            <div className="story_grid_ul toper">
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
           Relaxed country attire (festival wedding). Flat shoes recommended.
                </li>
              </ul>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Image - slide left */}
        <motion.div
          className="story_sub"
          variants={slideLeft}
          initial="hidden"
          animate={inView2 ? "show" : "hidden"}
        >
          <img
            src="https://res.cloudinary.com/dhisaijz3/image/upload/v1764736702/lake_yb42vn.jpg"
            alt=""
            className="story_img"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Story;
