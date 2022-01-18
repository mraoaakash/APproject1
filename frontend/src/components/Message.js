import React from "react";
import { Alert } from "react-bootstrap";

/*
 * Section Authored by:  Ekansh Sharma
 * Commit history absent due to repository issues
 */
const Message = ({ variant, children }) => {
  return <Alert variant={variant}>{children}</Alert>;
};

Message.defaultProps = {
  variant: "info",
};

export default Message;
