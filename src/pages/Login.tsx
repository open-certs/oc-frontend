import React, { useContext, useEffect } from "react";
import { apiBaseUrl, logo } from "../config";
import { FaGithubAlt, FaGitlab, FaBitbucket } from "react-icons/fa";
import { Button } from "../components/Button";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext/AuthProvider";
import { cookies } from "../context/AuthContext/AuthReducer";
import { OpenPopUp } from "../components/OpenPopup";
import Footer from "../components/Footer";

interface LoginButtonProps {
  children: [React.ReactNode, React.ReactNode];
  onClick?: () => void;
  oauthUrl?: string;
}

const LoginButton: React.FC<LoginButtonProps> = ({
  children,
  onClick,
  oauthUrl,
  ...props
}) => {
  return (
    <Button
      className="justify-center text-base py-3 mt-2"
      color={"secondary"}
      onClick={onClick}
      {...props}
    >
      <div className="flex items-center justify-between w-full">
        {children[0]}
        {children[1]}
        <div />
      </div>
    </Button>
  );
};

interface LoginProps {}

let browser: any = null;
let popup: any = null;

export const Login: React.FC<LoginProps> = () => {
  const navigate = useNavigate();
  const { loginConfirm } = useContext<any>(AuthContext);

  useEffect(() => {
    browser = window.self;
    browser.loggedIn = (token: any) => {
      console.log({ token });
      if (loginConfirm) {
        loginConfirm(token);
        cookies.set("token", token);
      }
      if (popup && !popup.closed) {
        popup.close();
      }
    };
  });

  const commingSoon = () => {
    console.log("comming soon");
    Swal.fire({
      title: "Comming Soon",
      text: "This feature is comming soon",
      icon: "info",
    });
  };

  const onClick = (url: string) => {
    popup = OpenPopUp(url, browser, popup);
  };
  return (
    <>
      <div
        className="background-oregon-grapes-login grid w-full h-full"
        style={{
          gridTemplateRows: "1fr auto 1fr",
        }}
      >
        <div className="hidden sm:flex" />
        <div className="flex flex-row absolute top-0 w-full justify-between px-5 py-5 mt-auto items-center sm:px-7">
          <div
            className="hidden sm:flex cursor-pointer"
            onClick={() => navigate("/")}
          >
            <img src={logo} alt="logo" className="h-10 w-10" />
          </div>
        </div>
        <div className="flex justify-self-center self-center sm:hidden cursor-pointer">
          <img src={logo} alt="logo" className="h-10 w-10 " />
        </div>
        <div className="flex items-center justify-center m-auto flex-col px-4 py-6 gap-5 bg-primary-800 sm:rounded-8 z-10 sm:w-400 w-full">
          <div className="flex gap-2 flex-col text-center">
            <span className="text-3xl text-primary-100 font-bold">
              Welcome to{" "}
              <span className="text-bg hover:underline hover:underline-offset-4">
                Open-Certs
              </span>
            </span>
          </div>
          <div className="flex flex-col gap-4">
            <LoginButton onClick={() => onClick(`${apiBaseUrl}/auth/github`)}>
              <FaGithubAlt size={20} className="mr-2" />
              Log in with GitHub
            </LoginButton>
            <LoginButton onClick={() => commingSoon()}>
              <FaGitlab size={20} className="mr-2" />
              Log in with Gitlab
            </LoginButton>

            <LoginButton onClick={commingSoon}>
              <FaBitbucket size={20} className="mr-2" />
              Log in with Bitbucket
            </LoginButton>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};
