import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1 style={{ color: "red" }}>API Access Limit Exceeded!</h1>
      <Link to="/">
        <h5 style={{ color: "green" }}>Click here to try again</h5>
      </Link>
    </div>
  );
};

export default ErrorPage;
