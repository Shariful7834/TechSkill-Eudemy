import React from "react";
import { Button, Card, Col, Image, Row } from "react-bootstrap";
import toast from "react-hot-toast";
import { Link, useLoaderData } from "react-router-dom";

const CheckOut = () => {
  const checkOut = useLoaderData();
  // const [modalShow, setModalShow] = React.useState(false);

  const { course_title, price, image_url } = checkOut;
  const newPrice = parseInt(price);
  const vat = 9.65;
  const totalBill = parseFloat(newPrice + vat);

  const handleBuy = () => {
    toast.success("successfully completed");
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
            <div>
              <Link to="/courses">
                <Button onClick={handleBuy} className="w-100 mt-5">
                  Buy Now {`${totalBill}`}
                </Button>
              </Link>
              {/* <Modal
                show={modalShow}
                onHide={() => setModalShow(false)}
              ></Modal> */}
            </div>
          </div>
        </Col>
        <Col lg="6"> Payment Information</Col>
      </Row>
    </div>
  );
};

export default CheckOut;
