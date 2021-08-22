import React from "react";

const ProgressBar = ({ progressPercentage }) => {
  console.log(progressPercentage);
  return (
    <div className="h-4 w-full bg-gray-200 rounded-md">
      <div
        style={{ width: `${progressPercentage}%` }}
        className="h-full rounded-md bg-yellow-500"
      ></div>
    </div>
  );
};

const ProgressBarContainer = ({ percent }) => {
  return (
    <div className="flex items-center justify-between px-1 py-1">
      <div className="flex w-1/12 justify-between lg:justify-around items-center">
        <p>{5 - percent}</p>
        <i className="text-yellow-500 fas fa-star"></i>
      </div>
      <div className="w-8/12">
        <ProgressBar progressPercentage={`${(4 - percent + 1) * 20}`} />
      </div>
      <div className="w-1/12">50%</div>
    </div>
  );
};

export default ProgressBarContainer;
