import React from "react";
import { AuthContext } from "../../context/UserContext";
import { useContext } from "react";
import Illustration from "../../assets/brands/Illustration.png";
import { Button, Col, Image, Row } from "react-bootstrap";
import "./Home.css";
import book from "../../assets/icons/book.png";
import Student from "../../assets/icons/Student.png";
import Students from "../../assets/icons/Students.png";
import Test from "../../assets/icons/Test.png";
import Man from "../../assets/icons/Man.png";

const Home = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <div className="main-head">
        <div className="container">
          <Row className=" d-flex">
            <Col md="6">
              <h4 className="pb-3">Are you ready to Learn?</h4>
              <h1>
                Learn With fun on{" "}
                <span className="primary-highlight">any schedule</span>
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Mollitia iusto rem dolores vitae repellendus, accusantium
                explicabo.
              </p>
              <Button className="mt-2 btn btn-primary">Get Started</Button>
            </Col>
            <Col md="6">
              <img className="d-block w-100" src={Illustration} />
            </Col>
          </Row>
        </div>
      </div>
      {/* overview  */}
      <section id="overview" className="container">
        <div className="card-deck">
          <Row>
            <Col md="3">
              <div className="card">
                <div className="d-flex justify-content-center">
                  <img className="card-img-top pt-3" src={book} alt="Book" />
                </div>
                <div className="card-body  text-center">
                  <h5 className="card-title">1500+ Topic</h5>
                  <p className="card-text">Learn Anythings</p>
                </div>
              </div>
            </Col>

            <Col md="3">
              <div className="card ">
                <div className="d-flex justify-content-center">
                  <img
                    className="card-img-top pt-3"
                    src={Student}
                    alt="Student"
                  />
                </div>
                <div className="card-body text-center">
                  <h5 className="card-title">1800+ Students</h5>
                  <p className="card-text">Learn Anythings</p>
                </div>
              </div>
            </Col>

            <Col md="3">
              <div className="card">
                <div className="d-flex justify-content-center">
                  <img className="card-img-top pt-3" src={Test} alt="Student" />
                </div>
                <div className="card-body text-center">
                  <h5 className="card-title">9K+ Test Token</h5>
                  <p className="card-text">Learn Anythings</p>
                </div>
              </div>
            </Col>

            <Col md="3">
              <div className="card">
                <div className="d-flex justify-content-center">
                  <img className="card-img-top" src={Student} alt="test" />
                </div>
                <div className="card-body text-center">
                  <h5 className="card-title">2000+ Student</h5>
                  <p className="card-text">Learn Anythings</p>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </section>

      {/* <!-- Testimonial Start --> */}
      <section className="container" id="testimonial">
        <div className="d-flex flex-column justify-content-center align-items-center pt-5 pb-5">
          <h4>Testimonial</h4>
          <div className="secondary-highlight"></div>
        </div>

        <Row>
          <div className="col-md-6 d-flex justify-content-center align-items-center">
            <Image
              className="w-50 py-3 "
              roundedCircle
              src={Man}
              alt="Person"
            />
          </div>
          <div className="col-md-6 d-flex justify-content-center justify-content-sm-center align-items-center">
            <p>
              "My life’s mission is to help novice and professional software
              engineers increase their skills, make more money, and ultimately
              change their lives for the better."
            </p>
          </div>
        </Row>
      </section>
    </div>
  );
};

export default Home;
