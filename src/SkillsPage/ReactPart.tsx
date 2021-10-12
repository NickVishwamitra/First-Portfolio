import { theme, ThemeContext } from "../Themes";
import { motion, useCycle } from "framer-motion";
import { useContext } from "react";
import { useState } from "react";
import Logo from "../images/React.png";
import "./SkillsPage.css";
import { useEffect } from "react";
const ReactPart = (props: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const { openPart, setOpenPart } = props.openObject;

  useEffect(() => {
    if (openPart !== 1) {
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
  const hiddenVariants = {
    hidden: {
      opacity: "0%",
    },
    shown: {
      opacity: "100%",
    },
  };
  const clickHandler = () => {
    setIsOpen(!isOpen);
    setOpenPart(1);
  };
  return (
    <motion.div
      {...props}
      className="reactPart"
      onTap={clickHandler}
      variants={variants}
      initial="closed"
      animate={isOpen && openPart == 1 ? "open" : ""}
      style={{ backgroundColor: `${theme.dark.nav}` }}
    >
      <motion.img
        src={Logo}
        initial={{ x: 0, scale: 0.15 }}
        animate={isOpen ? { translateX: "-10vw" } : ""}
        transition={{ duration: 0.5 }}
      ></motion.img>

      <motion.div
        className="reactItems"
        variants={hiddenVariants}
        initial="hidden"
        animate={isOpen ? "shown" : ""}
        transition={{ duration: 1 }}
      >
        <motion.p
          style={{
            fontSize: "3.25em",
            marginLeft: "15%",
            textDecoration: "underline",
          }}
        >
          React
        </motion.p>
        <motion.div>
          <motion.p
            initial="hidden"
            animate={isOpen ? "shown" : ""}
            style={{
              marginTop: "10%",
              marginLeft: "15%",
              fontWeight: 600,
              fontSize: "1.25em",
            }}
          >
            Concepts:
          </motion.p>
          <motion.div
            style={{
              marginTop: "10%",
              margin: "5% 15%",
              color: "white",
              display: "flex",
              flexDirection: "column",
              gap: "1vh",
              width: "100%",
              fontSize: "1em",
            }}
          >
            <motion.p style={{ fontWeight: 400 }}>JSX</motion.p>
            <motion.p style={{ fontWeight: 400 }}>State</motion.p>
            <motion.p style={{ fontWeight: 400 }}>Context</motion.p>
            <motion.p style={{ fontWeight: 400 }}>
              React + Custom Hooks
            </motion.p>
            <motion.p style={{ fontWeight: 400 }}>Props</motion.p>
          </motion.div>
        </motion.div>
        <div>
          <motion.p
            initial="hidden"
            animate={isOpen ? "shown" : ""}
            style={{
              marginTop: "5%",
              marginLeft: "15%",
              fontWeight: 600,
              fontSize: "1.25em",
            }}
          >
            Libraries:
          </motion.p>
          <div style={{ display: "flex" }}>
            <p style={{ marginLeft: "15%", marginTop: "5%", color: "white" }}>
              Framer Motion
            </p>
            <img
              src="https://www.vectorlogo.zone/logos/framer/framer-icon.svg"
              style={{
                transform: "scale(0.8)",
                width: "10%",
                marginLeft: "0.5em",
                marginTop: "0.8em",
              }}
            ></img>
          </div>
          <div style={{ display: "flex" }}>
            <p style={{ marginLeft: "15%", marginTop: "5%", color: "white" }}>
              Material-UI
            </p>
            <img
              src="https://cdn.worldvectorlogo.com/logos/material-ui-1.svg"
              style={{
                transform: "scale(1)",
                width: "10%",
                marginLeft: "2.25em",
                marginTop: "0.5em",
              }}
            ></img>
          </div>
          <div style={{ display: "flex" }}>
            <p
              style={{ marginLeft: "15%", marginTop: "1.25em", color: "white" }}
            >
              AntDesign
            </p>
            <img
              src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
              style={{
                transform: "scale(1)",
                width: "10%",
                marginLeft: "2.25em",
                marginTop: "0.5em",
              }}
            ></img>
          </div>
          <div style={{ display: "flex" }}>
            <p
              style={{ marginLeft: "15%", marginTop: "1.25em", color: "white" }}
            >
              Redux
            </p>
            <img
              src="https://redux.js.org/img/redux.svg"
              style={{
                transform: "scale(1)",
                width: "10%",
                marginLeft: "4.25em",
                marginTop: "0.5em",
              }}
            ></img>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ReactPart;
