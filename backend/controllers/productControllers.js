import asyncHandler from "../middleware/asyncHandler.js";
import Product from "../models/productModel.js";

// @desc    Fetch all products
// @route   GET /api/products
// @access  Public
const getProducts = asyncHandler(async (req, res) => {
  // Fetch all products from the database
  const products = await Product.find({});
  res.json(products); // Send the products as a JSON response
});

// @desc    Fetch single product by ID
// @route   GET /api/products/:id
// @access  Public
const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    // If the product exists, return it as a JSON response
    return res.json(product);
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});

export { getProducts, getProductById };
