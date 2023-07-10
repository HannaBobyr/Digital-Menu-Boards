import "./App.css";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Registration/Login";
import Register from "./components/Registration/Register";
import UserHome from "./components/UserHome";
import CreateProductPage from "./components/UserHome/ProductForm/createProduct";
import EditProduct from "./components/UserHome/ProductForm/editProduct";

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("http://localhost:4444/products");
      const json = await data.json();
      setItems(json);
    };
    fetchData();
  }, []);

  if (!items) return <p>loarding</p>;

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/auth/me/*" element={<UserHome />} />
      <Route path="/createproduct" element={<CreateProductPage />} />
      <Route path="/products/:id" element={<EditProduct />} />
    </Routes>
  );
}

export default App;
