import "./SkillsPage.css";
import { ThemeContext } from "../Themes";
import { useContext } from "react";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import ReactPart from "./ReactPart";
import { motion } from "framer-motion";
import JavascriptPart from "./JavascriptPart";
import { useState } from "react";
import CssPart from "./CssPart";
import HtmlPart from "./HtmlPart";
import EthereumPart from "./EthereumPart";
import MongoPart from "./MongoPart";
const SkillsPage = () => {
  const { currentTheme } = useContext(ThemeContext);
  const [openPart, setOpenPart] = useState(0);
  return (
    <div className="page" style={{ background: currentTheme.background }}>
      <div className="containerWrap">
        <div
          className="skillsContainer"
          //   style={{ background: currentTheme.background }}
        >
          <ReactPart openObject={{ openPart, setOpenPart }} />
          <div className="separator"></div>
          <JavascriptPart openObject={{ openPart, setOpenPart }} />
          <div className="separator"></div>
          <CssPart openObject={{ openPart, setOpenPart }} />
          <div className="separator"></div>
          <HtmlPart openObject={{ openPart, setOpenPart }} />
          <div className="separator"></div>
          <EthereumPart openObject={{ openPart, setOpenPart }} />
          <div className="separator"></div>
          <MongoPart openObject={{ openPart, setOpenPart }} />
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;
