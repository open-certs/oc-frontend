import React, { createContext, useMemo, useState } from "react";
import displayToast from "../../components/Toast";
import { apiBaseUrl } from "../../config";
import { cookies } from "../AuthContext/AuthReducer";

export interface defaultState {}

const initialState: any = {};
export const ProjectContext = createContext(initialState);
type Props = {
  children?: React.ReactNode;
};

export default function ProjectContextProvider({ children }: Props) {
  const [projectData, setProjectData] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const GetprojectData = async (url: string, retry: number = 0) => {
    await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${cookies.get("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          if (data.error?.type === "GithubAPITimeoutError") {
            if (retry > 2) {
              displayToast(
                "Its taking longer than usual. Please bear with us.",
                "info"
              ); //github 503 error
            }
            return setTimeout(
              () => GetprojectData(url, retry + 1),
              1000 * Math.pow(2, retry)
            );
          }
          displayToast(data.error.message, "failure");
        } else {
          setProjectData(data);
        }
        setLoading(false);
      })
      .catch((err) => {
        displayToast("Oops! Something went wrong", "failure");
        setLoading(false);
      });
  };

  const setProject = (type: string, data: any) => {
    if (loading) return;
    setLoading(true);
    if (type === "Github") {
      GetprojectData(
        `${apiBaseUrl}/project/github/${data.ownerName}/${data.repoName}`
      );
    } else if (type === "Gitlab") {
      GetprojectData(`${apiBaseUrl}/project/gitlab/${data.projectId}`);
    } else if (type === "Bitbucket") {
      GetprojectData(
        `${apiBaseUrl}/project/bitbucket/${data.workspace}/${data.repoName}`
      );
    } else {
      setLoading(false);
    }
  };

  const removeProject = () => {
    if (loading) return;
    setProjectData(null);
  };

  return (
    // eslint-disable-next-line react-hooks/exhaustive-deps
    <ProjectContext.Provider
      value={useMemo(
        () => ({ setProject, removeProject, projectData, loading }),
        [projectData, loading]
      )}
    >
      {children}
    </ProjectContext.Provider>
  );
}
