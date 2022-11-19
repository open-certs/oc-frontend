import React, { useContext, useState } from "react";
import { ProjectContext } from "../../context/ProjectContext";
import ThemeContext from "../../context/ThemeContext/ThemeProvider";
import { Button } from "../Button";

export default function BitbucketProjectInput() {
  const { theme } = useContext<any>(ThemeContext);
  const { setProject } = useContext<any>(ProjectContext);
  const [repoData, setRepoData] = useState<{
    workspace: string;
    repoName: string;
  }>({
    workspace: "",
    repoName: "",
  });

  const { workspace, repoName } = repoData;

  const onChange = (e: any) => {
    const { name, value } = e.target;
    setRepoData({ ...repoData, [name]: value });
  };

  const fetchproject = async () => {
    const { workspace, repoName } = repoData;
    setProject("Bitbucket", { workspace, repoName });
  };
  return (
    <div>
      <div className="flex items-center justify-center">
        <div className="mb-6">
          <span className="block mb-2 text-xl font-medium text-gray-900 ">
            Workspace
          </span>
          <input
            type={"text"}
            className="p-2 border rounded-8 text-black"
            placeholder="open-certs"
            required
            name={"workspace"}
            value={workspace}
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
            className="p-2 border rounded-8 text-black"
            placeholder="react-ui"
            required
            name={"repoName"}
            value={repoName}
            onChange={onChange}
          />
        </div>
      </div>
      <div className="w-1/4">
        <Button
          onClick={() => fetchproject()}
          className="justify-center text-base px-3 sm:px-6"
          color={theme === "dark" ? "secondary" : "accent-secondary"}
        >
          <span className=" block">Fetch Project</span>
        </Button>
      </div>
    </div>
  );
}
