import React from "react";
import { FaGithubAlt } from "react-icons/fa";

interface ForkProps {}

export const Fork: React.FC<ForkProps> = () => {
  return (
    <div className="ribbon">
      <a
        href="https://github.com/open-certs/oc-frontend"
        rel="noreferrer"
        target={"_blank"}
      >
        Fork me on
        <FaGithubAlt size={20} style={{ marginLeft: "0.5em" }} />
      </a>
    </div>
  );
};
