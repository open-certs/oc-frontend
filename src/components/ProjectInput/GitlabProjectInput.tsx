import React, { useContext, useState } from "react";
import { ProjectContext } from "../../context/ProjectContext";
import ThemeContext from "../../context/ThemeContext/ThemeProvider";
import { Button } from "../Button";

export default function GitlabProjectInput() {
  const { theme } = useContext<any>(ThemeContext);
  const { setProject } = useContext<any>(ProjectContext);
  const [repoData, setRepoData] = useState<{
    projectId: string;
  }>({
    projectId: "",
  });

  const { projectId } = repoData;

  const onChange = (e: any) => {
    const { name, value } = e.target;
    setRepoData({ ...repoData, [name]: value });
  };

  const fetchproject = async () => {
    const { projectId } = repoData;
    setProject("Gitlab", { projectId });
  };
  return (
    <div>
      <div className="flex items-center justify-center">
        <div className="mb-6 w-full">
          <span className="block mb-2 text-xl font-medium text-gray-900 ">
            Project Id
          </span>
          <input
            type={"text"}
            className="p-2 border rounded-8 text-black"
            placeholder="1234567"
            required
            name={"projectId"}
            value={projectId}
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
