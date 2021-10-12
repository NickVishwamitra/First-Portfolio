import "./Contact.css";
import { useContext } from "react";
import { theme, ThemeContext } from "../Themes";
// import Box from "@mui/material/Box";
import { styled, TextField } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import { useState, useRef } from "react";
import { PaperPlaneRight } from "phosphor-react";
import { motion } from "framer-motion";
const SendButton = styled(LoadingButton)({
  " &.MuiButton-root": {
    fontSize: "1.25rem",
    backgroundColor: "#05afe1",
    color: "white",
    padding: "2% 10%",
  },
});

const ContactMe = (props: any) => {
  const [isLoading, setIsLoading] = useState(false);
  const nameForm = useRef<any>();
  const emailForm = useRef<any>();
  const commentForm = useRef<any>();

  const { currentTheme } = useContext(ThemeContext);

  let color = "";
  if (currentTheme == theme.dark) {
    color = "#212529";
  } else {
    color = theme.light.background;
  }

  const SubmitHandler = () => {
    console.log(nameForm.current!.value);
    console.log(emailForm.current!.value);
    console.log(commentForm.current!.value);
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  const MyCssTextField = styled(TextField)({
    "& label ": {
      color: `${currentTheme == theme.dark ? "white" : "black"}`,
    },

    "& label.Mui-focused": {
      color: "#05afe1",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#05afe1",
    },
    "& .MuiOutlinedInput-root": {
      color: `${currentTheme == theme.dark ? "white" : "black"}`,
      "& fieldset": {
        borderColor: `${currentTheme === theme.dark ? "white " : "black"}`,
      },
      "&:hover fieldset": {
        borderColor: ` #05afe1`,
      },
      "&.Mui-focused fieldset": {
        borderColor: "#05afe1s",
        boxShadow: "0px 2px 0px 1px #05afe1",
      },
    },
  });

  return (
    <div className="contactPage">
      <div
        className="contactBox"
        style={{ backgroundColor: `${color}` }}
        key={2}
      >
        <p
          className="contactText"
          style={{ marginBottom: "8%", color: "#05afe1" }}
        >
          CONTACT ME 😀
        </p>
        <MyCssTextField
          inputRef={nameForm}
          label="Name"
          style={{ marginRight: "20em" }}
          required
        ></MyCssTextField>

        <MyCssTextField
          label="Email"
          fullWidth
          required
          name="email"
          inputRef={emailForm}
        ></MyCssTextField>
        <MyCssTextField
          label="Comments"
          fullWidth
          required
          multiline
          inputRef={commentForm}
          // disabled={isDisabled}
          rows={8}
        ></MyCssTextField>
        <div className="buttonContainer">
          <SendButton
            color="primary"
            className="sendButton"
            onClick={SubmitHandler}
            loading={isLoading}
            loadingPosition="end"
            endIcon={<PaperPlaneRight />}
            style={{ padding: "1.5em 3.5em", marginLeft: "36vw" }}
          >
            <motion.p style={{ fontSize: "1em" }}>Submit</motion.p>
          </SendButton>
        </div>
      </div>
    </div>
  );
};
export default ContactMe;
