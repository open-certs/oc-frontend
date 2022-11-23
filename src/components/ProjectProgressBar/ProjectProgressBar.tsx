import React, { useEffect, useState } from "react";
import styles from "./ProjectProgressBar.module.css";

type Props = {
  value: number;
  dataPoints: any;
};

export default function ProjectProgressBar({ value, dataPoints }: Props) {
  const [graph, setGraph] = useState<any>([]);
  const graphColours = ["default", "primary", "warning", "danger"];
  const graphLabels = [
    "Not yet qualified",
    "Usefull",
    "Famous",
    "Unparalleled",
  ];
  useEffect(() => {
    const levels = Object.values(dataPoints).sort((a: any, b: any) => a - b);
    let level: any = levels[0];
    levels.forEach((l: any) => {
      if (value > l || value > level) {
        level = l;
      }
    });
    const graph: any = [];
    let currValue: number = value;
    levels.forEach((l: any) => {
      if (l > level) return;
      if (value > l) {
        graph.push((l / level) * 100);
        currValue -= l;
      } else {
        graph.push((currValue / level) * 100);
      }
    });
    setGraph(graph);
  }, [dataPoints, value]);
  return (
    <div style={{ width: "100%" }}>
      <div
        className={`${styles.progress} ${styles["progress-striped"]} ${styles.active}`}
      >
        {graph.map((g: any, i: any) => (
          <div
            key={i}
            className={`${styles["progress-bar"]} ${
              styles["progress-bar-" + graphColours[i % 4]]
            }`}
            style={{ width: `${g}%` }}
          >
            <span>{i === graph.length - 1 ? graphLabels[i % 4] : ""}</span>
          </div>
        ))}
      </div>
    </div>
  );

  //   return (
  //   <div>
  //     <div className='w-[100vw] bg-[#ccc] h-4'>
  //         <div className='w-[70vw] bg-[red] h-full'>
  //             <div className='w-[50vw] bg-[blue] h-full'>
  //                 <div className={`w-[${dataX?.success}vw] bg-[pink] h-full`}/>
  //             </div>
  //         </div>
  //     </div>
  //     {/* <progress value="32" max="100" > 32% </progress> */}
  //   </div>)
}
