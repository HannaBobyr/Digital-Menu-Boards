import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loader from "components/Loader.js";
import CategoryForm from "components/CategoryForm/index.js";

const EditCategory = () => {
  const navigate = useNavigate();
  const [initialValues, setInitialValues] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:4444/categories/${id}`)
      .then(({ data }) => setInitialValues({ name: data.name }))
      .catch((err) =>console.log(err));
  }, [id]);

  if (!initialValues) return <Loader />;

  const onFinish = (values) => {
    axios
      .patch(`http://localhost:4444/categories/${id}`, values)
      .then(() => navigate("/auth/me/categories"))
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <>
      <CategoryForm onFinish={onFinish} initialValues={initialValues} />;
    </>
  );
};

export default EditCategory;
