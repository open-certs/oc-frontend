import React from "react";

type Props = {
  stat: any;
  title: string;
  className?: string;
};

export default function ProjectStat({ stat, title, className }: Props) {
  return (
    <div
      className={`text-center rounded overflow-hidden shadow-lg ${className} m-2`}
    >
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{stat}</div>
        <p className="text-gray-700 text-base">{title}</p>
      </div>
    </div>
  );
}
