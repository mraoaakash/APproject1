import express from "express";
const router = express.Router();
import {
  authUser,
  registerUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUserById,
  updateUser,
  addToWishlist,
  getMyWishlist,
  removeFromWishlist,
  googleLogin,
} from "../controllers/uCtrl.js";
import { protect, admin } from "../middleware/authMiddleware.js";

/*
 * Section Authored by:  Ekansh Sharma, Aaryan Mavani, and Aakash Rao
 * Commit history absent due to repository issues
 */

//registration route
router.route("/").post(registerUser).get(protect, admin, getUsers);

//login route
router.post("/login", authUser);

//profile routes
router
  .route("/profile")
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);

// user admin routes
router
  .route("/:id")
  .delete(protect, admin, deleteUser)
  .get(protect, getUserById)
  .put(protect, admin, updateUser);

//wishlist routes
router
  .route("/wishlist/:id?")
  .post(protect, addToWishlist)
  .get(protect, getMyWishlist);
router.route("/wishlist/:id?/remove").post(protect, removeFromWishlist);

router.route("/googlelogin").post(googleLogin);
export default router;
