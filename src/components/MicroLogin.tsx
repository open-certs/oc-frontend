import React, { useContext, useEffect } from "react";
import { FaBitbucket, FaGithubAlt, FaGitlab } from "react-icons/fa";
import { apiBaseUrl } from "../config";
import AuthContext from "../context/AuthContext/AuthProvider";
import { OpenPopUp } from "./OpenPopup";
import { cookies } from "../context/AuthContext/AuthReducer";

let browser: any = null;
let popup: any = null;

export default function MicroLogin() {
  const { loginConfirm } = useContext<any>(AuthContext);
  useEffect(() => {
    browser = window.self;
    browser.loggedIn = (token: any) => {
      if (loginConfirm) {
        loginConfirm(token);
        cookies.set("token", token);
      }
      if (popup && !popup.closed) {
        popup.close();
      }
    };
  }, [loginConfirm]);
  const onClick = (url: string) => {
    popup = OpenPopUp(url, browser, popup);
  };
  return (
    <div className="flex flex-col items-center justify-start sm:w-3/4 sm:items-start">
      <div className="flex items-center justify-between text-2xl mr-4 mb-4">
        Get started with
      </div>
      <div className="flex w-full">
        <div
          title="Github"
          onClick={() => onClick(`${apiBaseUrl}/auth/github`)}
          className="flex flex-1 items-center dark:bg-primary-800 justify-center text-base  p-2 w-1/6 rounded-8 dark:hover:bg-primary-900 cursor-pointer bg-primary-200 hover:bg-primary-100 "
        >
          <FaGithubAlt size={40} />
        </div>
        <div
          title="Bitbucket"
          onClick={() => onClick(`${apiBaseUrl}/auth/bitbucket`)}
          className="flex flex-1 items-center dark:bg-primary-800 justify-center text-base  p-2 w-1/6 mx-3 rounded-8 dark:hover:bg-primary-900 cursor-pointer bg-primary-200 hover:bg-primary-100"
        >
          <FaBitbucket size={40} />
        </div>
        <div
          title="Gitlab"
          onClick={() => onClick(`${apiBaseUrl}/auth/gitlab`)}
          className="flex flex-1 items-center dark:bg-primary-800 justify-center text-base  p-2 w-1/6 rounded-8 dark:hover:bg-primary-900 cursor-pointer bg-primary-200 hover:bg-primary-100"
        >
          <FaGitlab size={40} />
        </div>
      </div>
    </div>
  );
}
