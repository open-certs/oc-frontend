import React from "react";

const Repository = () => {
  return (
    <div className="w-full h-full">
      <div className=" flex  lg:flex-row flex-col  text-primary-100  lg:ml-[5%] lg:space-x-5 ">
        <div className="border rounded lg:w-[30%] h-[13rem] flex flex-col  items-center">
          <a
            href="https://github.com/open-certs/oc-frontend"
            className="lg:text-4xl text-2xl mt-2"
          >
            oc-frontend
          </a>
          <p className="text-lg mt-3 ml-4">
            An Open-Source Platform to certify open-source projects.
          </p>
          <div className="flex mt-3 space-x-5 ml-2 lg:ml-0">
            <div className="flex space-x-2 ">
              <img src="/images/blue.svg" className="w-[15%] lg:w-full" />
              <span className="lg:mt-[2%] mt-[8%]">Typescript</span>
            </div>
            <div className="flex space-x-2">
              <img src="/images/star.svg" className="w-[50%] lg:w-full" />
              <span className="lg:mt-[10%] mt-[25%]">10</span>
            </div>
            <div className="flex space-x-2">
              <img src="/images/fork.svg" className="w-[45%] lg:w-full" />
              <span className="lg:mt-[10%] mt-[25%]">17</span>
            </div>
            <span className="mt-2 ">Updated 3 days ago</span>
          </div>
        </div>
        <div className="border rounded lg:w-[30%] lg:mt-0 w-full h-[13rem] flex flex-col mt-5  items-center">
          <a
            href="https://github.com/open-certs/oc-backend"
            className="lg:text-4xl text-2xl mt-2"
          >
            oc-backend
          </a>
          <p className="text-lg mt-3 ml-4 lg:ml-0">
            This includes the backend server for Open-Certs.
          </p>
          <div className="flex mt-3 space-x-5 ml-2 lg:ml-0">
            <div className="flex space-x-2">
              <img src="/images/blue.svg" className="w-[15%] lg:w-full" />
              <span className="lg:mt-[2%] mt-[13%]">Typescript</span>
            </div>
            <div className="flex space-x-2">
              <img src="/images/star.svg" className="w-[50%] lg:w-full" />
              <span className="lg:mt-[10%] mt-[40%]">6</span>
            </div>
            <div className="flex space-x-2">
              <img src="/images/fork.svg" className="w-[45%] lg:w-full" />
              <span className="lg:mt-[10%] mt-[40%]">16</span>
            </div>
            <span className="mt-1">Updated 3 days ago</span>
          </div>
        </div>
        <div className="border rounded lg:w-[30%] lg:mt-0 w-full h-[13rem] flex flex-col mt-5  items-center">
          <a
            href="https://github.com/open-certs/oc-truffle"
            className="lg:text-4xl text-2xl mt-2"
          >
            oc-truffle
          </a>
          <p className="text-lg mt-3 ml-4 lg:ml-0">
            This includes the solidity code for Open-Certs.
          </p>
          <div className="flex mt-3 space-x-5 ml-2 lg:ml-0">
            <div className="flex space-x-2">
              <img src="/images/blue.svg" className="w-[15%] lg:w-full" />
              <span className="lg:mt-[2%] mt-[13%]">Typescript</span>
            </div>
            <div className="flex space-x-2">
              <img src="/images/star.svg" className="w-[50%] lg:w-full" />
              <span className="lg:mt-[10%] mt-[40%]">4</span>
            </div>
            <div className="flex space-x-2">
              <img src="/images/fork.svg" className="w-[45%] lg:w-full" />
              <span className="lg:mt-[10%] mt-[40%]">2</span>
            </div>
            <span className="mt-1">Updated 3 days ago</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Repository;
