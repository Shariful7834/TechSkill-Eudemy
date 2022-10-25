import React from "react";
import Header from "../shared/Header/Header";

import { Outlet } from "react-router-dom";

import Footer from "../shared/Footer/Footer";
import { Col, Container, Row } from "react-bootstrap";
import LeftSideNav from "../shared/LeftSideNav/LeftSideNav";
import RightSideNav from "../shared/RightSideNav/RightSideNav";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>

      {/* <Container className="mt-5">
        <Row>
          <Col lg="9" className="text-center">
            <LeftSideNav>
              <Outlet></Outlet>
            </LeftSideNav>
          </Col>
          <Col lg="3">
            <RightSideNav></RightSideNav>
          </Col>
        </Row>
      </Container> */}
      <Footer></Footer>
    </div>
  );
};

export default Main;
