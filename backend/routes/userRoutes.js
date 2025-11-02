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

const router = express.Router();

router.route("/").post(registerUser).get(getUsers); // Endpoint to get all users
router.route("/logout", LogoutUser);
router.route("/login").post(authUser);
router.route("/profile").get(getUserProfile).put(updateUserProfile);
router.route("/:id").get(getUserById).delete(deleteUsers).put(updateUser); //the router.route means that we are defining a route for a specific URL pattern. In this case, the pattern is "/:id", where ":id" is a dynamic parameter that can represent any value.
//  When a GET request is made to this URL pattern,
//  the getUserById controller function will be executed.

export default router;
