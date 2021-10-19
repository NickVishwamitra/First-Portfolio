import "./Contact.css";
import { useContext, useEffect } from "react";
import { theme, ThemeContext } from "../Themes";
// import Box from "@mui/material/Box";
import { styled, TextField } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import { useState, useRef } from "react";
import { PaperPlaneRight } from "phosphor-react";
import { motion } from "framer-motion";
import Submitted from "./Submitted";
import axios from "axios";

// const { MongoClient } = require("mongodb");

// // Replace the following with your Atlas connection string
// const url =
//   "mongodb+srv://Nickv123:Neewer0123@cluster0.xgxas.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
// const client = new MongoClient(url);
// const dbName = "PortfolioMessages";

// const contactInfoAdd = async function (
//   name: string,
//   email: string,
//   comment: string
// ) {
//   try {
//     await client.connect();
//     console.log("Connected correctly to server");
//     const db = client.db(dbName);

//     const col = db.collection("messages");

//     let messageDocument = {
//       name: { name },
//       email: { email },
//       comment: { comment },
//     };

//     const p = await col.insertOne(messageDocument);
//     const myDoc = await col.findOne();
//   } catch (err: any) {
//     console.log(err.stack);
//   }
// };

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
  const [submitted, setIsSubmitted] = useState(false);
  const [currentName, setName] = useState("");
  const [currentEmail, setEmail] = useState("");
  const [currentComment, setComment] = useState("");
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
  console.log(currentComment, currentEmail, currentName);

  useEffect(() => {
    const newContact = {
      name: currentName,
      email: currentEmail,
      comment: currentComment,
    };

    if (currentName)
      axios
        .post("https://damp-spire-33780.herokuapp.com/record/add", newContact)
        .then((res) => console.log(res.data));
  }, [currentName]);

  const SubmitHandler = () => {
    setName(nameForm.current!.value);
    setEmail(emailForm.current!.value);
    setComment(commentForm.current!.value);

    setIsSubmitted(true);
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
      <motion.div
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
        {submitted ? <Submitted submitted={submitted} /> : null}
        <motion.div
          animate={submitted ? { display: "none" } : ""}
          transition={{ duration: 0.5 }}
        >
          <form
            style={{ display: "flex", flexDirection: "column", gap: "2.25vh" }}
          >
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
                endIcon={<PaperPlaneRight />}
                style={{ padding: "1.5em 3.5em", marginLeft: "36vw" }}
              >
                <motion.p style={{ fontSize: "1em" }}>Submit</motion.p>
              </SendButton>
            </div>
          </form>
        </motion.div>
      </motion.div>
    </div>
  );
};
export default ContactMe;
