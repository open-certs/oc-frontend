import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext/ThemeProvider";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { IoSunny } from "react-icons/io5";

const DarkModeButton = () => {
  const { theme, toggle } = useContext<any>(ThemeContext);
  //console.log({ theme });
  return (
    <div
      title="Toggle theme"
      onClick={toggle}
      className="cursor-pointer flex justify-center items-center mx-4  rounded-full text-button"
    >
      {theme !== "dark" ? (
        <BsFillMoonStarsFill size={20} />
      ) : (
        <IoSunny size={20} />
      )}
    </div>
  );
};

export default DarkModeButton;
