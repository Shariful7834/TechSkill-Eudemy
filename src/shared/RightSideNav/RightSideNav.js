import React from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { ListGroup } from "react-bootstrap";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./RightSideNav.css";
const RightSideNav = () => {
  const [courseCategories, setCourseCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/course-categories")
      .then((res) => res.json())
      .then((data) => setCourseCategories(data));
  }, []);

  return (
    <div>
      <ButtonGroup vertical>
        <Button
          variant="outline-primary"
          className="mb-2"
          style={{ width: "305px" }}
        >
          <FaGoogle className="me-2" />
          Google with Login
        </Button>
        <Button variant="outline-dark">
          <FaGithub className="me-2" /> Github with login
        </Button>
      </ButtonGroup>
      <hr
        className="mt-5"
        style={{
          borderBottom: "none",
          border: "10px solid green",
          width: "100%",
          borderStyle: "dotted",
        }}
      />
      <div className="mt-5">
        <h2>Select course</h2>
        {courseCategories.map((courseCategory) => (
          <ListGroup key={courseCategory.id}>
            <ListGroup.Item className="mb-2 linkHover">
              <Link
                style={{ textDecoration: "none", fontSize: "18px" }}
                to={`/courseCategory/${courseCategory.id}`}
              >
                {courseCategory.name}
              </Link>
            </ListGroup.Item>
          </ListGroup>
        ))}
      </div>
    </div>
  );
};

export default RightSideNav;
