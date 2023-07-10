import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Products from "./Products";
import Categories from "./Categories";
import BusinessData from "./Bussinessdata";

const ContentComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/businessData" element={<BusinessData />} />
      <Route path="/products" element={<Products />} />
      <Route path="/categories" element={<Categories />} />
    </Routes>
  );
};
export default ContentComponent;
