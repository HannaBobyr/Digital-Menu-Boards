import ProductForm from "./index";

const initialValues = {
  title: "",
  description: "",
  price: 0,
  category: "",
  state: "",
  image: "",
};

const submit = (value) => {
  console.log(value);
};

function CreateProductPage() {
  return <ProductForm initialValues={initialValues} submit={submit} />;
}

export default CreateProductPage;
