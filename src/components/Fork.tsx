import React from "react";
import { FaGithubAlt } from "react-icons/fa";
import { useLocation } from "react-router-dom";

interface ForkProps {}

export const Fork: React.FC<ForkProps> = () => {
  const location = useLocation();
  return location.pathname !== "/certificate" ? (
    <div className="ribbon">
      <a
        href="https://github.com/open-certs"
        rel="noreferrer"
        target={"_blank"}
      >
        Fork me on
        <FaGithubAlt size={20} style={{ marginLeft: "0.5em" }} />
      </a>
    </div>
  ) : null;
};
