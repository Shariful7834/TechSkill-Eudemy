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
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>
          <Link style={{ textDecoration: "none" }} to="/">
            <h2 className="text-warning">
              Tech <span className="text-success">Skills</span> EDU
            </h2>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto  ">
            <Link
              style={{
                textDecoration: "none",
                marginRight: "20px",
                color: "white",
                fontSize: "20px",
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
                fontSize: "20px",
              }}
              to="/courses"
            >
              Pricing
            </Link>
            <Link
              style={{
                textDecoration: "none",
                marginRight: "20px",
                color: "white",
                fontSize: "20px",
              }}
              to="/blogs"
            >
              Blogs
            </Link>
          </Nav>
          <Nav>
            {user?.uid ? (
              <Button
                style={{ height: "40px", marginTop: "5px" }}
                onClick={logOut}
              >
                LogOut
              </Button>
            ) : (
              <div className="fs-4 ">
                <Link className="me-3 " to="/login">
                  Login
                </Link>
                <Link to="/register">Register</Link>
              </div>
            )}
            <Nav.Link
              style={{ height: "40px", marginTop: "5px" }}
              href="#deets"
            ></Nav.Link>
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
