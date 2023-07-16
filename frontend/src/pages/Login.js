import AuthForm from "components/Auth";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Typography } from "antd";

const { Title } = Typography;

const initialValues = {
  email: "",
  password: "",
};

const Login = () => {
  const navigate = useNavigate();
  const onFinish = (values) => {
    axios
      .post(`http://localhost:4444/auth/login`, values)
      .then(() => {
        navigate("/auth/me");
        localStorage.setItem("user", JSON.stringify(values.email));
      })
      .catch(function (error) {
        console.log(error.message);
      });
  };

  return (
    <>
      <Title level={2} style={{ textAlign: "center" }}>
        Login
      </Title>
      <AuthForm
        onFinish={onFinish}
        initialValues={initialValues}
        login={true}
      />
      ;
    </>
  );
};

export default Login;
