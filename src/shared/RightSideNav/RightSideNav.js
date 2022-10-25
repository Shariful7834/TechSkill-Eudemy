import React from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { ListGroup } from "react-bootstrap";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import BrandCarosoul from "../BrandCarosoul/BrandCarosoul";
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
      <div className="mt-5">
        <h2>Select course</h2>
        {courseCategories.map((courseCategory) => (
          <Link
            key={courseCategory.id}
            style={{ textDecoration: "none", fontSize: "18px" }}
            to={`/courseCategory/${courseCategory.id}`}
          >
            <ListGroup>
              <ListGroup.Item className="mb-2 linkHover">
                {courseCategory.name}
              </ListGroup.Item>
            </ListGroup>
          </Link>
        ))}
      </div>
      <hr
        className="mt-5"
        style={{
          borderBottom: "none",
          border: "10px solid green",
          width: "100%",
          borderStyle: "dotted",
        }}
      />
      <div>
        <BrandCarosoul></BrandCarosoul>
      </div>
    </div>
  );
};

export default RightSideNav;
