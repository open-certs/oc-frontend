import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { logo } from "../../config";
import AuthContext from "../../context/AuthContext/AuthProvider";
import { Button } from "./Button";

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = ({}) => {
  const navigation = useNavigate();
  const { isAuthenticated, logout } = useContext<any>(AuthContext);
  const commingSoon = () => {
    console.log("comming soon");
    Swal.fire({
      title: "Comming Soon",
      text: "This feature is comming soon",
      icon: "info",
      confirmButtonText: "Ok",
    });
  };

  return (
    <div className="h-9 bg-primary-800 px-5 fixed w-full">
      <div className="flex justify-between items-center h-full px-10 py-4">
        <div className="flex items-center justify-between w-1/5">
          <div className="flex items-center justify-center">
            <img src={logo} alt="logo" className="h-9 w-9" />
            <span className="text-3xl text-bg hover:underline">Open-Cert</span>
          </div>
          <div className="flex ">
            <div
              onClick={() => commingSoon()}
              className="hover:text-primary-200 hover:underline text-xl"
            >
              Verify
            </div>
          </div>
        </div>

        <div>
          {isAuthenticated ? (
            <Button
              className="justify-center text-base py-3 mt-2"
              color={"secondary"}
              onClick={() => logout()}
            >
              <div className="flex items-center justify-between w-full text-lg">
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
              <div className="flex items-center justify-between w-full text-lg">
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
