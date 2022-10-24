import React from "react";
import Header from "../shared/Header/Header";
import { Container, Row, Col } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import RightSideNav from "../shared/RightSideNav/RightSideNav";
import Footer from "../shared/Footer/Footer";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <Container className="mt-5">
        <Row>
          <Col lg="9" className="text-center">
            <Outlet></Outlet>
          </Col>
          <Col lg="3">
            <RightSideNav></RightSideNav>
          </Col>
        </Row>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default Main;
