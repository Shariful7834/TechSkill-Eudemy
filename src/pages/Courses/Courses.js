import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const Courses = ({ course }) => {
  const { course_title, image_url, details, _id } = course;
  return (
    <div>
      <Card className="mt-3 ">
        <Card.Img variant="top" src={image_url} />
        <Card.Body>
          <Card.Title>{course_title}</Card.Title>
          <Card.Text>{details}</Card.Text>
          <Link to={`/course/${_id}`}>
            <Button variant="primary">Course Details</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Courses;
