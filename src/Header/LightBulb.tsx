import { animate, motion, useCycle } from "framer-motion";
import { useState, useContext } from "react";
import { theme, ThemeContext } from "../Themes";
import useSound from "use-sound";
import lightSfx from "../Sounds/light.mp3";
const LightBulb = (props: any) => {
  const { currentTheme, setTheme } = useContext(ThemeContext);
  const [stroke, toggleStroke] = useCycle("#FFFF", "#000");
  const [isLight, toggleIsLight] = useCycle(false, true);
  const [play] = useSound(lightSfx);
  const soundIsOn = props.soundIsOn;

  const variants = {
    dark: {
      fill: "none",
    },
    light: {
      fill: "#ffd43b",
      transition: {
        duration: 3,
      },
    },
  };

  const themeHandler = () => {
    if (currentTheme == theme.dark) {
      toggleStroke();
      setTheme(theme.light);
      toggleIsLight();
    } else {
      setTheme(theme.dark);
      toggleStroke();
      toggleIsLight();
    }
    if (soundIsOn) {
      play();
    }
  };

  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width="192"
      height="192"
      viewBox="0 0 256 256"
      whileTap={{ scale: 0.8, x: "-70%" }}
      onTap={themeHandler}
      style={{ cursor: "pointer" }}
    >
      <rect width="256" height="256" fill="none"></rect>
      <line
        x1="88"
        y1="232"
        x2="168"
        y2="232"
        fill="none"
        stroke={stroke}
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      ></line>
      <motion.path
        d="M78.7037,167.0114a79.86051,79.86051,0,0,1-30.70248-62.55993C47.76161,61.08915,82.72,25.04306,126.071,24.02272a80.00322,80.00322,0,0,1,51.34165,142.89737,24.288,24.288,0,0,0-9.4124,19.05581l-.00009,6.02422a8,8,0,0,1-8,7.99988H95.99984a8,8,0,0,1-8-7.99986l-.0001-6.0311A24.10047,24.10047,0,0,0,78.7037,167.0114Z"
        fill="none"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
        variants={variants}
        initial="dark"
        animate={isLight ? "light" : ""}
      ></motion.path>
      <path
        d="M136.12232,56.784A47.923,47.923,0,0,1,175.327,95.94041"
        fill="none"
        stroke={stroke}
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      ></path>
    </motion.svg>
  );
};
export default LightBulb;
