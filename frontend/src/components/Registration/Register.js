import RegistrationForm from "./RegistrationForm";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const initialValues = {
  email: "",
  password: "",
};

const Register = () => {
  const navigate = useNavigate();
  const onFinish = (values) => {
    axios
      .post(`http://localhost:4444/auth/register`, values)
      .then(() => navigate("/auth/me"))
      .catch(function (error) {
        console.log(error);
      });
  };

  return <RegistrationForm onFinish={onFinish} initialValues={initialValues} />;
};

export default Register;
