import React from "react";
import Board from "./Board";
import "./style.css";

// This is used by Storybook:
export default {
  title: "Checkers"
};

// This is the main app:
export const Checkers = () => {
  // base size
  return <Board size={400} />;
};
