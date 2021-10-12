import zIndex from "@material-ui/core/styles/zIndex";
import { animate, motion, useCycle } from "framer-motion";
import { useEffect } from "react";
import { useState, useContext } from "react";
import { theme, ThemeContext } from "../Themes";
const Speaker = (props: any) => {
  const { currentTheme } = useContext(ThemeContext);
  const [stroke, setStroke] = useState("#FFFF");
  const { soundIsOn, toggleSoundIsOn } = props.soundIsOnObj;
  useEffect(() => {
    if (currentTheme == theme.light) {
      setStroke("#000");
    } else setStroke("#FFF");
  });

  const pathVariants = {
    soundOn: {
      opacity: 1,
    },
    soundOff: {
      x: -60,
      opacity: 0,
    },
  };

  const tapHandler = () => {
    toggleSoundIsOn();
  };

  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width="192"
      height="192"
      fill="#000000"
      viewBox="0 0 256 256"
      onTap={tapHandler}
      whileTap={{ scale: 0.8, x: "-70%" }}
      style={{ zIndex: 4, cursor: "pointer" }}
    >
      <rect width="256" height="256" fill="none"></rect>
      <motion.path
        d="M218.88231,77.08831a72,72,0,0,1,0,101.82338"
        fill="none"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
        variants={pathVariants}
        initial="soundOn"
        animate={soundIsOn ? "soundOn" : "soundOff"}
        transition={{ delay: 0.1 }}
      ></motion.path>
      <path
        d="M80,168H32a8,8,0,0,1-8-8V96a8,8,0,0,1,8-8H80l72-56V224Z"
        fill="none"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      ></path>
      <line
        x1="80"
        y1="88"
        x2="80"
        y2="168"
        fill="none"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      ></line>
      <motion.path
        d="M190.59793,105.37258a32,32,0,0,1,0,45.25484"
        fill="none"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
        variants={pathVariants}
        initial="soundOn"
        animate={soundIsOn ? "soundOn" : "soundOff"}
      ></motion.path>
    </motion.svg>
  );
};

export default Speaker;
