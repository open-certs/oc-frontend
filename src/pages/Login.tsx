import React, { useContext, useEffect } from "react";
import { apiBaseUrl, logoDark, logoLight } from "../config";
import { FaGithubAlt, FaGitlab, FaBitbucket } from "react-icons/fa";
import { Button } from "../components/Button";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext/AuthProvider";
import { cookies } from "../context/AuthContext/AuthReducer";
import { OpenPopUp } from "../components/OpenPopup";
import ThemeContext from "../context/ThemeContext/ThemeProvider";
import DarkModeButton from "../components/DarkModeButton";

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
  const { theme } = useContext<any>(ThemeContext);
  return (
    <Button
      className="justify-center text-base py-3 mt-2"
      color={`${theme === "dark" ? "secondary" : "accent-secondary"}`}
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
  const { theme } = useContext<any>(ThemeContext);
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

  const comingSoon = () => {
    console.log("coming soon");
    Swal.fire({
      title: "Coming Soon",
      text: "This feature is coming soon",
      icon: "info",
    });
  };

  const onClick = (url: string) => {
    popup = OpenPopUp(url, browser, popup);
  };
  return (
    <>
      <div
        className={`dark:bg-primary-bgDark ${
          theme === "dark"
            ? "background-oregon-grapes-login"
            : "background-oregon-grapes-light-login"
        }  grid w-full h-full bg-secondary`}
        style={{
          gridTemplateRows: "1fr auto 1fr",
        }}
      >
        <div className="hidden sm:flex" />
        <div className="flex flex-row absolute -top-5 w-full justify-between px-2 py-5 mt-auto items-center sm:px-3">
          <div
            className="hidden sm:flex cursor-pointer"
            onClick={() => navigate("/")}
          >
            <img
              // src={theme === "dark" ? logoDark : logoLight}
              title="open-certs home"
              src={logoDark}
              alt="logo"
              className="h-10 w-10"
            />
          </div>
          <DarkModeButton />
        </div>
        <div className="flex justify-self-center self-center sm:hidden cursor-pointer">
          <img
            src={theme === "dark" ? logoDark : logoLight}
            alt="logo"
            className="h-10 w-10 "
          />
        </div>
        <div className="flex items-center justify-center m-auto flex-col px-4 py-6 gap-5 dark:bg-primary-800 bg-primary sm:rounded-8 z-10 sm:w-400 w-full">
          <div className="flex gap-2 flex-col text-center">
            <span className="text-3xl dark:text-primary-100 text-secondary font-bold">
              Welcome to{" "}
              <span
                className={`text-bg hover:underline hover:underline-offset-4`}
              >
                Open-Certs
              </span>
            </span>
          </div>
          <div className="flex flex-col gap-4">
            <LoginButton onClick={() => onClick(`${apiBaseUrl}/auth/github`)}>
              <FaGithubAlt size={20} className="mr-2" />
              Log in with GitHub
            </LoginButton>
            <LoginButton onClick={() => comingSoon()}>
              <FaGitlab size={20} className="mr-2" />
              Log in with Gitlab
            </LoginButton>

            <LoginButton onClick={comingSoon}>
              <FaBitbucket size={20} className="mr-2" />
              Log in with Bitbucket
            </LoginButton>
          </div>
        </div>
      </div>
    </>
  );
};
