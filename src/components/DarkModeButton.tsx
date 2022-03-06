import React, { useContext, useEffect } from "react";
import { FaRegMoon, FaRegSun } from "react-icons/fa";
import ThemeContext from "../context/ThemeContext/ThemeProvider";
const DarkModeButton = () => {
  const { theme, toggle } = useContext<any>(ThemeContext);
  console.log({ theme });
  return (
    <div
      title="Toggle theme"
      onClick={toggle}
      className="cursor-pointer flex justify-center items-center mx-4  rounded-full text-button"
    >
      {theme !== "dark" ? <FaRegMoon size={30} /> : <FaRegSun size={30} />}
    </div>
  );
};

export default DarkModeButton;
