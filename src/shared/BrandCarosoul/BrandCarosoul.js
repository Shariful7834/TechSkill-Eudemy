import React from "react";
import { Carousel } from "react-bootstrap";
import Brand1 from "../../assets/brands/Brand1.jpg";
import Brand2 from "../../assets/brands/Brand2.jpg";
import Brand3 from "../../assets/brands/Brand3.jpg";

const BrandCarosoul = () => {
  return (
    <div>
      <Carousel variant="light">
        <Carousel.Item>
          <img className="d-block w-100" src={Brand1} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Brand2} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Brand3} alt="Second slide" />
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={Brand3} alt="Second slide" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default BrandCarosoul;
