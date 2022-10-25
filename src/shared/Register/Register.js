import React from "react";
import { useContext, useState } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import { Link, Navigate } from "react-router-dom";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { AuthContext } from "../../context/UserContext";
const Register = () => {
  const { signUpUser, googleProvider, user } = useContext(AuthContext);
  const [error, setError] = useState();
  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const fullName = form.fullName.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.confirm.value;
    const photoUrl = form.photoUrl.value;
    if (password.length < 6) {
      setError("Password should be more than 6 character");
    }

    if (password !== confirm) {
      setError("Your password did not matched");
      return;
    }
    signUpUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        <Navigate to="/"></Navigate>;
      })
      .then((error) => console.error(error));
  };
  const handleGoogle = () => {
    googleProvider()
      .then((result) => {
        const user = result.user;
        console.log(user);
        <Navigate to="/"></Navigate>;
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <Container className="vh-100 mt-5">
        <Row className=" d-flex justify-content-center ">
          <Col md={8} lg={6} xs={9}>
            <Card className="shadow">
              <Card.Body>
                <div className="mb-3 mt-md-4">
                  <h2 className="fw-bold mb-2 text-uppercase text-center">
                    Sign Up
                  </h2>
                  <p className=" mb-5 text-center">
                    Please Fill up the form registration!
                  </p>
                  <div className="mb-3">
                    <Form onSubmit={handleSignUp}>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control
                          type="text"
                          name="fullName"
                          placeholder="Full Name"
                          required
                        />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control
                          type="text"
                          name="photoUrl"
                          placeholder="Image URL"
                          required
                        />
                      </Form.Group>

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
                        controlId="formBasicPassword"
                      >
                        <Form.Control
                          type="password"
                          placeholder="Confirm Password"
                          name="confirm"
                          required
                        />
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicCheckbox"
                      >
                        <p className="small text-start mt-2 text-danger">
                          {error}
                        </p>
                      </Form.Group>
                      <div className="d-grid">
                        <Button variant="primary" type="submit">
                          Login
                        </Button>
                      </div>
                      <div className="mt-3 ">
                        <ButtonGroup vertical className="w-100">
                          <Button
                            onClick={handleGoogle}
                            variant="outline-primary"
                            className="mb-3"
                          >
                            <FaGoogle className="me-2" />
                            Sign Up with Google
                          </Button>
                          <Button variant="outline-dark">
                            <FaGithub className="me-2" /> Github Sign Up
                          </Button>
                        </ButtonGroup>
                      </div>
                    </Form>
                    <div className="mt-3">
                      <p className="mb-0  text-center">
                        Already have an account?
                        <Link to="/login">Login</Link>
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

export default Register;
