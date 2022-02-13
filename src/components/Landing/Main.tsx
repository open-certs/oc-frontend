import React, { useContext, useEffect, useState } from "react";
import { Header } from "../helpers/Header";
import Lottie from "react-lottie";
import * as HomeAnime from "../../assets/home.json";
import { FaBitbucket, FaDiscord, FaGithubAlt, FaGitlab } from "react-icons/fa";
import AuthContext from "../../context/AuthContext/AuthProvider";
import { Button } from "../helpers/Button";
import { cookies } from "../../context/AuthContext/AuthReducer";
import { OpenPopUp } from "../helpers/OpenPopup";
import { apiBaseUrl } from "../../config";
import { Grid } from "@mui/material";
import Swal from "sweetalert2";

interface MainProps {}

let browser: any = null;
let popup: any = null;

export const Main: React.FC<MainProps> = ({}) => {
  const { isAuthenticated } = useContext(AuthContext);
  const { loginConfirm } = useContext<any>(AuthContext);
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
  }, []);

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
  const commingSoon = () => {
    console.log("comming soon");
    Swal.fire({
      title: "Comming Soon",
      text: "This feature is comming soon",
      icon: "info",
    });
  };
  return (
    <>
      <Header />

      <div className="background-oregon-grapes px-15 mt-5">
        <div className="upper flex items-center justify-between py-6 h-auto">
          <Grid container spacing={2} columns={16}>
            <Grid item xs={8}>
              <div className="mt-15 w-4/5 ">
                <span className="text-7xl text-left text-bg hover:underline">
                  Open-Certs
                </span>
                <p className="text-xl opacity-70">
                  An Open-Source Platform to certify open-source projects.
                </p>
                <div className="mt-10">
                  <div className="flex flex-col items-start justify-start w-3/4">
                    {!isAuthenticated ? (
                      <>
                        <div className="flex items-center justify-between text-2xl mr-4 mb-4">
                          Get started with
                        </div>
                        <div className="flex w-full">
                          <div
                            title="Github"
                            onClick={() => onClick(`${apiBaseUrl}/auth/github`)}
                            className="flex flex-1 items-center bg-primary-800 justify-center text-base  p-2 w-1/6 rounded-8 hover:bg-primary-900 cursor-pointer"
                          >
                            <FaGithubAlt size={40} />
                          </div>
                          <div
                            title="Bitbucket"
                            onClick={() => commingSoon()}
                            className="flex flex-1 items-center bg-primary-800 justify-center text-base  p-2 w-1/6 mx-3 rounded-8 hover:bg-primary-900 cursor-pointer"
                          >
                            <FaBitbucket size={40} />
                          </div>
                          <div
                            title="Gitlab"
                            onClick={() => commingSoon()}
                            className="flex flex-1 items-center bg-primary-800 justify-center text-base  p-2 w-1/6 rounded-8 hover:bg-primary-900 cursor-pointer"
                          >
                            <FaGitlab size={40} />
                          </div>
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
                      </>
                    )}
                  </div>
                </div>
              </div>
            </Grid>
            <Grid item xs={8}>
              <div>
                <Lottie
                  style={{
                    marginTop: "7rem",
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
      <div className="flex flex-row absolute bottom-0 w-full justify-between px-5 py-5 mt-auto items-center sm:px-7">
        <div className="flex flex-row gap-6 text-primary-300">
          <a
            href="/privacy-policy.html"
            className="hover:text-primary-200 text-lg"
          >
            Privacy policy
          </a>
          <a
            href="https://github.com/open-certs/oc-frontend/issues"
            className="ml-2 hover:text-primary-200 text-lg"
          >
            Report a bug
          </a>
          <div className="flex flex-row gap-6 sm:gap-4">
            <a
              title="Github-oc-frontend"
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
              title="Discord"
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
