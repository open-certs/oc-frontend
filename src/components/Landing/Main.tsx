import React, { useContext, useEffect } from "react";
import { Header } from "../helpers/Header";
import Lottie from "react-lottie";
import * as HomeAnime from "../../assets/home.json";
import { FaBitbucket, FaDiscord, FaGithubAlt, FaGitlab } from "react-icons/fa";
import AuthContext from "../../context/AuthContext/AuthProvider";
import { Button } from "../helpers/Button";
import { cookies } from "../../context/AuthContext/AuthReducer";
import { OpenPopUp } from "../helpers/OpenPopup";
import { apiBaseUrl } from "../../config";
interface MainProps {}

let browser: any = null;
let popup: any = null;

export const Main: React.FC<MainProps> = ({}) => {
  const { isAuthenticated } = useContext(AuthContext);
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
  }, []);
  const onClick = (url: string) => {
    popup = OpenPopUp(url, browser, popup);
  };
  return (
    <>
      <Header />

      <div className="background-oregon-grapes px-15 mt-9">
        <div className="upper flex items-center justify-between py-6 h-auto">
          <div className="mt-9 w-4/5">
            <span className="text-7xl text-left text-bg hover:underline">
              Open-Cert
            </span>
            <p className="text-xl opacity-70">
              A Open-Source Platform to certify open-source project.
            </p>
            <div className="mt-6">
              <div className="flex items-center justify-start w-full">
                {!isAuthenticated ? (
                  <>
                    <div className="flex items-center justify-start text-2xl mr-4">
                      Get started with
                    </div>
                    <div
                      onClick={() => onClick(`${apiBaseUrl}/auth/github`)}
                      className="flex items-center bg-primary-800 justify-center text-base  p-2 w-1/6 ml-1 rounded-8 hover:bg-primary-900 cursor-pointer"
                    >
                      <FaGithubAlt size={40} />
                    </div>
                    <div className="flex items-center bg-primary-800 justify-center text-base  p-2 w-1/6 mx-1 rounded-8 hover:bg-primary-900 cursor-pointer">
                      <FaBitbucket size={40} />
                    </div>
                    <div className="flex items-center bg-primary-800 justify-center text-base  p-2 w-1/6 rounded-8 hover:bg-primary-900 cursor-pointer">
                      <FaGitlab size={40} />
                    </div>
                  </>
                ) : (
                  <>
                    <div className="mb-6">
                      <span className="block mb-2 text-xl font-medium text-gray-900 ">
                        Owner Name
                      </span>
                      <input
                        type={"text"}
                        className="p-2 rounded-8 text-black"
                        placeholder="open-cert"
                        required
                      />
                    </div>
                    <span className="mx-2 text-5xl flex items-center justify-center">
                      /
                    </span>
                    <div className="mb-6 w-full">
                      <span className="block mb-2 text-xl font-medium text-gray-900 ">
                        Repository Name
                      </span>
                      <input
                        type={"text"}
                        className="p-2 rounded-8 text-black"
                        placeholder="react-ui"
                        required
                      />
                    </div>
                    <div className="w-1/2">
                      <Button
                        className="justify-center text-base py-3 mx-2"
                        color={"primary"}
                        // onClick={() => navigation("/login")}
                      >
                        <div className="flex items-center justify-between w-full text-black ml-2 font-bold">
                          Certify
                        </div>
                      </Button>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
          <div className="ml-10">
            <div className="">
              <Lottie
                style={{
                  marginTop: "1rem",
                }}
                width={900}
                options={{
                  loop: true,
                  autoplay: true,
                  animationData: HomeAnime,
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row absolute bottom-0 w-full justify-between px-5 py-5 mt-auto items-center sm:px-7">
        <div className="flex flex-row gap-6 text-primary-300">
          <a
            href="/privacy-policy.html"
            className="hover:text-primary-200 text-lg"
          >
            Privacy policy
          </a>
          <a
            href="https://github.com/open-certs/oc-frontend"
            className="ml-2 hover:text-primary-200 text-lg"
          >
            Report a bug
          </a>
          <div className="flex flex-row gap-6 sm:gap-4">
            <a
              href="https://github.com/open-certs/oc-frontend"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithubAlt
                size={30}
                className="ml-2 cursor-pointer hover:text-primary-200"
              />
            </a>
            <a
              href="https://discord.gg/VPb7Dd2y"
              target="_blank"
              rel="noreferrer"
            >
              <FaDiscord size={30} className="ml-2 hover:text-primary-200" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
