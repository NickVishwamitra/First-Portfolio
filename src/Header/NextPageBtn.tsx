import { KeyboardArrowDown } from "@material-ui/icons";
import { motion } from "framer-motion";

const NextPageBtn = (props: any) => {
  const pix = window.visualViewport.height;
  return (
    <motion.div
      className="nextPgContainer"
      animate={{ y: [-8, 0, -8] }}
      transition={{ duration: 2, loop: Infinity }}
      onClick={() => {
        window.scrollTo({ top: pix, behavior: "smooth" });
      }}
      style={{ color: props.currentTheme.text }}
    >
      <p>Next Page</p>
      <KeyboardArrowDown style={{ transform: "scale(2)" }}></KeyboardArrowDown>
    </motion.div>
  );
};

export default NextPageBtn;
