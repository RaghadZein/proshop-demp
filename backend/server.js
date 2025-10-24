import express from "express";
import dotenv from "dotenv";
dotenv.config();
// console.log("🧩 Loaded MONGO_URI:", process.env.MONGO_URI); //
import connectDB from "./config/db.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import productsRoutes from "./routes/productRoutes.js";

const port = process.env.PORT || 7000;
connectDB();

const app = express();

app.get("/", (req, res) => {
  res.send("API is running...");
});
app.use("/api/products", productsRoutes);
app.use(notFound);
app.use(errorHandler);

// const PORT = process.env.PORT || port;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
