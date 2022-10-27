import React from "react";
import { Card, Col, Container, ListGroup, Row } from "react-bootstrap";
import {
  BsCameraVideoFill,
  BsClock,
  BsCloudDownloadFill,
  BsFillBarChartLineFill,
  BsFillBellFill,
  BsGlobe2,
  BsListCheck,
  BsStar,
} from "react-icons/bs";

const FAQ = () => {
  return (
    <Container>
      <h1 className="mt-4 text-center text-warning">
        Course Overview at a glance
      </h1>
      <Row>
        <Col lg="6" className="mt-5 pe-3">
          <h1>Complete Access to All Courses!</h1>
          <div className="mt-3 me-5">
            <p className="fs-5">
              {" "}
              To land your coding dream job, you need to be skilled in as many
              areas of coding as you can. You need to know various programming
              languages, data structures, design patterns, front-end/back-end
              libraries, databases, etc. <br />
              <br /> For a small monthly (or annual) fee, you'll{" "}
              <strong>
                get unlimited access to all my existing and future courses
              </strong>
              . <br />
              <br /> Just like your internet service, your subscription will
              renew automatically, but feel free to cancel anytime with a single
              click! <br /> <br /> Learn from my two decades of experience as a
              professional software engineer. <br /> <br /> Zero-fluff,
              value-packed courses with a perfect mix of theory and real-life
              practice.
            </p>
          </div>
        </Col>
        <Col lg="6">
          <Card className="border-0 mt-5">
            <Card.Header className="bg-primary "></Card.Header>
            <ListGroup variant="flush" className="fs-5 py-2">
              <ListGroup.Item className="py-3">
                <BsFillBarChartLineFill></BsFillBarChartLineFill> BEGINNER TO
                PRO
              </ListGroup.Item>
              <ListGroup.Item className="py-3">
                {" "}
                <BsFillBellFill></BsFillBellFill> LIFETIME ACCESS
              </ListGroup.Item>
              <ListGroup.Item className="py-3">
                <BsClock></BsClock> 150 LESSIONS
              </ListGroup.Item>
              <ListGroup.Item className="py-3">
                <BsListCheck></BsListCheck> CHEAT SHEETS
              </ListGroup.Item>
              <ListGroup.Item className="py-3">
                <BsCloudDownloadFill></BsCloudDownloadFill> DOWNLOADABLE
              </ListGroup.Item>
              <ListGroup.Item className="py-3">
                <BsGlobe2></BsGlobe2> SUBTITLES
              </ListGroup.Item>
              <ListGroup.Item className="py-3">
                <BsCameraVideoFill></BsCameraVideoFill> ACCESS ON MOBILE/TV
              </ListGroup.Item>
              <ListGroup.Item className="py-3">
                <BsStar></BsStar> CERTIFICATE
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default FAQ;
