import React, { useRef, useState } from "react";
import "./App.css";
import { Fragment } from "react";
import HeaderContent from "./Header/HeaderContent";
import ThemeProvider from "./Themes";
import ContactMe from "./Contact/ContactMe";
import JumpButton from "./PageJumpButton/JumpButton";
import SkillsPage from "./SkillsPage/SkillsPage";
export const APP_ID = "realm-app-tilbf";

function App() {
  return (
    <div style={{ width: "100%" }}>
      <ThemeProvider props={null}>
        <JumpButton />
        <HeaderContent />
        <SkillsPage />
        <ContactMe></ContactMe>
      </ThemeProvider>
    </div>
  );
}

export default App;
