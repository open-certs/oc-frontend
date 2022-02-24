import React, { useContext } from "react";
import { FaSignOutAlt } from "react-icons/fa";
import { IoMdPower } from "react-icons/io";
import { useNavigate, Link } from "react-router-dom";
import { logo } from "../config";
import AuthContext from "../context/AuthContext/AuthProvider";
import { Button } from "./Button";

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = () => {
  const navigate = useNavigate();
  const { isAuthenticated, logout, user } = useContext<any>(AuthContext);

  return (
    <div className="h-9 bg-primary-800 px-2 sm:px-9 fixed w-full">
      <div className="flex justify-between items-center h-full py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-center">
            <img
              onClick={() => navigate("/")}
              src={logo}
              alt="logo"
              className="h-9 w-9 cursor-pointer"
            />

            <span className="text-3xl text-bg hover:underline">Open-Certs</span>
          </div>
        </div>

        <div className={"flex items-center justify-center"}>
          {isAuthenticated === 1 && (
            <>
              <p className="text-xl opacity-70"> {user.username}</p>
              <img
                className="inline object-cover w-7 h-7 mx-4 rounded-full"
                src={user.photos[0].value}
                alt="Profile avatar"
              />
            </>
          )}
          {isAuthenticated ? (
            <div
              onClick={() => logout()}
              className="flex items-center bg-primary-900 justify-center text-base p-2 rounded-8 hover:bg-primary-800 cursor-pointer"
            >
              <FaSignOutAlt size={20} />
            </div>
          ) : (
            <Link to="/login">
              <Button
                className="justify-center text-base px-3 sm:px-6"
                color={"secondary"}
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
    </div>
  );
};
