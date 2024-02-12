import React from "react";
import { Button, Col,  Row } from "react-bootstrap";
import "./index.css"
import AddExpense from "../AddExpense";
const Navbar = () => {
  return (
    <div className="">
      <Row className="navbar-container border">
        <Col
          xs={7}
          md={10}
          className=" d-flex justify-content-start  align-items-center"
        >
          <div className="logo-text fs-3 fw-bolder mx-sm-5 ">
            SPENDWISE
          </div>
        </Col>
        <Col
          xs={5}
          md={2}
          className="d-flex justify-content-center align-items-center"
        >
          
          <AddExpense/>
        </Col>
        {/* <Col
          xs={3}
          md={2}
          className="d-flex justify-content-center align-items-center m-0"
        >
          <Button className="primary mt-1 bg-black border-0">
            Log Expense
          </Button>
        </Col> */}
      </Row>
    </div>
  );
};

export default Navbar;
