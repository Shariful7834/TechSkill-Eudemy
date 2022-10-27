import React from "react";
import { Button, Card, Col, Image, Row } from "react-bootstrap";
import toast from "react-hot-toast";
import { Link, useLoaderData } from "react-router-dom";
import {
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBInput,
  MDBRow,
} from "mdb-react-ui-kit";

const CheckOut = () => {
  const checkOut = useLoaderData();
  // const [modalShow, setModalShow] = React.useState(false);

  const { course_title, price, image_url } = checkOut;
  const newPrice = parseInt(price);
  const vat = 9.65;
  const totalBill = parseFloat(newPrice + vat);

  const handleBuy = () => {
    toast.success("successfully Purchased");
  };

  return (
    <div className="container">
      <h2 className="my-5 text-center">Payment and Cart Information</h2>
      <Row>
        <Col lg="6">
          <div className="p-3">
            <h3>Order Summary</h3>
            <Card body>
              <div className="d-flex p-3">
                <Image
                  style={{ width: "150px", height: "90px" }}
                  src={image_url}
                  alt=""
                ></Image>
                <div className="ms-4">
                  <h5 className="mb-0">{course_title}</h5>
                  <span className="mt-0">
                    <h6>
                      <strong>${price}</strong>
                    </h6>
                  </span>
                </div>
              </div>
              <div className="ms-3 mt-3 ">
                <div className="d-flex justify-content-between">
                  <h6 className="text-primary">SUCCEED</h6>
                  <h6>
                    <span>-${newPrice}</span>
                  </h6>
                </div>
              </div>
              <div className="ms-3 mt-3 ">
                <div className="d-flex justify-content-between">
                  <h6 className="text-primary">Est. Tax -19% (Germany)</h6>
                  <h6>
                    <span>-${vat}</span>
                  </h6>
                </div>
              </div>
              <hr className="my-5" />
              <div className="ms-3 mt-3 ">
                <div className="d-flex justify-content-between">
                  <h6 className="text-primary">
                    <strong>Billed Today (USD)</strong>
                  </h6>
                  <h6>
                    <strong>
                      <span>${`${totalBill}`}</span>
                    </strong>
                  </h6>
                </div>
              </div>
            </Card>
            <div className="mb-5">
              <Link to="/courses">
                <Button onClick={handleBuy} className="w-100 mt-5">
                  Buy Now {`${totalBill}`}
                </Button>
              </Link>
            </div>
            <div className="mt-5">
              <h2 className="ms-2">Payment Method</h2>{" "}
              <MDBContainer className="py-1">
                <MDBRow className=" d-flex justify-content-center">
                  <MDBCol>
                    <MDBCard className="rounded-3">
                      <MDBCardBody className="p-3">
                        <div className="text-center mb-4">
                          <h3>Settings</h3>
                          <h6>Payment</h6>
                        </div>
                        <p className="fw-bold mb-4 pb-2">Saved cards:</p>
                        <div className="d-flex flex-row align-items-center mb-4 pb-1">
                          <img
                            className="img-fluid"
                            src="https://img.icons8.com/color/48/000000/mastercard-logo.png"
                            alt=""
                          />
                          <div className="flex-fill mx-3">
                            <div className="form-outline">
                              <MDBInput
                                label="Card Number"
                                id="form1"
                                type="text"
                                size="lg"
                                value="**** **** **** 3193"
                              />
                            </div>
                          </div>
                          <a href="#!">Remove card</a>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4 pb-1">
                          <img
                            className="img-fluid"
                            src="https://img.icons8.com/color/48/000000/visa.png"
                            alt=""
                          />
                          <div className="flex-fill mx-3">
                            <div className="form-outline">
                              <MDBInput
                                label="Card Number"
                                id="form2"
                                type="text"
                                size="lg"
                                value="**** **** **** 4296"
                              />
                            </div>
                          </div>
                          <a href="#!">Remove card</a>
                        </div>
                        <p className="fw-bold mb-4">Add new card:</p>
                        <MDBInput
                          label="Cardholder's Name"
                          id="form3"
                          type="text"
                          size="lg"
                          value="Shariful Islam"
                        />
                        <MDBRow className="my-4">
                          <MDBCol size="7">
                            <MDBInput
                              label="Card Number"
                              id="form4"
                              type="text"
                              size="lg"
                              value="1234 5678 1234 5678"
                            />
                          </MDBCol>
                          <MDBCol size="3">
                            <MDBInput
                              label="Expire"
                              id="form5"
                              type="password"
                              size="lg"
                              placeholder="MM/YYYY"
                            />
                          </MDBCol>
                          <MDBCol size="2">
                            <MDBInput
                              label="CVV"
                              id="form6"
                              type="password"
                              size="lg"
                              placeholder="CVV"
                            />
                          </MDBCol>
                        </MDBRow>
                        <Link to="/">
                          <Button onClick={handleBuy} className="w-100 mt-5">
                            <h5>Purchase ${`${totalBill}`}</h5>
                          </Button>
                        </Link>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>
                </MDBRow>
              </MDBContainer>
            </div>
          </div>
        </Col>
        <Col lg="6">
          <div className="mt-5 ms-5 ps-5">
            <h3>See what others have to say...</h3>
            <div className="d-flex mt-5">
              <img src="" alt="" />

              <p className="ms-2 text-secondary  ">
                This courses teach exactly what the titles promise to teach.
                Quality of production, content, and lectures are excellent!
                Explanations of the how and why are also a nice touch! -
                Shariful Islam
              </p>
            </div>
            <div className="d-flex mt-5">
              <img src="" alt="" />

              <p className="ms-2 text-secondary ">
                this courses teach exactly what the titles promise to teach.
                Quality of production, content, and lectures are excellent!
                Explanations of the how and why are also a nice touch! -
                Shariful Islam
              </p>
            </div>
            <div className="d-flex mt-5">
              <img src="" alt="" />

              <p className="ms-2 text-secondary ">
                this courses teach exactly what the titles promise to teach.
                Quality of production, content, and lectures are excellent!
                Explanations of the how and why are also a nice touch! -
                Shariful Islam
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default CheckOut;
