import express from "express";
import dotenv from "dotenv";
dotenv.config();
console.log("🧩 Loaded MONGO_URI:", process.env.MONGO_URI); //
import connectDB from "./config/db.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import productsRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";

const port = process.env.PORT || 7000; // Define the port for the server
connectDB();

const app = express();

//body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.use("/api/products", productsRoutes);
app.use("/api/users", userRoutes);
app.use(notFound);
app.use(errorHandler);

// const PORT = process.env.PORT || port;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
