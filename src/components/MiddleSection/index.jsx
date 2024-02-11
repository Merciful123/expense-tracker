import React from "react";
import "./index.css";

const Middle = () => {
  return (
    <div className="middle-container row middle-bg">
      <div className="left-section col-xs-12 col-lg-2 border m-4">left</div>
      <div className="middle-section col-xs-12 col-lg-7 ">
        <div className="row  mt-4 ">
          <div className="col-3 gap-1 middle-section-child border">
            <div>Food </div>
            <div>Price 100</div>
          </div>
          <div className="   col-3 middle-section-child border">
            <div>Bills and Payment</div>
            <div>price 100</div>
          </div>
          <div className=" col-3 middle-section-child border">
            <div>Entertainment</div>
            <div>price 100</div>
          </div>
        </div>
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-10 border middle-section-child-lower">lower</div>
        </div>
      </div>
      <div className="right-section col-xs-12 col-lg-2 border m-4">right</div>
    </div>
  );
};

export default Middle;
