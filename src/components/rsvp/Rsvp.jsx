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
        Kindly respond by February 14, 2026
      </motion.p>

      {/* Gifts & Celebrations */}
      <div id="gifts" className="rsvp_gifts">
        <motion.div variants={fadeUp} transition={{ delay: 0.7 }}>
          <h3 className="timeline_title gifts_title">Gifts &amp; Celebrations</h3>
        </motion.div>
        <motion.div
          className="rsvp_poem"
          variants={fadeUp}
          transition={{ delay: 0.8 }}
        >
          <p>The most important gift to us</p>
          <p>is having you share our day,</p>
          <p>but if you wish to give something more</p>
          <p>in a different way,</p>
          <br />
          <p>We’re grateful for your kindness,</p>
          <p>whatever you choose to do,</p>
          <p>whether it’s a thoughtful wedding gift</p>
          <p>or help towards our honeymoon too.</p>
          <br />
          <p>Whatever you decide to give,</p>
          <p>please know it means so much,</p>
          <p>and will be truly appreciated</p>
          <p>for your kindness and your touch.</p>
        </motion.div>

        <motion.a
          href="https://www.paypal.com/pool/9kOBQqw1TI?sr=wccr"
          target="_blank"
          rel="noreferrer"
          className="rsvp_paypal"
          variants={fadeUp}
          transition={{ delay: 1 }}
        >
          Contribute via PayPal
        </motion.a>
      </div>
    </motion.div>
  );
};

export default Rsvp;
