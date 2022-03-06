import React, { useContext, useEffect, useState } from "react";
import { Header } from "../components/Header";
import Lottie from "react-lottie";
import * as HomeAnime from "../assets/home.json";
import { FaBitbucket, FaGithubAlt, FaGitlab } from "react-icons/fa";
import AuthContext from "../context/AuthContext/AuthProvider";
import { Button } from "../components/Button";
import { cookies } from "../context/AuthContext/AuthReducer";
import { OpenPopUp } from "../components/OpenPopup";
import { apiBaseUrl } from "../config";
import { Grid } from "@mui/material";
import Swal from "sweetalert2";
import ThemeContext from "../context/ThemeContext/ThemeProvider";

interface MainProps {}

let browser: any = null;
let popup: any = null;

export const Main: React.FC<MainProps> = () => {
  const { isAuthenticated, loginConfirm } = useContext<any>(AuthContext);
  const { theme } = useContext<any>(ThemeContext);
  const [repoData, setRepoData] = useState<{
    ownerName: string;
    repoName: string;
  }>({
    ownerName: "",
    repoName: "",
  });

  const { ownerName, repoName } = repoData;

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

  const onChange = (e: any) => {
    const { name, value } = e.target;
    setRepoData({ ...repoData, [name]: value });
  };

  const onClick = (url: string) => {
    popup = OpenPopUp(url, browser, popup);
  };

  const handleCertify = async () => {
    const { ownerName, repoName } = repoData;
    console.log({ ownerName, repoName });
    const url = `${apiBaseUrl}/certificate/github/${ownerName}/${repoName}`;
    console.log({ url });
    await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${cookies.get("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log({ data });
        window.open(
          `${apiBaseUrl}/certificate/${data.certificate._id}`,
          "_blank"
        );
      })
      .catch((err) => {
        console.log({ err });
      });
  };
  const comingSoon = () => {
    console.log("coming soon");
    Swal.fire({
      title: "Coming Soon",
      text: "This feature is coming soon",
      icon: "info",
    });
  };
  return (
    <>
      <Header />
      <div className="mt-9 dark:bg-primary-bgDark ">
        <div
          className={`dark:text-primary-200 ${
            theme === "dark"
              ? "background-oregon-grapes"
              : "background-oregon-grapes-light"
          }  dark:bg-no-repeat bg-cover bg-center mt-5`}
        >
          <div className=" upper flex items-center justify-between py-6 h-auto">
            <Grid container spacing={2} columns={16}>
              <Grid item xs={16} sm={8} order={{ xs: 2, sm: 1 }}>
                <div className="sm:mt-15 md:px-10 text-center sm:text-left">
                  <span className=" text-5xl sm:text-7xl text-bg hover:underline">
                    Open-Certs
                  </span>
                  <p className="text-xl opacity-70">
                    Certify your open source contributions in just few steps.
                  </p>
                  <div className="mt-10">
                    {!isAuthenticated ? (
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
                            onClick={() => comingSoon()}
                            className="flex flex-1 items-center dark:bg-primary-800 justify-center text-base  p-2 w-1/6 mx-3 rounded-8 dark:hover:bg-primary-900 cursor-pointer bg-primary-200 hover:bg-primary-100"
                          >
                            <FaBitbucket size={40} />
                          </div>
                          <div
                            title="Gitlab"
                            onClick={() => comingSoon()}
                            className="flex flex-1 items-center dark:bg-primary-800 justify-center text-base  p-2 w-1/6 rounded-8 dark:hover:bg-primary-900 cursor-pointer bg-primary-200 hover:bg-primary-100"
                          >
                            <FaGitlab size={40} />
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="flex items-center justify-center">
                        <div className="mb-6">
                          <span className="block mb-2 text-xl font-medium text-gray-900 ">
                            Owner Name
                          </span>
                          <input
                            type={"text"}
                            className="p-2 rounded-8 text-black"
                            placeholder="open-certs"
                            required
                            name={"ownerName"}
                            value={ownerName}
                            onChange={onChange}
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
                            name={"repoName"}
                            value={repoName}
                            onChange={onChange}
                          />
                        </div>
                        <div className="w-1/2">
                          <Button
                            className="justify-center text-base py-3 mx-2"
                            color={"primary"}
                            onClick={() => handleCertify()}
                          >
                            <div className="flex items-center justify-between w-full text-black ml-2 font-bold">
                              Certify
                            </div>
                          </Button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </Grid>
              <Grid
                item
                xs={16}
                sm={8}
                order={{ xs: 1, sm: 2 }}
                className="invert dark:invert-0"
              >
                <div id="lottie-Landing-animation" className="sm:mt-15">
                  <Lottie
                    style={{
                      maxWidth: "100%",
                      transformStyle: "flat",
                    }}
                    width={700}
                    options={{
                      loop: true,
                      autoplay: true,
                      animationData: HomeAnime,
                    }}
                  />
                </div>
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    </>
  );
};
