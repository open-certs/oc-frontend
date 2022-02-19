import React from "react";
import { FaDiscord, FaGithubAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <div>
      <div className="flex flex-row w-full justify-between px-5 py-5 mt-auto items-center sm:px-7">
        <div className="flex flex-row flex-wrap gap-6 text-primary-300">
          <a
            href="/privacy-policy.html"
            className="hover:text-primary-200 text-lg"
          >
            Privacy policy
          </a>
          <a
            href="https://github.com/open-certs/oc-frontend/issues"
            className="hover:text-primary-200 text-lg"
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
          <img
            src="https://profile-counter.glitch.me/open-certs/count.svg"
            alt="Visitor Count"
          />
        </div>
      </div>
    </div>
  );
}
