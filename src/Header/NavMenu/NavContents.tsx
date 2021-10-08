import * as React from "react";
import { motion } from "framer-motion";
import { NavItem } from "./NavItem";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

export const NavContents = () => (
  <motion.ul variants={variants}>
    {itemIds.map((i) => (
      <NavItem i={i} key={i} />
    ))}
  </motion.ul>
);

const itemIds = [0, 1, 2, 3, 4];
