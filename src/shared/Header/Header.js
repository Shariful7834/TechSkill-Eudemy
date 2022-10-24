import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="white" variant="dark">
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
          <Nav className="mx-auto ">
            <Nav.Link href="#features">All News</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          {/* <Nav>
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
            >
              {user?.displayName}
            </Nav.Link>
            <div>
              <Nav.Link>
                {user?.uid ? (
                  <>
                    <Image
                      roundedCircle
                      style={{ height: "40px", width: "40px" }}
                      src={user?.photoURL}
                    ></Image>
                  </>
                ) : (
                  <>
                    <FaUserAlt></FaUserAlt>
                  </>
                )}
              </Nav.Link>
            </div>
          </Nav> */}
          <div className="d-lg-none">{/* <LeftSideNav></LeftSideNav> */}</div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
