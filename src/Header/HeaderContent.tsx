import Background from "../images/background.png";
import "./Header.css";
import { useCycle } from "framer-motion";
import { Navigtation } from "./NavMenu/Navigation";
import ImagesAndText from "./ImagesAndText";
import NextPageBtn from "./NextPageBtn";
import { theme, ThemeContext } from "../Themes";
import { useContext } from "react";
import { useState } from "react";
import Speaker from "./Speaker";
import LightBulb from "./LightBulb";
import Intro from "../images/introLogo.gif";
import { motion } from "framer-motion";
import { Fragment } from "react";
const HeaderContent = (props: any) => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const { currentTheme, setTheme } = useContext(ThemeContext);
  const [iconColor, setIconColor] = useState("white");
  const [soundIsOn, toggleSoundIsOn] = useCycle(true, false);
  const [done, setDone] = useState(false);

  setTimeout(() => {
    setDone(true);
  }, 5000);
  const toggleTheme = () => {
    if (currentTheme == theme.dark) {
      setTheme(theme.light);
      setIconColor("black");
    } else {
      setTheme(theme.dark);
      setIconColor("black");
    }
  };
  return (
    <Fragment>
      <div
        className="header"
        style={{
          backgroundImage: `url(${Background})`,
          backgroundColor: currentTheme.background,
        }}
      >
        <motion.img
          src={Intro}
          style={{
            height: "100vh",
            width: "100vw",
            zIndex: 8,
            display: done ? "none" : "",
          }}
          animate={{ opacity: 0 }}
          transition={{ delay: 5 }}
        />
        <Navigtation openObject={{ isOpen, toggleOpen }} />

        {isOpen ? (
          <div className="offClick" onClick={() => toggleOpen()}></div>
        ) : null}
        <ImagesAndText></ImagesAndText>
        <NextPageBtn currentTheme={currentTheme}></NextPageBtn>

        <div className="iconContainer">
          <Speaker
            classname="speaker"
            soundIsOnObj={{ soundIsOn, toggleSoundIsOn }}
          />
          <LightBulb soundIsOn={soundIsOn} />
        </div>
      </div>
    </Fragment>
  );
};

export default HeaderContent;
