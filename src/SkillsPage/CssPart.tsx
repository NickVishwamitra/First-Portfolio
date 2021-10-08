import { ThemeContext } from "../Themes";
import { motion, useCycle } from "framer-motion";
import { useContext, useEffect } from "react";
import { useState } from "react";
import Logo from "../images/CSS.png";
import LogoHTML from "../images/HTML.png";
import "./SkillsPage.css";
const CssPart = (props: any) => {
  const [isOpen, setIsOpen] = useState(false);

  const { openPart, setOpenPart } = props.openObject;
  useEffect(() => {
    if (openPart !== 3) {
      setIsOpen(false);
    }
  }, [openPart]);
  const { currentTheme } = useContext(ThemeContext);

  const variants = {
    closed: {
      width: "16.6%",
      backgroundColor: currentTheme.nav,
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
    setOpenPart(3);
  };
  return (
    <motion.div
      {...props}
      className="jsPart"
      onTap={clickHandler}
      variants={variants}
      initial="closed"
      animate={isOpen && openPart == 3 ? "open" : ""}
    >
      <motion.img
        src={Logo}
        initial={{ x: 0, scale: 0.28 }}
        animate={isOpen ? { translateX: "-10vw" } : ""}
        transition={{ duration: 0.5 }}
      ></motion.img>
    </motion.div>
  );
};

export default CssPart;
