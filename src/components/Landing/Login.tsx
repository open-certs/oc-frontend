import React, { useEffect } from "react";
import { apiBaseUrl, logo } from "../../config";
import { FaGithubAlt, FaGitlab, FaBitbucket, FaDiscord } from "react-icons/fa";
import { Button } from "../helpers/Button";
import Swal from "sweetalert2";

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

export const Login: React.FC<LoginProps> = ({}) => {
  useEffect(() => {
    browser = window.self;
    browser.loggedIn = (token: any) => {
      // if (confirm) {
      //   // confirm(token);

      // }
      if (popup && !popup.closed) {
        popup.close();
      }
    };
  }, []);

  const commingSoon = () => {
    console.log("comming soon");
    Swal.fire({
      title: "Comming Soon",
      text: "This feature is comming soon",
      icon: "info",
      confirmButtonText: "Ok",
    });
  };

  const onClick = (url: string) => {
    console.log("onClick", url);
    if (!browser) return;
    if (popup && !popup.closed) {
      popup.focus();

      return;
    }
    const w = 700,
      h = 700;
    const dualScreenLeft =
      window.screenLeft !== undefined ? window.screenLeft : window.screenX;
    const dualScreenTop =
      window.screenTop !== undefined ? window.screenTop : window.screenY;

    const width = window.innerWidth
      ? window.innerWidth
      : document.documentElement.clientWidth
      ? document.documentElement.clientWidth
      : window.screen.width;
    const height = window.innerHeight
      ? window.innerHeight
      : document.documentElement.clientHeight
      ? document.documentElement.clientHeight
      : window.screen.height;

    const systemZoom = width / window.screen.availWidth;
    const left = (width - w) / 2 / systemZoom + dualScreenLeft;
    const top = (height - h) / 2 / systemZoom + dualScreenTop;
    popup = browser.open(
      url,
      "Login",
      `dependent=${1},  
            alwaysRaised=${1}, 
            width=${w / systemZoom}, 
            height=${h / systemZoom},
            top=${top}, 
            left=${left}
            `
    );
  };

  return (
    <>
      <div
        className="grid w-full h-full"
        style={{
          gridTemplateRows: "1fr auto 1fr",
        }}
      >
        <div className="hidden sm:flex" />
        <div className="flex flex-row absolute top-0 left-15 w-full justify-between px-5 py-5 mt-auto items-center sm:px-7">
          <div className="hidden sm:flex">
            <img src={logo} alt="logo" className="h-10 w-10" />
          </div>
        </div>
        <div className="flex justify-self-center self-center sm:hidden">
          <img src={logo} alt="logo" className="h-10 w-10" />
        </div>
        <div className="flex items-center justify-center m-auto flex-col p-6 gap-5 bg-primary-800 sm:rounded-8 z-10 sm:w-400 w-full">
          <div className="flex gap-2 flex-col">
            <span className="text-3xl text-primary-100 font-bold">
              Welcome to{" "}
              <span className="text-bg hover:underline">Open-Cert</span>
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
        {/* <div className="flex flex-row absolute bottom-0 w-full justify-between px-5 py-5 mt-auto items-center sm:px-7">
          <div className="flex flex-row gap-6 text-primary-300">
            <a href="/privacy-policy.html" className="hover:text-primary-200">
              Privacy policy
            </a>
            <a
              href="https://github.com/open-certs/oc-frontend"
              className="ml-2 hover:text-primary-200"
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
                  width={20}
                  height={20}
                  className="ml-2 mt-1 cursor-pointer hover:text-primary-200"
                />
              </a>
              <a href="/" target="_blank" rel="noreferrer">
                <FaDiscord
                  width={20}
                  height={20}
                  className="ml-2 mt-1 hover:text-primary-200"
                />
              </a>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
};
