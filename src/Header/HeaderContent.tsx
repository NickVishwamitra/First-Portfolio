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
import { useEffect } from "react";
const HeaderContent = (props: any) => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const { currentTheme, setTheme } = useContext(ThemeContext);
  const [iconColor, setIconColor] = useState("white");
  console.log(visualViewport.width);
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
    <div
      className="header"
      style={{
        backgroundImage: `url(${Background})`,
        backgroundColor: currentTheme.background,
      }}
    >
      <Navigtation openObject={{ isOpen, toggleOpen }} />

      {isOpen ? (
        <div className="offClick" onClick={() => toggleOpen()}></div>
      ) : null}
      <ImagesAndText></ImagesAndText>
      <NextPageBtn currentTheme={currentTheme}></NextPageBtn>

      {window.visualViewport.width > 1000 ? (
        <div className="iconContainer">
          <Speaker />
          <LightBulb />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default HeaderContent;
