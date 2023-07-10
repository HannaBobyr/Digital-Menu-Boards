import express from "express";
import mongoose from "mongoose";
import multer from "multer";
import cors from "cors";

import { registerValidator, productValidator } from "./validation.js";
import checkAuth from "./utils/checkAuth.js";
import { register, login, getMe } from "./controllers/userController.js";
import * as productController from "./controllers/productController.js";
import * as categoryController from "./controllers/CategoryController.js";
import * as businessDataController from "./controllers/businessDataController.js";
import handleValidationErrors from "./utils/handleValidationErrors.js";

const app = express();

app.use(express.json());
// app.use(express.static(__dirname + '/public'));
app.use("/uploads", express.static("uploads"));
app.use(cors());

const storage = multer.diskStorage({
  destination: (_, __, cb) => {
    cb(null, "./uploads");
  },
  filename: (_, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

mongoose
  .connect(
    "mongodb+srv://bobyrhanna:cD4Ef0LGtbSW4Ony@cluster0.eu4mtse.mongodb.net/digital-menu?retryWrites=true&w=majority"
  )
  .then(() => console.log("Success"))
  .catch(() => console.log("error"));

app.post("/uploads", upload.single("image"), (req, res) => {
  res.json({
    url: `/uploads/${req.file.originalname}`,
  });
});

app.post("/auth/register", registerValidator, handleValidationErrors, register);
app.post("/auth/login", registerValidator, handleValidationErrors, login);
app.get("/auth/me", getMe);

app.post(
  "/products",
  productValidator,
  handleValidationErrors,
  productController.create
);
app.get("/products", productController.getAll);
app.get("/products/:id", productController.getOne);
app.patch(
  "/products/:id",
  checkAuth,
  productValidator,
  handleValidationErrors,
  productController.update
);
app.delete("/products/:id", productController.remove);

app.post("/categories", categoryController.create);
app.get("/categories", categoryController.getAll);
app.patch("/categories/:id", categoryController.update);
app.delete("/categories/:id", categoryController.remove);

app.get("/businessData", businessDataController.getAll);
app.post("/businessData", checkAuth, businessDataController.create);
app.patch("/businessData/:id", businessDataController.update);
app.delete("/businessData/:id", businessDataController.remove);

app.listen(4444, (err) => {
  if (err) {
    console.log(err.message);
  }
  console.log("server listening on 4444");
});
