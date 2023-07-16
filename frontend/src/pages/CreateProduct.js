import ProductForm from "components/ProductForm/index";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const initialValues = {
  title: "",
  description: "",
  price: 0,
  state: false,
  category: "",
  image: "",
};

function CreateProductPage() {
  const navigate = useNavigate();

  const onFinish = (value) => {
    axios
      .post(`http://localhost:4444/products`, value)
      .then(() => navigate("/auth/me/products"))
      .catch(function (error) {
        console.log(error);
      });
  };
  return <ProductForm initialValues={initialValues} onFinish={onFinish} />;
}

export default CreateProductPage;
