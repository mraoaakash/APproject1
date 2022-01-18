import path from "path";
import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import morgan from "morgan";
import { nF, eHandler } from "./middleware/errorMiddleware.js";
import conn from "./config/database.js";

import pRoutes from "./routes/pRoutes.js";
import uRoutes from "./routes/uRoutes.js";
import oRoutes from "./routes/oRoutes.js";
import upRoutes from "./routes/upRoutes.js";

dotenv.config();

conn();

const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.json());

app.use("/api/products", pRoutes);
app.use("/api/users", uRoutes);
app.use("/api/orders", oRoutes);
app.use("/api/upload", upRoutes);

app.get("/api/config/paypal", (req, res) =>
  res.send(process.env.PAYPAL_CLIENT_ID)
);

const __dirname = path.resolve();
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/build")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("API is running....");
  });
}

app.use(nF);
app.use(eHandler);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);
