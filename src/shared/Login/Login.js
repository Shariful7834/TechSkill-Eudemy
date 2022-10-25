import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { AuthContext } from "../../context/UserContext";

const Login = () => {
  const { signIn } = useContext(AuthContext);

  const handleSignIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .then((error) => console.error(error));
  };
  return (
    <div>
      <Container>
        <Row className=" d-flex justify-content-center ">
          <Col md={8} lg={6} xs={9}>
            <div className="border border-3 border-primary"></div>
            <Card className="shadow">
              <Card.Body>
                <div className="mb-3 mt-md-4">
                  <h2 className="fw-bold mb-2 text-uppercase ">Login</h2>
                  <p className=" mb-5">Please enter your login and password!</p>
                  <div className="mb-3">
                    <Form onSubmit={handleSignIn}>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control
                          type="email"
                          name="email"
                          placeholder="Enter email"
                          required
                        />
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Control
                          type="password"
                          placeholder="Password"
                          name="password"
                          required
                        />
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicCheckbox"
                      >
                        <p className="small text-start">
                          <a className="text-primary " href="#!">
                            Forgot password?
                          </a>
                        </p>
                      </Form.Group>
                      <div className="d-grid">
                        <Button variant="primary" type="submit">
                          Login
                        </Button>
                      </div>
                      <div className="mt-3 ">
                        <ButtonGroup vertical className="w-100">
                          <Button variant="outline-primary" className="mb-2">
                            <FaGoogle className="me-2" />
                            Google with Login
                          </Button>
                          <Button variant="outline-dark">
                            <FaGithub className="me-2" /> Github with login
                          </Button>
                        </ButtonGroup>
                      </div>
                    </Form>
                    <div className="mt-3">
                      <p className="mb-0  text-center">
                        Don't have an account?{" "}
                        <Link to="/register">Create a new account</Link>
                      </p>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
