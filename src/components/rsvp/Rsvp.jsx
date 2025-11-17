import "./r.css";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Rsvp = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-150px" });

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: "easeOut" } },
  };

  const zoomIn = {
    hidden: { opacity: 0, scale: 1.2 },
    show: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 1, ease: "easeOut" } },
  };

  return (
    <motion.div
      ref={ref}
      className="rsvp"
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      variants={fadeIn}
    >
      {/* Title */}
      <motion.h2 className="rsvp_title" variants={fadeUp}>
        RSVP
      </motion.h2>

      {/* Paragraph */}
      <motion.p
        className="rsvp_p"
        variants={fadeUp}
        transition={{ delay: 0.2 }}
      >
        Please let us know if you’ll be joining us on our special day. To RSVP,
        press the button below.
      </motion.p>
      <br />
      <br />
      {/* Button */}
      <motion.a
        href="rsvp"
        className="rsvp_btn"
        variants={zoomIn}
        transition={{ delay: 0.4 }}
      >
        RSVP Here
      </motion.a>
      <br />
      <br />
      <br />
      {/* Bottom text */}
      <motion.p
        className="rsvp_p"
        variants={fadeUp}
        transition={{ delay: 0.6 }}
      >
        Kindly respond by January 15, 2026
      </motion.p>
    </motion.div>
  );
};

export default Rsvp;
