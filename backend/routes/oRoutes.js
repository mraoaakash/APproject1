import express from "express";
const router = express.Router();
import {
  addOrderItems,
  getOrderById,
  updateOrderToPaid,
  updateOrderToDelivered,
  getMyOrders,
  getOrders,
} from "../controllers/oCtrl.js";
import { protect, admin } from "../middleware/authMiddleware.js";

/*
 * Section Authored by:  Ekansh Sharma, Aaryan Mavani, and Aakash Rao
 * Commit history absent due to repository issues
 */

//create order routeand get order list route
router.route("/").post(protect, addOrderItems).get(protect, admin, getOrders);

//get user order route
router.route("/myorders").get(protect, getMyOrders);

//get order by id route
router.route("/:id").get(protect, getOrderById);

//mark order as paid route
router.route("/:id/pay").put(protect, updateOrderToPaid);

//mark order as delivered route
router.route("/:id/deliver").put(protect, admin, updateOrderToDelivered);

export default router;
