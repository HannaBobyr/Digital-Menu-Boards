import { Route, Routes } from "react-router-dom";
import AdminHome from "pages/AdminHome";
import Products from "pages/Products";
import Categories from "pages/Categories";
import BusinessData from "pages/Bussinessdata";

const ContentComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<AdminHome />} />
      <Route path="/businessData" element={<BusinessData />} />
      <Route path="/products" element={<Products />} />
      <Route path="/categories" element={<Categories />} />
    </Routes>
  );
};
export default ContentComponent;
