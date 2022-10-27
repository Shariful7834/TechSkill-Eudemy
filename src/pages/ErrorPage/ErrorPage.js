import React from "react";
import { Container } from "react-bootstrap";
import { useRouteError } from "react-router-dom";
import Logo from "../../assets/brands/saderror.png";
const ErrorPage = () => {
  const error = useRouteError();
  return (
    <Container className="text-center">
      <div className="container d-block mx-auto">
        <h1>Awwww.... Don't Cry!!</h1>
        <h5>It's just a </h5>

        <img className="img-fluid w-25" src={Logo} alt="" />
        <h4>{error.statusText || error.message} error</h4>
      </div>
    </Container>
  );
};

export default ErrorPage;
