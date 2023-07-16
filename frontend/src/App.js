import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "pages/Login";
import Register from "pages/Register";
import UserHome from "components/UserHome";
import CreateProductPage from "pages/CreateProduct";
import EditProduct from "pages/EditProduct";
import CreateCategory from "pages/CreateCategory";
import EditCategory from "pages/EditCategory";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import ProtectedRoute from "components/ProtectedRoute";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="/auth/me/*"
        element={
          <ProtectedRoute>
            <UserHome />
          </ProtectedRoute>
        }
      />
      <Route
        path="/createproduct"
        element={
          <ProtectedRoute>
            <CreateProductPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/createcategory"
        element={
          <ProtectedRoute>
            <CreateCategory />
          </ProtectedRoute>
        }
      />
      <Route
        path="/editproduct/:id"
        element={
          <ProtectedRoute>
            <EditProduct />
          </ProtectedRoute>
        }
      />
      <Route
        path="/editcategory/:id"
        element={
          <ProtectedRoute>
            <EditCategory />
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
