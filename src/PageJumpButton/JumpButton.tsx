import { motion } from "framer-motion";
import { useEffect } from "react";
import { useContext, useState } from "react";
import { theme, ThemeContext } from "../Themes";
import "./Jump.css";
import RocketShip from "./RocketShip";
const JumpButton = () => {
  const [scrolling, setScrolling] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);

  const { currentTheme } = useContext(ThemeContext);
  const [isClicked, setIsClicked] = useState(false);
  useEffect(() => {
    const onScroll = (e: any) => {
      setScrollTop(e.target.documentElement.scrollTop);
    };
    window.addEventListener("scroll", onScroll);
    console.log(scrollTop);
    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollTop]);
  return (
    <motion.div
      className="jumpButton"
      style={{
        backgroundColor: `${
          currentTheme == theme.dark ? "#212529" : theme.light.background
        }`,
      }}
      whileTap={{ scale: 0.9 }}
      onTap={() => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth",
        });
        setIsClicked(true);
        setTimeout(() => {
          setIsClicked(false);
        }, 1500);
      }}
      whileHover={{ scale: 1.1 }}
      initial={{ x: 350 }}
      animate={scrollTop > 100 ? { x: 0 } : ""}
    >
      <RocketShip
        className="rocket"
        currentTheme={currentTheme}
        isClicked={isClicked}
      />
    </motion.div>
  );
};

export default JumpButton;
