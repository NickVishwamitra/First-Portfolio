import { ThemeContext } from "../Themes";
import { motion, useCycle } from "framer-motion";
import { useContext } from "react";
import { useState } from "react";
import Logo from "../images/mongo.png";
import "./SkillsPage.css";
import { useEffect } from "react";
const MongoPart = (props: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const { openPart, setOpenPart } = props.openObject;

  useEffect(() => {
    if (openPart !== 6) {
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
    setOpenPart(6);
  };
  return (
    <motion.div
      {...props}
      className="reactPart"
      onTap={clickHandler}
      variants={variants}
      initial="closed"
      animate={isOpen && openPart == 6 ? "open" : ""}
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

export default MongoPart;
