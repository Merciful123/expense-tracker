import React from "react";
import { Button, Col,  Row } from "react-bootstrap";
import "./index.css"
const Navbar = () => {
  return (
    <div className="">
      <Row className="navbar-container border">
        <Col
          xs={6}
          md={8}
          className=" d-flex justify-content-start  align-items-center"
        >
          <div className="logo-text fs-3 fw-bolder mx-sm-5 ">
            SPENDWISE
          </div>
        </Col>
        <Col
          xs={3}
          md={2}
          className="d-flex justify-content-center align-items-center"
        >
          <Button className="primary center mt-1 px-2 bg-black border-0">
            Log Credit
          </Button>
        </Col>
        <Col
          xs={3}
          md={2}
          className="d-flex justify-content-center align-items-center m-0"
        >
          <Button className="primary mt-1 bg-black border-0">
            Log Expense
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default Navbar;
