import React from "react";

const Repository = () => {
  return (
    <div className="w-full">
      <div className="w-full flex flex-col  text-primary-100  ml-[5%] space-y-10">
        <div className="w-full  ">
          <div className="text-6xl">oc-frontend</div>
          <p className="text-lg mt-3">
            An Open-Source Platform to certify open-source projects.
          </p>
          <div className="flex">
            <div>Typescript</div>
            <div>
              <img />
              <span>10</span>
            </div>
            <div>
              <img />
              <span>17</span>
            </div>
            <div>Updated 3 days ago</div>
          </div>
        </div>
        <div>
          <div>Topic</div>
          <p>Description</p>
          <div>
            <div>Typescript</div>
            <div>Stars</div>
            <div>Fork</div>
            <div>Time</div>
          </div>
        </div>
        <div>
          <div>Topic</div>
          <p>Description</p>
          <div>
            <div>Typescript</div>
            <div>Stars</div>
            <div>Fork</div>
            <div>Time</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Repository;
