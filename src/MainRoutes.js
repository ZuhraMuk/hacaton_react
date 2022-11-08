import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import AddProduct from "./Components/Admin/AddProduct/AddProduct";
import EditProduct from "./Components/Admin/EditProduct/EditProduct";
import Authorization from "./Components/Auth/Authorization";
import Basket from "./Components/Basket/Basket";
import HomePage from "./Components/HomePage/HomePage";
import NotFoundPage from "./Components/NotFoundPage/NotFoundPage";
import PaymentPage from "./Components/PaymentPage/PaymentPage";
import ProductDetails from "./Components/Products/ProductDetails/ProductDetails";
import ProductsList from "./Components/Products/ProductsList/ProductsList";
import { authContext } from "./context/AuthContextProvider";

const MainRoutes = () => {
  const { user } = useContext(authContext);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/auth" element={<Authorization />} />
      <Route
        path="/add"
        element={
          user.email === "zuhra@mail.ru" ? <AddProduct /> : <NotFoundPage />
        }
      />
      <Route path="/list" element={<ProductsList />} />
      <Route path="/basket" element={<Basket />} />
      <Route path="/details/:id" element={<ProductDetails />} />
      <Route
        path="/edit/:id"
        element={
          user.email === "zuhra@mail.ru" ? <EditProduct /> : <NotFoundPage />
        }
      />
      <Route path="/buy" element={<PaymentPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default MainRoutes;
