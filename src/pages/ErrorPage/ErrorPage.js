import React from "react";
import {
  Button,
  Container,
  Image,
  Nav,
  Navbar,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import { FaUserAlt } from "react-icons/fa";
import { Link, useRouteError } from "react-router-dom";
import Logo from "../../assets/brands/saderror.png";
import { AuthContext } from "../../context/UserContext";
import { useContext } from "react";
import logo from "../../assets/brands/logo1.png";

const ErrorPage = () => {
  const error = useRouteError();
  const { user, logOut } = useContext(AuthContext);
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        sticky="top"
      >
        <Container>
          <Navbar.Brand className="d-flex align-items-center">
            <Image
              roundedCircle
              style={{ width: "80px", height: "80px" }}
              src={logo}
              alt=""
              className="d-inline-block align-top"
            />
            <Link style={{ textDecoration: "none" }} to="/">
              <h2 style={{ color: "tomato" }} className=" fs-1 py-2 ms-2">
                Tech <span style={{ color: "#21b573" }}>Skills</span> EDU
              </h2>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto ">
              <Link
                style={{
                  textDecoration: "none",
                  marginRight: "20px",
                  color: "white",
                  fontSize: "22px",
                }}
                to="/courses"
              >
                Courses
              </Link>
              <Link
                style={{
                  textDecoration: "none",
                  marginRight: "20px",
                  color: "white",
                  fontSize: "22px",
                }}
                to="/courses"
              >
                Pricing
              </Link>
              <Link
                style={{
                  textDecoration: "none",
                  marginRight: "50px",
                  color: "white",
                  fontSize: "22px",
                }}
                to="/blogs"
              >
                Blogs
              </Link>
            </Nav>
            <Nav>
              {user?.uid ? (
                <Button
                  className="fs-5 me-3 text-white "
                  variant="outline-success"
                  style={{ height: "40px", marginTop: "5px" }}
                  onClick={logOut}
                >
                  LogOut
                </Button>
              ) : (
                <>
                  <Button className="fs-5 me-3 " variant="outline-success">
                    <Link
                      style={{ textDecoration: "none", color: "white" }}
                      className="me-3 "
                      to="/login"
                    >
                      Login
                    </Link>
                  </Button>

                  <Button className="fs-5 me-3  " variant="outline-success">
                    {" "}
                    <Link
                      style={{ textDecoration: "none", color: "white" }}
                      to="/register"
                    >
                      Register
                    </Link>
                  </Button>
                </>
              )}

              <div>
                <Nav.Link>
                  {user?.uid ? (
                    <>
                      <OverlayTrigger
                        placement="bottom"
                        overlay={
                          <Tooltip id="button-tooltip-2">
                            {user?.displayName}
                          </Tooltip>
                        }
                      >
                        {({ ref, ...triggerHandler }) => (
                          <span
                            variant="light"
                            {...triggerHandler}
                            className="d-inline-flex align-items-center rounded-3"
                          >
                            <Image
                              roundedCircle
                              style={{ height: "40px", width: "40px" }}
                              src={user?.photoURL}
                              ref={ref}
                            />
                          </span>
                        )}
                      </OverlayTrigger>
                    </>
                  ) : (
                    <>
                      <FaUserAlt></FaUserAlt>
                    </>
                  )}
                </Nav.Link>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container className="text-center">
        <div className="container d-block mx-auto">
          <h1>Awwww.... Don't Cry!!</h1>
          <h5>It's just a </h5>

          <img className="img-fluid w-25" src={Logo} alt="" />
          <h4>{error.statusText || error.message} error</h4>
        </div>
      </Container>
    </>
  );
};

export default ErrorPage;
