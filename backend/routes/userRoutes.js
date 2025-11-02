import express from "express";
import {
  authUser,
  registerUser,
  LogoutUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  getUserById,
  deleteUsers,
  updateUser,
} from "../controllers/userController.js";
import { protect, admin } from "../middleware/authMiddleware.js";
const router = express.Router();

router.route("/").post(registerUser).get(protect, admin, getUsers); // Endpoint to get all users
router.route("/logout", LogoutUser);
router.route("/auth").post(authUser);
router
  .route("/profile")
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);
router
  .route("/:id")
  .get(protect, admin, getUserById)
  .delete(protect, admin, deleteUsers)
  .put(protect, admin, updateUser); //the router.route means that we are defining a route for a specific URL pattern. In this case, the pattern is "/:id", where ":id" is a dynamic parameter that can represent any value.
//  When a GET request is made to this URL pattern,
//  the getUserById controller function will be executed.

export default router;
