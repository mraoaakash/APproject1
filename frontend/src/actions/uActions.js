import axios from "axios";
import {
  USER_DETAILS_FAIL,
  USER_DETAILS_REQUEST,
  USER_DETAILS_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_UPDATE_PROFILE_FAIL,
  USER_UPDATE_PROFILE_REQUEST,
  USER_UPDATE_PROFILE_SUCCESS,
  USER_DETAILS_RESET,
  USER_LIST_FAIL,
  USER_LIST_SUCCESS,
  USER_LIST_REQUEST,
  USER_LIST_RESET,
  USER_DELETE_REQUEST,
  USER_DELETE_SUCCESS,
  USER_DELETE_FAIL,
  USER_UPDATE_FAIL,
  USER_UPDATE_SUCCESS,
  USER_UPDATE_REQUEST,
  USER_WISHLIST_ADD_REQUEST,
  USER_WISHLIST_ADD_SUCCESS,
  USER_WISHLIST_ADD_FAIL,
  USER_WISHLIST_DETAILS_REQUEST,
  USER_WISHLIST_DETAILS_SUCCESS,
  USER_WISHLIST_DETAILS_FAIL,
  USER_WISHLIST_REMOVE_REQUEST,
  USER_WISHLIST_REMOVE_SUCCESS,
  USER_WISHLIST_REMOVE_FAIL,
  USER_GOOGLE_LOGIN_REQUEST,
  USER_GOOGLE_LOGIN_SUCCESS,
  USER_GOOGLE_LOGIN_FAIL,
  USER_GOOGLE_LOGOUT,
  USER_WISHLIST_RESET,
} from "../constants/userConstants";
import { ORDER_LIST_MY_RESET } from "../constants/orderConstants";

/*
 * Section Authored by:  Aakash Rao
 * Commit history absent due to repository issues
 * @desc    Login using form
 */
const login = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: USER_LOGIN_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      "/api/users/login",
      { email, password },
      config
    );

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    });

    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

/*
 * Section Authored by:  Aakash Rao
 * Commit history absent due to repository issues
 * @desc    Login using google OAuth2
 */
const googleLogin = (token) => async (dispatch) => {
  try {
    dispatch({
      type: USER_GOOGLE_LOGIN_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      "/api/users/googlelogin",
      { token },
      config
    );

    console.log(data);

    dispatch({
      type: USER_GOOGLE_LOGIN_SUCCESS,
      payload: data,
    });

    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_GOOGLE_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

/*
 * Section Authored by:  Aakash Rao
 * Commit history absent due to repository issues
 * @desc    Logout
 */
const logout = () => (dispatch) => {
  localStorage.removeItem("userInfo");
  localStorage.removeItem("cartItems");
  localStorage.removeItem("shippingAddress");
  localStorage.removeItem("paymentMethod");
  localStorage.removeItem("wishlistItems");
  dispatch({ type: USER_LOGOUT });
  dispatch({ type: USER_DETAILS_RESET });
  dispatch({ type: ORDER_LIST_MY_RESET });
  dispatch({ type: USER_LIST_RESET });
  dispatch({ type: USER_GOOGLE_LOGOUT });
  dispatch({ type: USER_WISHLIST_RESET });
};

/*
 * Section Authored by:  Aakash Rao
 * Commit history absent due to repository issues
 * @desc    User Registration
 */
const register = (name, email, password) => async (dispatch) => {
  try {
    dispatch({
      type: USER_REGISTER_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      "/api/users",
      { name, email, password },
      config
    );

    dispatch({
      type: USER_REGISTER_SUCCESS,
      payload: data,
    });

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    });

    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_REGISTER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

/*
 * Section Authored by:  Aakash Rao
 * Commit history absent due to repository issues
 * @desc    User details request
 */
const getUserDetails = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: USER_DETAILS_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(`/api/users/${id}`, config);

    dispatch({
      type: USER_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not authorized, token failed") {
      dispatch(logout());
    }
    dispatch({
      type: USER_DETAILS_FAIL,
      payload: message,
    });
  }
};

/*
 * Section Authored by:  Aakash Rao
 * Commit history absent due to repository issues
 * @desc    User detail update
 */
const updateUserProfile = (user) => async (dispatch, getState) => {
  try {
    dispatch({
      type: USER_UPDATE_PROFILE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.put(`/api/users/profile`, user, config);

    dispatch({
      type: USER_UPDATE_PROFILE_SUCCESS,
      payload: data,
    });
    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    });
    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not authorized, token failed") {
      dispatch(logout());
    }
    dispatch({
      type: USER_UPDATE_PROFILE_FAIL,
      payload: message,
    });
  }
};

/*
 * Section Authored by:  Aakash Rao
 * Commit history absent due to repository issues
 * @desc    List of all users
 */
const listUsers = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: USER_LIST_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(`/api/users`, config);

    dispatch({
      type: USER_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not authorized, token failed") {
      dispatch(logout());
    }
    dispatch({
      type: USER_LIST_FAIL,
      payload: message,
    });
  }
};

/*
 * Section Authored by:  Aakash Rao
 * Commit history absent due to repository issues
 * @desc    deleting a particular user
 */
const deleteUser = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: USER_DELETE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    await axios.delete(`/api/users/${id}`, config);

    dispatch({ type: USER_DELETE_SUCCESS });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not authorized, token failed") {
      dispatch(logout());
    }
    dispatch({
      type: USER_DELETE_FAIL,
      payload: message,
    });
  }
};

/*
 * Section Authored by:  Aakash Rao
 * Commit history absent due to repository issues
 * @desc    Updating a particular user
 */
const updateUser = (user) => async (dispatch, getState) => {
  try {
    dispatch({
      type: USER_UPDATE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.put(`/api/users/${user._id}`, user, config);

    dispatch({ type: USER_UPDATE_SUCCESS });

    dispatch({ type: USER_DETAILS_SUCCESS, payload: data });

    dispatch({ type: USER_DETAILS_RESET });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not authorized, token failed") {
      dispatch(logout());
    }
    dispatch({
      type: USER_UPDATE_FAIL,
      payload: message,
    });
  }
};

/*
 * Section Authored by:  Aakash Rao
 * Commit history absent due to repository issues
 * @desc    Adding Item to wishlist
 */
const wishlistAdd = (productId) => async (dispatch, getState) => {
  try {
    const {
      userDetails: {
        user: { wishlistItems },
      },
    } = getState();

    console.log(wishlistItems.length);
    var inWishlist =
      wishlistItems.find((item) => item.id === productId) === undefined
        ? false
        : true;
    if (!inWishlist) {
      dispatch({
        type: USER_WISHLIST_ADD_REQUEST,
        payload: productId,
      });
      const {
        userLogin: { userInfo },
      } = getState();

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      await axios.post(
        `/api/users/wishlist/${userInfo._id}`,
        { productId },
        config
      );

      dispatch({
        type: USER_WISHLIST_ADD_SUCCESS,
      });
    } else {
      const message = "Item Already in Wishlist";
      dispatch({
        type: USER_WISHLIST_ADD_FAIL,
        payload: message,
      });
    }
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not authorized, token failed") {
      dispatch(logout());
    }
    dispatch({
      type: USER_WISHLIST_ADD_FAIL,
      payload: message,
    });
  }
};

/*
 * Section Authored by:  Aakash Rao
 * Commit history absent due to repository issues
 * @desc    Getting user Wishlist
 */
const getUserWishlist = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: USER_WISHLIST_DETAILS_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(
      `/api/users/wishlist/${userInfo._id}`,
      config
    );

    dispatch({
      type: USER_WISHLIST_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not authorized, token failed") {
      dispatch(logout());
    }
    dispatch({
      type: USER_WISHLIST_DETAILS_FAIL,
      payload: message,
    });
  }
};

/*
 * Section Authored by:  Aakash Rao
 * Commit history absent due to repository issues
 * @desc    Removing Item from wishlist
 */
const wishlistRemove = (productId) => async (dispatch, getState) => {
  try {
    const {
      userDetails: {
        user: { wishlistItems },
      },
    } = getState();

    var inWishlist =
      wishlistItems.find((item) => item.id === productId) === undefined
        ? false
        : true;
    if (inWishlist) {
      dispatch({
        type: USER_WISHLIST_REMOVE_REQUEST,
        payload: productId,
      });
      const {
        userLogin: { userInfo },
      } = getState();

      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      await axios.post(
        `/api/users/wishlist/${userInfo._id}/remove`,
        { productId },
        config
      );

      dispatch({
        type: USER_WISHLIST_REMOVE_SUCCESS,
      });
    } else {
      const message = "Item Already in Wishlist";
      dispatch({
        type: USER_WISHLIST_REMOVE_FAIL,
        payload: message,
      });
    }
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not authorized, token failed") {
      dispatch(logout());
    }
    dispatch({
      type: USER_WISHLIST_ADD_FAIL,
      payload: message,
    });
  }
};

export {
  login,
  googleLogin,
  register,
  logout,
  getUserDetails,
  updateUserProfile,
  listUsers,
  deleteUser,
  updateUser,
  wishlistAdd,
  getUserWishlist,
  wishlistRemove,
};
