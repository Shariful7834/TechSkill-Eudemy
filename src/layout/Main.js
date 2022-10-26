import React from "react";
import Header from "../shared/Header/Header";

import { Outlet } from "react-router-dom";

import Footer from "../shared/Footer/Footer";

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
