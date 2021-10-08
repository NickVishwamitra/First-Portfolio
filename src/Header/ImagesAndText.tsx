import person from "../images/person.png";
import Background from "../images/background.png";
import "./Header.css";
import Table from "../images/table.png";
import HomeBoard from "../images/homeBackground.png";
import { motion } from "framer-motion";
import { Fragment } from "react";

import { ThemeContext } from "../Themes";
import { useContext } from "react";

const ImagesAndText = () => {
  const { currentTheme, setTheme } = useContext(ThemeContext);
  return (
    <Fragment>
      <motion.img
        src={Table}
        className="table"
        animate={{ x: "140%", opacity: [0, 100] }}
        transition={{ type: "spring", duration: 1, delay: 0.5 }}
      ></motion.img>
      <motion.img
        src={person}
        className="person"
        animate={{ x: "-120%", opacity: [0, 100] }}
        transition={{ type: "spring", duration: 1.25, delay: 1.5 }}
      ></motion.img>
      <motion.img
        src={HomeBoard}
        className="homeBoard"
        animate={{ y: "75%", opacity: [0, 100] }}
        transition={{ type: "spring", duration: 1, delay: 0.5 }}
      ></motion.img>

      <motion.div
        className="container"
        animate={{ opacity: [0, 100] }}
        transition={{ type: "tween", duration: 2, delay: 2.5 }}
      >
        <div style={{ display: "flex", gap: "3%" }}>
          <motion.p className="hello">Hello,</motion.p>
          <motion.p
            className="im"
            animate={{ opacity: [0, 100] }}
            transition={{ type: "tween", duration: 2, delay: 3.25 }}
            style={{ color: currentTheme.text }}
          >
            i'm
          </motion.p>
        </div>
        <motion.p
          className="name"
          animate={{ opacity: [0, 100] }}
          transition={{ type: "tween", duration: 2, delay: 3.25 }}
          style={{ color: currentTheme.text }}
        >
          Nick Vishwamitra
        </motion.p>
        <motion.p
          className="bio"
          animate={{ opacity: [0, 100] }}
          transition={{ type: "tween", duration: 2, delay: 4.5 }}
          style={{ color: currentTheme.text, lineHeight: "125%" }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eu sem
          neque. Orci varius natoque penatibus et magnis dis parturient montes,
          nascetur ridiculus mus. Mauris sit amet felis semper, consectetur
          metus at, laoreet arcu. Praesent laoreet interdum felis, sed blandit
          est laoreet at. Donec quis varius nibh. Suspendisse potenti. Etiam
          laoreet nec arcu a varius.
        </motion.p>
      </motion.div>
    </Fragment>
  );
};

export default ImagesAndText;