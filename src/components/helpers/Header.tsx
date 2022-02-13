import React, { useContext } from "react";
import { FaSignOutAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { logo } from "../../config";
import AuthContext from "../../context/AuthContext/AuthProvider";
import { Button } from "./Button";

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = ({}) => {
  const navigate = useNavigate();
  const { isAuthenticated, logout, user } = useContext<any>(AuthContext);
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
          {/* <div className="flex ">
            <div
              onClick={() => commingSoon()}
              className="hover:text-primary-200 hover:underline text-xl"
            >
              Verify
            </div>
          </div> */}
        </div>

        <div className={"flex items-center justify-center"}>
          {isAuthenticated === 1 && (
            <>
              <p className="text-xl opacity-70"> {user.username}</p>
              <img
                className="inline object-cover w-7 h-7 mx-4 rounded-full"
                src={user.photos[0].value}
                alt="Profile image"
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
            <Button
              className="justify-center text-base py-3"
              color={"secondary"}
              onClick={() => navigate("/login")}
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
