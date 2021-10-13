import * as React from "react";
import { motion } from "framer-motion";
import { ThemeContext } from "../../Themes";
import { useContext } from "react";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};
const skillsSec = window.visualViewport.height;
const contactSec = window.visualViewport.height * 4;

const colors = ["#03aee5", "#00FFFC", "#2BB673"];
let text = "";

export const NavItem = ({ props, i }: { i: any; props: any }) => {
  const { currentTheme } = useContext(ThemeContext);
  const checkHandler = (i: any) => {
    switch (i) {
      case 0:
        text = "Home";
        return text;

      case 1:
        text = "Skills";
        return text;

      case 2:
        text = "Contact Me";
        return text;
    }
  };

  const clickHandler = (i: any) => {
    switch (i) {
      case 0:
        return;
      case 1:
        window.scrollTo({ top: skillsSec, behavior: "smooth" });
        return;
      case 2:
        window.scrollTo({ top: contactSec, behavior: "smooth" });
        return;
    }
  };
  console.log(i);
  const style = {
    border: `2px solid ${colors[i]}`,
    display: "flex",
    justifyContent: "center",
    height: "8vh",
  };
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onTap={() => clickHandler(i)}
    >
      <div className="text-placeholder" style={style}>
        <p
          style={{
            color: `${currentTheme.text}`,
            alignSelf: "center",
            fontSize: "1.5vw",
          }}
        >
          {checkHandler(i)}
        </p>
      </div>
    </motion.li>
  );
};
