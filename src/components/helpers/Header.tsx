import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { logo } from "../../config";
import AuthContext from "../../context/AuthContext/AuthProvider";
import { Button } from "./Button";

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = ({}) => {
  const navigation = useNavigate();
  const { isAuthenticated, logout } = useContext<any>(AuthContext);

  return (
    <div className="h-9 bg-primary-800 px-5 fixed w-full">
      <div className="flex justify-between items-center h-full px-10 py-4">
        <div className="flex items-center justify-between w-1/5">
          <div className="flex items-center justify-center">
            <img src={logo} alt="logo" className="h-9 w-9" />
            <span className="text-3xl text-bg hover:underline">Open-Cert</span>
          </div>
          <div className="flex ">
            <a
              href="/"
              className="hover:text-primary-200 hover:underline text-xl"
            >
              Verify
            </a>
          </div>
        </div>

        <div>
          {isAuthenticated ? (
            <Button
              className="justify-center text-base py-3 mt-2"
              color={"secondary"}
              onClick={() => logout()}
            >
              <div className="flex items-center justify-between w-full">
                Logout
                <div />
              </div>
            </Button>
          ) : (
            <Button
              className="justify-center text-base py-3 mt-2"
              color={"secondary"}
              onClick={() => navigation("/login")}
            >
              <div className="flex items-center justify-between w-full">
                Login
                <div />
              </div>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
