import { ThemeContext, theme } from "../Themes";
import { motion, useCycle } from "framer-motion";
import { useContext, useEffect } from "react";
import { useState } from "react";
import Logo from "../images/Javascript.png";
import "./SkillsPage.css";
const JavascriptPart = (props: any) => {
  const [isOpen, setIsOpen] = useState(false);

  const { openPart, setOpenPart } = props.openObject;
  useEffect(() => {
    if (openPart !== 2) {
      setIsOpen(false);
    }
  }, [openPart]);
  const { currentTheme } = useContext(ThemeContext);

  const variants = {
    closed: {
      width: "16.6%",
    },
    open: {
      width: "60%",
      transition: {
        duration: 0.5,
      },
    },
  };
  const clickHandler = () => {
    setIsOpen(!isOpen);
    setOpenPart(2);
  };
  return (
    <motion.div
      {...props}
      className="jsPart"
      onTap={clickHandler}
      variants={variants}
      initial="closed"
      animate={isOpen && openPart == 2 ? "open" : ""}
      style={{ backgroundColor: theme.dark.nav }}
    >
      <motion.img
        src={Logo}
        initial={{ x: 0, scale: 0.35 }}
        animate={isOpen ? { translateX: "-10vw" } : ""}
        transition={{ duration: 0.5 }}
      ></motion.img>
    </motion.div>
  );
};

export default JavascriptPart;
