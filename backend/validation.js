import { body } from "express-validator";

export const registerValidator = [
  body("email", "Incorrect mail format").isEmail(),
  body("password"),
];

export const productValidator = [
  body("title", "The title must be at least 5 characters long").isLength({
    min: 5,
  }),
  body(
    "description",
    "The description must be at least 10 characters long"
  ).isLength({
    min: 10,
  }),
  body("price").isNumeric(),
  body("category"),
  body("image"),
  body("state"),
];
