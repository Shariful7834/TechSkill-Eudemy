import React from "react";
import { Col, Container, ListGroup, Row } from "react-bootstrap";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import BrandCarosoul from "../BrandCarosoul/BrandCarosoul";
import "./RightSideNav.css";
import LeftSideNav from "../LeftSideNav/LeftSideNav";
const RightSideNav = () => {
  const [courseCategories, setCourseCategories] = useState([]);

  useEffect(() => {
    fetch("https://tech-skills-edu-server.vercel.app/courses")
      .then((res) => res.json())
      .then((data) => setCourseCategories(data));
  }, []);

  return (
    <Container className="vh-100 mt-5">
      <Row>
        <Col lg="9">
          <LeftSideNav></LeftSideNav>
        </Col>
        <Col lg="3">
          <div>
            <BrandCarosoul></BrandCarosoul>
          </div>
          <hr />
          <div className="mt-5">
            <h2>Select course</h2>
            {courseCategories.map((courseCategory) => (
              <Link
                key={courseCategory.course_id}
                style={{ textDecoration: "none", fontSize: "18px" }}
                to={`/course/${courseCategory._id}`}
              >
                <ListGroup>
                  <ListGroup.Item className="mb-2 linkHover">
                    {courseCategory.course_title}
                  </ListGroup.Item>
                </ListGroup>
              </Link>
            ))}
          </div>
          <hr />
        </Col>
      </Row>
    </Container>
  );
};

export default RightSideNav;
