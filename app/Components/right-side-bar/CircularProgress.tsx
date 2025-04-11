import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const CircularProgress = () => {
  const percentage = 66;
  const primaryColor = "#15A25E";

  return (
    <CircularProgressbar
      value={percentage}
      className="text-primary size-52 my-10"
      styles={{
        path: {
          stroke: primaryColor,
          strokeLinecap: "round",
          transition: "stroke-dashoffset 0.5s ease 0s",
          transform: "rotate(90deg)",
          transformOrigin: "center center",
        },
        trail: {
          stroke: "#E5E7EB",
        },
        text: {
          fill: primaryColor,
          fontSize: "15px",
        },
      }}
      text={`${percentage}%`}
    />
  );
};

export default CircularProgress;
