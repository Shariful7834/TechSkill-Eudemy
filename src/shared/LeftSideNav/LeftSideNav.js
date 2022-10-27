import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Courses from "../../pages/Courses/Courses";

const LeftSideNav = () => {
  const [courseCategories, setCourseCategories] = useState([]);

  useEffect(() => {
    fetch("https://tech-skills-edu-server.vercel.app/courses")
      .then((res) => res.json())
      .then((data) => setCourseCategories(data));
  }, []);
  return (
    <Container>
      <Row>
        <Col lg="12">
          <h1 className="text-center mb-4">A broad selection of courses </h1>
          <Row lg="3" className="g-4">
            {courseCategories.map((course) => (
              <Courses key={course._id} course={course}></Courses>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default LeftSideNav;
