import * as React from "react";
import { useRef } from "react";
import { motion, useCycle } from "framer-motion";
import { useDimensions } from "./use-dimensions";
import { MenuToggle } from "./MenuToggle";
import { NavContents } from "./NavContents";

import { theme, ThemeContext } from "../../Themes";
import { useContext } from "react";
import "./NavStyles.css";
const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(25px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

export const Navigtation = (props: any) => {
  const { currentTheme } = useContext(ThemeContext);

  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);
  const { isOpen, toggleOpen } = props.openObject;
  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
    >
      <motion.div
        className="background"
        variants={sidebar}
        style={{ backgroundColor: currentTheme.nav }}
      />
      <NavContents />
      <MenuToggle toggle={() => toggleOpen()} currentTheme={currentTheme} />
    </motion.nav>
  );
};
