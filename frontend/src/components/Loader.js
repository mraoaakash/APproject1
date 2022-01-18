import React from "react";
import { Spinner } from "react-bootstrap";

/*
 * Section Authored by:  Ekansh Sharma
 * Commit history absent due to repository issues
 */
const Loader = () => {
  return (
    <Spinner
      animation="border"
      role="status"
      style={{
        width: "50px",
        height: "50px",
        margin: "auto",
        display: "block",
      }}
    >
      <span className="sr-only">Loading...</span>
    </Spinner>
  );
};

export default Loader;
