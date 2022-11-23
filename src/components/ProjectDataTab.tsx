import React from "react";

type Props = {
  children?: React.ReactNode;
  title: string;
};

export default function ProjectDataTab({ children, title }: Props) {
  return (
    <div className="dark:text-primary">
      <span className="text-xl text-right dark:font-light font-normal rounded-t-5 p-3 dark:bg-[#1e293b]  bg-[#f1f5f8]">
        {title}
      </span>
      <div className="rounded-8 text-center dark:bg-[rgb(30,41,59)]  bg-[#f1f5f8]">
        <div className="flex flex-wrap py-4 px-2">{children}</div>
      </div>
    </div>
  );
}
