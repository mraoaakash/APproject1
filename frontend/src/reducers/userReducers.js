import {
  USER_DETAILS_FAIL,
  USER_DETAILS_REQUEST,
  USER_DETAILS_RESET,
  USER_DETAILS_SUCCESS,
  USER_LIST_REQUEST,
  USER_LIST_SUCCESS,
  USER_LIST_FAIL,
  USER_LIST_RESET,
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
  USER_DELETE_REQUEST,
  USER_DELETE_SUCCESS,
  USER_DELETE_FAIL,
  USER_UPDATE_RESET,
  USER_UPDATE_REQUEST,
  USER_UPDATE_SUCCESS,
  USER_UPDATE_FAIL,
  USER_UPDATE_PROFILE_RESET,
  USER_WISHLIST_ADD_REQUEST,
  USER_WISHLIST_ADD_SUCCESS,
  USER_WISHLIST_ADD_FAIL,
  USER_WISHLIST_RESET,
  USER_WISHLIST_DETAILS_REQUEST,
  USER_WISHLIST_DETAILS_SUCCESS,
  USER_WISHLIST_DETAILS_FAIL,
  USER_WISHLIST_DETAILS_RESET,
  USER_WISHLIST_REMOVE_REQUEST,
  USER_WISHLIST_REMOVE_SUCCESS,
  USER_WISHLIST_REMOVE_FAIL,
  USER_GOOGLE_LOGIN_REQUEST,
  USER_GOOGLE_LOGIN_SUCCESS,
  USER_GOOGLE_LOGIN_FAIL,
  USER_GOOGLE_LOGOUT,
} from "../constants/userConstants";

/*
 * Section Authored by:  Aakash Rao
 * Commit history absent due to repository issues
 * Signin state manager
 */
export const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { loading: true };
    case USER_LOGIN_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case USER_LOGIN_FAIL:
      return { loading: false, error: action.payload };
    case USER_LOGOUT:
      return {};
    default:
      return state;
  }
};

/*
 * Section Authored by:  Aakash Rao
 * Commit history absent due to repository issues
 * Google signin state manager
 */
export const userGoogleLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_GOOGLE_LOGIN_REQUEST:
      return { loading: true };
    case USER_GOOGLE_LOGIN_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case USER_GOOGLE_LOGIN_FAIL:
      return { loading: false, error: action.payload };
    case USER_GOOGLE_LOGOUT:
      return {};
    default:
      return state;
  }
};

/*
 * Section Authored by:  Aakash Rao
 * Commit history absent due to repository issues
 * Registration state manager
 */
export const userRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      return { loading: true };
    case USER_REGISTER_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case USER_REGISTER_FAIL:
      return { loading: false, error: action.payload };
    case USER_LOGOUT:
      return {};
    default:
      return state;
  }
};

/*
 * Section Authored by:  Aakash Rao
 * Commit history absent due to repository issues
 * User Details state manager
 */
export const userDetailsReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case USER_DETAILS_REQUEST:
      return { ...state, loading: true };
    case USER_DETAILS_SUCCESS:
      return { loading: false, user: action.payload };
    case USER_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    case USER_DETAILS_RESET:
      return { user: {} };
    default:
      return state;
  }
};

/*
 * Section Authored by:  Aakash Rao
 * Commit history absent due to repository issues
 * User Details Update state manager
 */
export const userUpdateProfileReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_UPDATE_PROFILE_REQUEST:
      return { loading: true };
    case USER_UPDATE_PROFILE_SUCCESS:
      return { loading: false, success: true, userInfo: action.payload };
    case USER_UPDATE_PROFILE_FAIL:
      return { loading: false, error: action.payload };
    case USER_UPDATE_PROFILE_RESET:
      return {};
    default:
      return state;
  }
};

export const userListReducer = (state = { users: [] }, action) => {
  switch (action.type) {
    case USER_LIST_REQUEST:
      return { loading: true };
    case USER_LIST_SUCCESS:
      return { loading: false, users: action.payload };
    case USER_LIST_FAIL:
      return { loading: false, error: action.payload };
    case USER_LIST_RESET:
      return { users: [] };
    default:
      return state;
  }
};

/*
 * Section Authored by:  Aakash Rao
 * Commit history absent due to repository issues
 * User Deletion state manager
 */
export const userDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_DELETE_REQUEST:
      return { loading: true };
    case USER_DELETE_SUCCESS:
      return { loading: false, success: true };
    case USER_DELETE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

/*
 * Section Authored by:  Aakash Rao
 * Commit history absent due to repository issues
 * User Update state manager
 */
export const userUpdateReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case USER_UPDATE_REQUEST:
      return { loading: true };
    case USER_UPDATE_SUCCESS:
      return { loading: false, success: true };
    case USER_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    case USER_UPDATE_RESET:
      return {
        user: {},
      };
    default:
      return state;
  }
};

/*
 * Section Authored by:  Aakash Rao
 * Commit history absent due to repository issues
 * Wishlist state manager
 */
export const wishlistReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_WISHLIST_ADD_REQUEST:
      return {
        loading: true,
      };
    case USER_WISHLIST_ADD_SUCCESS:
      return {
        loading: false,
        success: true,
      };
    case USER_WISHLIST_ADD_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case USER_WISHLIST_RESET:
      return {};
    default:
      return state;
  }
};

/*
 * Section Authored by:  Aakash Rao
 * Commit history absent due to repository issues
 * Wishlist Details state manager
 */
export const wishlistDetailsReducer = (state = { wishlist: {} }, action) => {
  switch (action.type) {
    case USER_WISHLIST_DETAILS_REQUEST:
      return { ...state, loading: true };
    case USER_WISHLIST_DETAILS_SUCCESS:
      return { loading: false, wishlist: action.payload };
    case USER_WISHLIST_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    case USER_WISHLIST_DETAILS_RESET:
      return { wishlist: {} };
    default:
      return state;
  }
};

/*
 * Section Authored by:  Aakash Rao
 * Commit history absent due to repository issues
 * Wishlist Item removal state manager
 */
export const wishlistRemoveReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_WISHLIST_REMOVE_REQUEST:
      return {
        loading: true,
      };
    case USER_WISHLIST_REMOVE_SUCCESS:
      return {
        loading: false,
        success: true,
      };
    case USER_WISHLIST_REMOVE_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case USER_WISHLIST_RESET:
      return {};
    default:
      return state;
  }
};
