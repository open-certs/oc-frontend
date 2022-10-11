import React, { useContext } from "react";
import "../../src/assets/certificate_assets/projectpiker.css";
import CertificateContext from "../context/CertificateContext/CertificateProvider";
import { Button } from "../components/Button";

interface ProjectPickerProps {}
export const ProjectPicker: React.FC<ProjectPickerProps> = () => {
  const { data, GenerateCertificate } = useContext<any>(CertificateContext);
  return (
    <>
      <div
        className={`dark:bg-[#151a21]  grid w-full h-full mt-9 dark:text-primary`}
      >
        <div className="place-items-center content-center w-full">
          <div
            className={` w-full grid justify-center align-middle items-center h-11 dark:bg-[#1e293b] bg-[#f1f5f8]`}
            style={{ gridTemplateColumns: "auto auto auto auto" }}
          >
            <h3 className={`dark:text-primary font-medium text-2xl`}>
              {data.accumulatedData.name}
              {"\u00A0"}
            </h3>
            <h4 className="font-medium text-2xl">by,{"\u00A0"}</h4>
            <div>
              <img
                className="rounded-full"
                src={data.accumulatedData.ownerAvatar}
                alt=""
                width={"80px"}
              />
            </div>
            <h3 className={`dark:text-primary font-medium text-2xl`}>
              {"\u00A0"}@{data.accumulatedData.owner}
            </h3>
          </div>
          <div
            className="flex flex-col  w-4/5 dark:text-white text-black"
            style={{ margin: "0px 10% 0px 10%" }}
          >
            <ul className="flex flex-row justify-center mt-5 dark:text-primary">
              <li
                className="flex flex-col-reverse rounded-8 text-center dark:bg-[#1e293b]  bg-[#f1f5f8]"
                style={{
                  width: "12%",
                  marginRight: "2.7%",
                  padding: "10px 0px",
                }}
              >
                <span className="text-l font-normal">Contributors</span>
                <span className="text-2xl font-bold">
                  {data.accumulatedData.contributors}
                </span>
              </li>
              <li
                className="flex flex-col-reverse rounded-8 text-center dark:bg-[#1e293b]  bg-[#f1f5f8]"
                style={{
                  width: "12%",
                  marginRight: "2.7%",
                  padding: "10px 0px",
                }}
              >
                <span className="text-l font-normal">Pull Requests</span>
                <span className="text-2xl font-bold">
                  {data.accumulatedData.pullRequests}
                </span>
              </li>
              <li
                className="flex flex-col-reverse rounded-8 text-center dark:bg-[#1e293b]  bg-[#f1f5f8]"
                style={{
                  width: "12%",
                  marginRight: "2.7%",
                  padding: "10px 0px",
                }}
              >
                <span className="text-l font-normal">Forks</span>
                <span className="text-2xl font-bold">
                  {data.accumulatedData.forks}
                </span>
              </li>
              <li
                className="flex flex-col-reverse rounded-8 text-center dark:bg-[#1e293b]  bg-[#f1f5f8]"
                style={{
                  width: "12%",
                  marginRight: "2.7%",
                  padding: "10px 0px",
                }}
              >
                <span className="text-l font-normal">Stars</span>
                <span className="text-2xl font-bold">
                  {data.accumulatedData.stars}
                </span>
              </li>
              <li
                className="flex flex-col-reverse rounded-8 text-center dark:bg-[#1e293b]  bg-[#f1f5f8]"
                style={{
                  width: "12%",
                  marginRight: "2.7%",
                  padding: "10px 0px",
                }}
              >
                <span className="text-l font-normal">Open Issues</span>
                <span className="text-2xl font-bold">
                  {data.accumulatedData.openIssues}
                </span>
              </li>
              <li
                className="flex flex-col-reverse rounded-8 text-center dark:bg-[#1e293b]  bg-[#f1f5f8]"
                style={{
                  width: "12%",
                  marginRight: "2.7%",
                  padding: "10px 0px",
                }}
              >
                <span className="text-l font-normal">Closed Issues</span>
                <span className="text-2xl font-bold">
                  {data.accumulatedData.closedIssues}
                </span>
              </li>
              <li
                className="flex flex-col-reverse rounded-8 text-center dark:bg-[#1e293b]  bg-[#f1f5f8]"
                style={{
                  width: "12%",
                  marginRight: "0.0%",
                  padding: "10px 0px",
                }}
              >
                <span className="text-l font-normal">Subscribers</span>
                <span className="text-2xl font-bold">
                  {data.accumulatedData.subscribers}
                </span>
              </li>
            </ul>
            <br />
            <div className="flex justify-between mt-5">
              <div className="dark:text-primary" style={{ width: "45%" }}>
                <span className="text-xl text-right dark:font-light font-normal rounded-t-5 p-3 dark:bg-[#1e293b]  bg-[#f1f5f8]">
                  Project Progress
                </span>
                <div className="rounded-8 text-center dark:bg-[rgb(30,41,59)]  bg-[#f1f5f8]">
                  <div className="flex py-4 px-2">
                    <div className="project-information p-2">
                      <div className="reputation flex justify-between">
                        <span
                          className="flex flex-col-reverse rounded-8 text-center dark:bg-[#243b47]  bg-[#95a9f0] px-3 py-1"
                          style={{ marginRight: "10px" }}
                        >
                          <span className="text-l font-normal">Score</span>
                          <span className="text-2xl font-bold">
                            {data.accumulatedData.reputation}
                          </span>
                        </span>
                        <span
                          className="flex flex-col-reverse rounded-8 text-center dark:bg-[#243b47]  bg-[#95a9f0]"
                          style={{ padding: "5px 18px" }}
                        >
                          <span className="text-l font-normal">Percent</span>
                          <span className="text-2xl font-bold">
                            {data.accumulatedData.reputation / 50}
                          </span>
                        </span>
                      </div>
                      <br />
                      <div className="reputation flex justify-between">
                        <span
                          className="flex flex-col-reverse rounded-8 text-center dark:bg-[#243b47]  bg-[#95a9f0] px-2 py-1"
                          style={{ marginRight: "10px" }}
                        >
                          <span className="text-l font-normal">Total</span>
                          <span className="text-2xl font-bold">1500</span>
                        </span>
                        <span className="flex flex-col-reverse rounded-8 text-center dark:bg-[#243b47]  bg-[#95a9f0] px-2 py-1">
                          <span className="text-l font-normal">Category</span>
                          <span className="text-2xl font-bold">
                            {data.accumulatedData.category}
                          </span>
                        </span>
                      </div>
                    </div>
                    <div
                      className="flex text-center w-1/2"
                      style={{ marginLeft: "25%" }}
                    >
                      <svg className="svg w-full">
                        <circle
                          className="circle-bg  dark:stroke-[#243b47] stroke-[#95a9f0] mx-2"
                          cx="57"
                          cy="57"
                          r="52"
                        />
                        <circle
                          className="progress stroke-[#3158e6] mx-2"
                          cx="57"
                          cy="57"
                          r="52"
                          style={{
                            strokeDashoffset: `${
                              360 -
                              (data.accumulatedData.reputation * 360) / 5000
                            }`,
                          }}
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="dark:text-primary"
                style={{ width: "45%", height: "206px" }}
              >
                <span className="text-xl text-right dark:font-light font-normal rounded-t-5 p-3 dark:bg-[#1e293b]  bg-[#f1f5f8]">
                  Important Links
                </span>
                <div
                  className="rounded-8 text-center dark:bg-[rgb(30,41,59)]  bg-[#f1f5f8]"
                  style={{ height: "206px" }}
                >
                  <div className="flex py-4 px-2 justify-between">
                    <div className="project-information p-2">
                      <span
                        className="flex flex-col-reverse rounded-8 text-center dark:bg-[#243b47]  bg-[#95a9f0] px-2 py-1"
                        style={{ marginRight: "10px" }}
                      >
                        <span className="font-light text-base">Repo Link</span>
                        <a
                          href={data.accumulatedData.repoLink}
                          className="font-light text-base"
                        >
                          {data.accumulatedData.repoLink}
                        </a>
                      </span>
                      <br />
                      <span
                        className="flex flex-col-reverse rounded-8 text-center dark:bg-[#243b47]  bg-[#95a9f0] px-2 py-1"
                        style={{ marginRight: "10px" }}
                      >
                        <span className="font-light text-base">
                          {data.accumulatedData.service} Link
                        </span>
                        <a
                          href={data.accumulatedData.ownerLink}
                          className="font-light text-base"
                        >
                          {data.accumulatedData.ownerLink}
                        </a>
                      </span>
                    </div>
                    <div className="flex text-center w-1/2">
                      <a href={data.accumulatedData.provider.url}>
                        <img
                          className="provider-logo dark:bg-primary rounded-full dark:p-1"
                          src={data.accumulatedData.provider.src}
                          alt=""
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <br />
            <Button
              style={{ textAlign: "center", width: "22%" }}
              onClick={() => {
                GenerateCertificate(data.projectToken);
              }}
              className="justify-center text-base sm:px-6 projectpicker-btn"
            >
              <span className="block dark:text-primary">
                Generate Certificate
              </span>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectPicker;
