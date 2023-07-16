import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductForm from "components/ProductForm/index";
import Loader from "components/Loader";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const EditProduct = () => {
  const [initialValues, setInitialValues] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  const onFinish = (values) => {
    axios
      .patch(`http://localhost:4444/products/${id}`, values)
      .then(() => navigate("/auth/me/products"))
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    axios.get(`http://localhost:4444/products/${id}`).then(({ data }) => {
      const { title, description, price, state, category, image } = data;
      setInitialValues({
        title,
        description,
        price,
        state,
        category,
        image,
      })
    }).catch((err) => console.log(err));
  }, [id]);

  if (!initialValues) return <Loader />;

  return <ProductForm initialValues={initialValues} onFinish={onFinish} />;
};
export default EditProduct;
