import * as yup from "yup";

const schema = yup.object().shape({
  email: yup.string().email().required("Please input your email!"),
  password: yup.string().required("Please input your password!"),
});

export default schema;
