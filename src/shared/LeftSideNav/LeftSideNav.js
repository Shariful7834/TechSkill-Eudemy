import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";

const LeftSideNav = () => {
  const [courseCategories, setCourseCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/courses")
      .then((res) => res.json())
      .then((data) => setCourseCategories(data));
  }, []);
  return (
    <Container>
      <Row>
        <Col lg="12">
          <div>
            <h1>This is left side for course {courseCategories.length} </h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta a
              magni est doloribus rerum cumque iusto maxime debitis non nisi
              numquam architecto blanditiis, possimus iste earum omnis officia
              quas vitae dignissimos ut eveniet sapiente cupiditate. Nesciunt,
              quas commodi perspiciatis numquam, optio rerum voluptate beatae
              repellendus in aliquam tempore fugit tenetur! Lorem ipsum dolor,
              sit amet consectetur adipisicing elit. Soluta a magni est
              doloribus rerum cumque iusto maxime debitis non nisi numquam
              architecto blanditiis, possimus iste earum omnis officia quas
              vitae dignissimos ut eveniet sapiente cupiditate. Nesciunt, quas
              commodi perspiciatis numquam, optio rerum voluptate beatae
              repellendus in aliquam tempore fugit tenetur!
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default LeftSideNav;
