import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const Courses = ({ course }) => {
  const { course_title, image_url, details, _id, price } = course;
  return (
    <div>
      <Card className="mt-3 h-100 ">
        <Card.Img variant="top" src={image_url} />
        <Card.Body>
          <Card.Title>{course_title}</Card.Title>
          <Card.Text>{details}</Card.Text>
          <div className="d-flex justify-content-between align-items-center">
            <Link to={`/course/${_id}`}>
              <Button variant="primary">Course Details</Button>
            </Link>
            <div>
              <span>
                <h6>Price: ${price}</h6>
              </span>
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Courses;
