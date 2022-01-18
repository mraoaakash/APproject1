import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Button, ListGroup, Image } from "react-bootstrap";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { Link } from "react-router-dom";

//actions
import { getUserDetails, wishlistRemove } from "../actions/uActions";

const WishlistScreen = ({ match, history, location }) => {
  const id = match.params.id || 0;
  console.log(id);
  const dispatch = useDispatch();

  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (!userInfo) {
      history.push("/login");
    } else {
      if (id === 1) {
        dispatch(getUserDetails(userInfo._id));
        window.location.reload();
      }
      dispatch(getUserDetails(userInfo._id));
    }
  }, [dispatch, id, history, userInfo]);

  const removeFromWishlist = (id) => {
    dispatch(wishlistRemove(id));
    window.location.reload();
  };
  const addToCartHandler = (id) => {
    history.push(`/cart/${id}?qty=1`);
    dispatch(wishlistRemove(id));
  };
  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <>
          <Col md={12}>
            <h1>Wishlist</h1>
            {user.wishlistItems && user.wishlistItems.length === 0 ? (
              <Message>
                Your Wishlist is empty <Link to="/">Go Back</Link>
              </Message>
            ) : (
              <ListGroup variant="flush">
                {user.wishlistItems &&
                  user.wishlistItems.map((item) => (
                    <>
                      <ListGroup.Item key={item._id}>
                        <Row>
                          <Col md={2}>
                            <Image
                              src={item.image}
                              alt={item.name}
                              fluid
                              rounded
                            />
                          </Col>
                          <Col md={3}>
                            <Link to={`/product/${item.id}`}>{item.name}</Link>
                          </Col>
                          <Col md={2}>${item.price}</Col>
                          <Col>
                            <Button
                              onClick={() => removeFromWishlist(item.id)}
                              className="btn-block"
                              type="button"
                            >
                              <i className="fas fa-trash-alt"></i>
                            </Button>
                          </Col>
                          <Col>
                            <Button
                              onClick={() => addToCartHandler(item.id)}
                              className="btn-block"
                              type="button"
                              disabled={item.countInStock === 0}
                            >
                              <i className="fas fa-shopping-cart"></i>
                            </Button>
                          </Col>
                        </Row>
                      </ListGroup.Item>
                    </>
                  ))}
              </ListGroup>
            )}
          </Col>
        </>
      )}
    </>
  );
};

export default WishlistScreen;
