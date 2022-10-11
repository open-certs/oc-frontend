import React from "react";
import { useLocation } from "react-router-dom";

import { FaDiscord, FaGithubAlt } from "react-icons/fa";

export default function Footer() {
  const location = useLocation();
  return location.pathname !== "/certificate" ? (
    <div>
      <div className="dark:bg-primary-bgDark bg-primary flex flex-row w-full justify-between px-5 py-5 mt-auto items-center sm:px-7">
        <div className="flex items-center justify-center flex-wrap gap-6 text-primary-300 ">
          {/* <a
            href="/privacy-policy.html"
            className="hover:text-primary-200 text-lg"
            target="_blank"
          >
            Privacy policy
          </a> */}
          <a
            href="https://github.com/open-certs/oc-frontend/issues"
            className="hover:text-primary-200 text-lg hover:underline"
            target="_blank"
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
          <div className="lg:flex items-center justify-center hidden">
            <p className="mr-3 text-xl">This page was viewed</p>
            <img
              src="https://profile-counter.glitch.me/open-certs/count.svg"
              alt="Visitor Count"
            />
            <p className="mx-3 text-xl">times.</p>
          </div>
        </div>
      </div>
    </div>
  ) : null;
}
