import React, { useContext } from "react";
import ProjectContextProvider, { ProjectContext } from ".";
import ProjectPicker from "../../components/ProjectPicker";

type Props = {
  children?: React.ReactNode;
};

const ProjectRouterUtil = ({ children }: Props) => {
  const { projectData } = useContext<any>(ProjectContext);
  return projectData ? <ProjectPicker /> : <>{children}</>;
};

export default function ProjectRouter({ children }: Props) {
  return (
    <ProjectContextProvider>
      <ProjectRouterUtil>{children}</ProjectRouterUtil>
    </ProjectContextProvider>
  );
}
