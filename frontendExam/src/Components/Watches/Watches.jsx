import React from "react";
import WatchesCard from "../WatchesCard/WatchesCard";
import "./Watches.scss";
const Watches = () => {
  return (
    <div className="watches">
      <div className="watches-header">
        <span>ADJUSTABLE STRAPS</span>
        <h1>Choose the best </h1>
        <h1>color for your activity</h1>
      </div>
      <WatchesCard />
    </div>
  );
};

export default Watches;
