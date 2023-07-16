import CategoryForm from "components/CategoryForm/index.js";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const initialValues = {
  name: "",
};

const CreateCategory = () => {
  const navigate = useNavigate();
  const onFinish = (values) => {
    axios
      .post(`http://localhost:4444/categories`, values)
      .then(() => navigate("/auth/me/categories"))
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <>
      <CategoryForm
        onFinish={onFinish}
        initialValues={initialValues}
      />
      ;
    </>
  );
};

export default CreateCategory;
