import express from "express";
const router = express.Router();
import {
  getProducts,
  getProductById,
  deleteProduct,
  createProduct,
  updateProduct,
  createProductReview,
  getTopProducts,
} from "../controllers/pCtrl.js";
import { protect, admin } from "../middleware/authMiddleware.js";

/*
 * Section Authored by:  Ekansh Sharma, Aaryan Mavani, and Aakash Rao
 * Commit history absent due to repository issues
 */

// product creation and list routes
router.route("/").get(getProducts).post(protect, admin, createProduct);

//product review route
router.route("/:id/reviews").post(protect, createProductReview);

//product rank route
router.get("/top", getTopProducts);

//product admin routes
router
  .route("/:id")
  .get(getProductById)
  .delete(protect, admin, deleteProduct)
  .put(protect, admin, updateProduct);

export default router;
