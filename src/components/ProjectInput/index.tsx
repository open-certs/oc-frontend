import React, { useContext } from "react";
import AuthContext from "../../context/AuthContext/AuthProvider";
import BitbucketProjectInput from "./BitbucketProjectInput";
import GithubProjectInput from "./GithubProjectInput";
import GitlabProjectInput from "./GitlabProjectInput";

export default function ProjectInput() {
  const { isAuthenticated, user } = useContext<any>(AuthContext);
  if (!isAuthenticated) {
    return null;
  }
  if (user.kind === "github") {
    return <GithubProjectInput />;
  }
  if (user.kind === "gitlab") {
    return <GitlabProjectInput />;
  }
  if (user.kind === "bitbucket") {
    return <BitbucketProjectInput />;
  }
  return null;
}
