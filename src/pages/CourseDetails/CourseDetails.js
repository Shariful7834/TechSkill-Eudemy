import React from "react";
import { Button, Card, Col, ListGroup, Row } from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom";
import "./CourseDetails.css";
import { FaCartPlus } from "react-icons/fa";
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
import Pdf from "react-to-pdf";

const CourseDetails = () => {
  const courseDetails = useLoaderData();
  const { course_title, details, image_url, _id } = courseDetails;
  const ref = React.createRef();
  return (
    <div>
      <div className="backgroundImg text-center pt-5">
        <h1 style={{ fontSize: "4rem", color: "white" }}>{course_title}</h1>
        <h2
          style={{ width: "45%" }}
          className=" text-center mx-auto mt-3 text-white mb-5"
        >
          {details}
        </h2>

        <Pdf targetRef={ref} filename="code-example.pdf">
          {({ toPdf }) => (
            <Button className="rounded-3 px-4 py-2 fs-5 mb-5" onClick={toPdf}>
              Download Pdf
            </Button>
          )}
        </Pdf>
      </div>
      <div className="container mt-5" ref={ref}>
        <Row>
          <Col lg="7">
            <h1 className="mb-3">{course_title}</h1>
            <img className="img-fluid w-75" src={image_url} alt="" />
            <p className="mt-4 fs-5 me-5">
              Have you always wanted to learn web development but didn't know
              where to start? Tired of lengthy, boring and outdated courses?
              This course is for you.
            </p>
            <Link to={`/cartCourse/${_id}`}>
              <Button className="rounded-3 px-4 py-2 fs-4 mb-5 mt-5 text-white bg-success">
                <FaCartPlus className="me-2"></FaCartPlus>Get Premium Access
              </Button>
            </Link>
          </Col>
          <Col lg="5">
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
      </div>
    </div>
  );
};

export default CourseDetails;
