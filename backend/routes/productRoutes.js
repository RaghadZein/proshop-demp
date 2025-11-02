import express from "express";
import {
  getProducts,
  getProductById,
} from "../controllers/productControllers.js";

const router = express.Router();

router.route("/").get(getProducts); // Endpoint to get all products
router.route("/:id").get(getProductById); //the router.route means that we are defining a route for a specific URL pattern. In this case, the pattern is "/:id", where ":id" is a dynamic parameter that can represent any value.
//  When a GET request is made to this URL pattern,
//  the getProductById controller function will be executed.

export default router;
