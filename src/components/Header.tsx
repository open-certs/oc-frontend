import React, { useContext } from "react";
import { FaSignOutAlt } from "react-icons/fa";
import { IoMdPower } from "react-icons/io";
import { useNavigate, NavLink as Link } from "react-router-dom";
import { logoDark, logoLight } from "../config";
import AuthContext from "../context/AuthContext/AuthProvider";
import ThemeContext from "../context/ThemeContext/ThemeProvider";
import { Button } from "./Button";
import DarkModeButton from "./DarkModeButton";

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = () => {
  const navigate = useNavigate();
  const { isAuthenticated, logout, user } = useContext<any>(AuthContext);
  const { theme } = useContext<any>(ThemeContext);
  return (
    <div className=" h-9 dark:bg-primary-800 bg-secondary-dark px-2 sm:pl-9 fixed w-full flex justify-end">
      <div className="flex justify-between items-center h-full py-4 w-full">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-center">
            {/* open-certs logo */}
            <img
              title="open-certs home"
              onClick={() => navigate("/")}
              src={logoDark}
              alt="logo"
              className="h-9 w-9 cursor-pointer"
            />

            {/* open-certs app name */}
            <span
              className={`text-3xl ${
                theme === "dark" ? "text-bg" : "text-bg-light"
              } hover:underline`}
            >
              Open-Certs
            </span>
          </div>
        </div>

        <div className={" flex items-center justify-center text-primary"}>
          <div title="Verify certificates" className="mx-6 cursor-pointer">
            <Link to="/verifyCertificate" className="navBtn mainTitle">
              Verify
            </Link>
          </div>
          {isAuthenticated === 1 && (
            <>
              {/* user-name */}
              <p className="text-xl  opacity-70"> {user.username}</p>
              {/* user profile picture */}
              <img
                className="inline object-cover w-7 h-7 mx-4 rounded-full"
                src={user.avatar}
                alt="Profile avatar"
              />
            </>
          )}
          {isAuthenticated ? (
            // logout button
            <div
              title="logout"
              onClick={() => logout()}
              className="dark:bg-primary-800 dark:hover:bg-primary-900 bg-transparent hover:bg-secondary-washed-out flex items-center justify-center text-primary-100 text-base p-2 rounded-8  cursor-pointer"
            >
              <FaSignOutAlt size={20} />
            </div>
          ) : (
            // login button
            <Link to="/login">
              <Button
                className="justify-center text-base px-3 sm:px-6"
                color={theme === "dark" ? "secondary" : "accent-secondary"}
              >
                <span className="sm:hidden">
                  <IoMdPower size={20} />
                </span>
                <span className="hidden sm:block">Login</span>
              </Button>
            </Link>
          )}
        </div>
      </div>
      {/* darkmode toggle button */}
      <DarkModeButton />
    </div>
  );
};
