import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import Badge from "react-bootstrap/Badge";
import Rating from "./Rating";

/*
 * Section Authored by:  Aaryan Mavani
 * Commit history absent due to repository issues
 */
const Product = ({ product }) => {
  return (
    <Card className="my-3 p-3 rounded">
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} variant="top" />
      </Link>

      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title as="div">
            <strong>{product.name} </strong>
          </Card.Title>
        </Link>

        <Card.Text as="div">
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
        </Card.Text>

        <Card.Text as="h3">${product.price}</Card.Text>
        {product.countInStock === 0 ? (
          <Badge bg="danger">Out of stock</Badge>
        ) : (
          <Badge pill bg="primary">
            In Stock
          </Badge>
        )}
      </Card.Body>
    </Card>
  );
};

export default Product;
