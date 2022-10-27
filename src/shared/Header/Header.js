import React from "react";
import {
  Navbar,
  Container,
  Nav,
  Button,
  Image,
  Tooltip,
  OverlayTrigger,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../context/UserContext";
import logo from "../../assets/brands/logo1.png";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  // const signOutUser = () => {
  //   logOutUser()
  //     .then((result) => {
  //       const user = result.user;
  //       console.log(user);
  //     })
  //     .then((error) => console.error(error));
  // };
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
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
  );
};

export default Header;
