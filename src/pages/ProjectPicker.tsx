import React, { useContext } from "react";
import "../../src/assets/certificate_assets/projectpiker.css";
import CertificateContext from "../context/CertificateContext/CertificateProvider";
import { Button } from "../components/Button";
import { ProjectContext } from "../context/ProjectContext";
import ProjectStat from "../components/ProjectStat";
import ProjectDataTab from "../components/ProjectDataTab";
import { FaGitAlt } from "react-icons/fa";

interface ProjectPickerProps {}
export const ProjectPicker: React.FC<ProjectPickerProps> = () => {
  const { projectData } = useContext<any>(ProjectContext);
  const { GenerateCertificate } = useContext<any>(CertificateContext);
  return (
    <>
      <div className={`dark:bg-[#151a21]  grid w-full mt-9 dark:text-primary`}>
        <div className="place-items-center content-center w-full">
          <div
            className={` w-full grid justify-center align-middle items-center h-11 dark:bg-[#1e293b] bg-[#f1f5f8]`}
            style={{ gridTemplateColumns: "auto auto auto auto" }}
          >
            <h3 className={`dark:text-primary font-medium text-2xl`}>
              {projectData.accumulatedData.name}
              {"\u00A0"}
            </h3>
            <h4 className="font-medium text-2xl">by,{"\u00A0"}</h4>
            <div>
              <img
                className="rounded-full"
                src={projectData.accumulatedData.ownerAvatar}
                alt=""
                width={"80px"}
              />
            </div>
            <h3 className={`dark:text-primary font-medium text-2xl`}>
              {"\u00A0"}@{projectData.accumulatedData.owner}
            </h3>
          </div>
          <div
            className="w-4/5 dark:text-white text-black"
            style={{ margin: "0px 10% 0px 10%" }}
          >
            <ul className="flex flex-row justify-center mt-5 dark:text-primary flex-wrap">
              <ProjectStat
                stat={projectData.accumulatedData.contributors}
                title="Contributors"
                className="dark:bg-[#1e293b]  bg-[#f1f5f8]"
              />
              <ProjectStat
                stat={projectData.accumulatedData.pullRequests}
                title="Pull Requests"
                className="dark:bg-[#1e293b]  bg-[#f1f5f8]"
              />
              <ProjectStat
                stat={projectData.accumulatedData.forks}
                title="Forks"
                className="dark:bg-[#1e293b]  bg-[#f1f5f8]"
              />
              <ProjectStat
                stat={projectData.accumulatedData.stars}
                title="Stars"
                className="dark:bg-[#1e293b]  bg-[#f1f5f8]"
              />
              <ProjectStat
                stat={projectData.accumulatedData.openIssues}
                title="Open Issues"
                className="dark:bg-[#1e293b]  bg-[#f1f5f8]"
              />
              <ProjectStat
                stat={projectData.accumulatedData.closedIssues}
                title="Closed Issues"
                className="dark:bg-[#1e293b]  bg-[#f1f5f8]"
              />
            </ul>
            <br />
            <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
              <ProjectDataTab title="Project Progress">
                <ProjectStat
                  stat={projectData.accumulatedData.reputation}
                  title="Reputation"
                  className="dark:bg-[#243b47]  bg-[#95a9f0]"
                />
                <ProjectStat
                  stat={projectData.accumulatedData.category}
                  title="Category"
                  className="dark:bg-[#243b47]  bg-[#95a9f0]"
                />
              </ProjectDataTab>
              <ProjectDataTab title="Links">
                <div className="text-center">
                  <a
                    href={projectData.accumulatedData.repoLink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaGitAlt
                      size={130}
                      className="provider-logo rounded-full dark:p-1"
                    />
                  </a>
                </div>
                <div className="text-center">
                  <a
                    href={projectData.accumulatedData.ownerLink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      className="provider-logo dark:bg-primary rounded-full dark:p-1"
                      src={projectData.accumulatedData.ownerAvatar}
                      alt={projectData.accumulatedData.owner}
                    />
                  </a>
                </div>
                <div className="text-center">
                  <a
                    href={projectData.accumulatedData.provider.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      className="provider-logo dark:bg-primary rounded-full dark:p-1"
                      src={projectData.accumulatedData.provider.src}
                      alt={projectData.accumulatedData.provider.url}
                    />
                  </a>
                </div>
              </ProjectDataTab>
            </div>
            <br />
            <br />
            <Button
              onClick={() => {
                GenerateCertificate(projectData.projectToken);
              }}
            >
              Generate Certificate
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectPicker;
