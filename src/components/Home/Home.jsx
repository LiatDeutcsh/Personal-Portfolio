import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
// Router
import { Link } from "react-scroll";
import "./home.css";
//Emoji
import emoji from "react-easy-emoji";

import Pdf from "../../assets/LiatDeutcsh--CV.pdf";

const contentVariants = {
  initial: {
    translateX: "-100vw",
    opacity: 0,
  },

  animate: {
    translateX: "0vw",
    opacity: 1,
    transition: {
      duration: 2,
      when: "beforeChildren",
    },
  },
};

const childrenVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },

  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      type: "spring",
      delay: 0.5,
    },
  },

  exit: {
    opacity: 0,
    y: -200,
    transition: { duration: 0.2 },
  },
};

const Home = () => {
  // State
  const [showHeadingOne, setShowHeadingOne] = useState(true);
  const [showHeadingTwo, setShowHeadingTwo] = useState(false);
  const [showHeadingThree, setShowHeadingThree] = useState(false);

  // Timeout
  useEffect(() => {
    setTimeout(() => {
      if (showHeadingOne) {
        setShowHeadingOne(false);
        setShowHeadingThree(false);
        setShowHeadingTwo(true);
      } else if (showHeadingTwo) {
        setShowHeadingOne(false);
        setShowHeadingTwo(false);
        setShowHeadingThree(true);
      } else {
        setShowHeadingOne(true);
        setShowHeadingTwo(false);
        setShowHeadingThree(false);
      }
    }, 3000);
  }, [showHeadingOne, showHeadingTwo]);

  return (
    <section className="home-container" id="home" name="home">
      <motion.div
        className="content-container"
        variants={contentVariants}
        initial="initial"
        animate="animate"
      >
        {/* <h4 className="welcome-content">WELCOME</h4> */}
        <br />
        <h1 className="main-heading">
          Hi, I’m Liat
        </h1>
        {/* Animate Skill Content */}
        <div className="skill-animation">
          <AnimatePresence>
            {showHeadingOne && (
              <motion.h2
                className="skill-content"
                variants={childrenVariants}
                exit="exit"
                animate="animate"
                initial="initial"
              >
                Junior Fullstack Developer
              </motion.h2>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {showHeadingTwo && (
              <motion.h2
                className="skill-content"
                variants={childrenVariants}
                exit="exit"
                animate="animate"
                initial="initial"
              >
                <p>{emoji(" 👋")}</p>
              </motion.h2>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {showHeadingThree && (
              <motion.h2
                className="skill-content"
                variants={childrenVariants}
                exit="exit"
                animate="animate"
                initial="initial"
              >
                <p>{emoji(" ✨")}</p>
              </motion.h2>
            )}
          </AnimatePresence>
        </div>
        {/* // */}
        <Link
          id="homeBtn1"
          className="button home-btn"
          to={"portfolio"}
          hashSpy={true}
          spy={true}
          smooth={true}
          delay={100}
          offset={-100}
          duration={500}
        >
          <span>See My Work</span>
          <div className="liquid"></div>
        </Link>

        <a
          id="homeBtn1"
          className="button home-btn"
          delay={100}
          offset={-100}
          duration={500}
          href={Pdf}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>Download Resume</span>
          <div className="liquid"></div>
        </a>
      </motion.div>

      <motion.div
        className="container"
      >
        <div class="area" >
            <ul class="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>
    </div >
      </motion.div>
     
    </section>
  );
};

export default Home;
