import React from "react";
import darkModeIcon from "../icons/darkMode.png";
import lightModeIcon from "../icons/lightMode.png";

const DarkMode = (props) => {
  const { mode, setMode } = props;
  return (
    <button className="fixed bottom-5 right-5 rounded-full z-10" onClick={()=>{mode === "light" ? setMode("dark") : setMode("light")}}>
      <img
        src={mode === "dark" ? lightModeIcon : darkModeIcon}
        alt="Dark Mode / Light Mode"
        className="w-14"
      />
    </button>
  );
};

export default DarkMode;
