import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductForm from "./index";

const submit = (value) => {
  console.log(value);
};

const EditProduct = () => {
  const [initialValues, setInitialValues] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(`http://localhost:4444/products/${id}`);
      const json = await data.json();
      console.log(json);
      setInitialValues(json);
    };
    fetchData();
  }, []);

  if (!initialValues) return <p>loarding</p>;

  return <ProductForm initialValues={initialValues} submit={submit} />;
};
export default EditProduct;
