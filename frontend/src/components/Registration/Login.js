import RegistrationForm from "./RegistrationForm";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const initialValues = {
  email: '',
  password: ''
};


const Login = () => {
  const navigate = useNavigate();
  const onFinish = (values) => {
    axios
      .post(`http://localhost:4444/auth/login`, values)
      .then(() => navigate("/auth/me"))
      .catch(function (error) {
        console.log(error.message);
      });
  };

  return (
    <>
      <Link to="/register">Create account</Link>
      <RegistrationForm onFinish={onFinish} initialValues={initialValues}/>;
    </>
  );
};

export default Login;
