import * as yup from "yup";

const schema = yup.object().shape({
  title: yup.string().min(5, 'The title must be at least 5 characters long').required("This field is required"),
  description: yup
    .string()
    .min(10, "The description must be at least 10 characters long")
    .required("This field is required"),
  price: yup
    .number("The price is incorrect. Edit the field")
    .required("This field is required")
    .min(0, "The price must be a positive number"),
  category: yup.string().required("This field is required"),
  state: yup.boolean(),
});

export default schema;
