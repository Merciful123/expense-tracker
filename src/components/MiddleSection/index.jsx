import React from "react";
import "./index.css";
import LeftSidebar from "../LeftSideBar";

const Middle = () => {
  return (
    <div className="middle-container row middle-bg d-flex justify-content-center w-100">
      <div className="left-section col-xs-12 col-lg-2 border bg-white m-4">
        <LeftSidebar />
      </div>
      <div className="middle-section col-xs-12 col-lg-7 ">
        <div className="row  mt-4 mb-4 d-flex flex-wrap justify-content-center gap-2">
          <div className="col-3 d-flex flex-column gap-4 middle-section-child border bg-white justify-content-between p-2">
            <div className="text-danger fw-bolder">Food </div>
            <div className="fw-bolder">Price 100</div>
          </div>
          <div className="   col-3 d-flex flex-column gap-4 middle-section-child border bg-white flex-wrap justify-content-between p-2">
            <div className="text-danger fw-bolder">Bills and Payment</div>
            <div className="fw-bolder">price 100</div>
          </div>
          <div className=" col-3 d-flex flex-column gap-4 justify-content-between middle-section-child border bg-white p-2 text-wrap">
            <div className=" text-danger fw-bolder text-wrap">
              Entertainment
            </div>
            <div className="fw-bolder">price 100</div>
          </div>
        </div>
        <div className="row d-flex justify-content-center align-items-center m-lg-4">
          <div className="col-10 border middle-section-child-lower bg-white">
            lower
          </div>
        </div>
      </div>
      <div className="right-section col-xs-12 col-lg-2 border m-4 bg-white ">
        <div className="fw-bold p-2">YOUR TRANSATION HISTORY</div>
        <div className="d-flex justify-content-between mt-4">
          <div className="p-2">
            <div>Name</div>
            <div className="fw-lighter">Date</div>
          </div>
          <div>price</div>
        </div>
      </div>
    </div>
  );
};

export default Middle;
