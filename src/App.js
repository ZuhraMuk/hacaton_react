import React from "react";
import Basket from "./Components/Basket/Basket";
import Filter from "./Components/Filter/Filter";
import Footer from "./Components/Footer/Footer";
import NavBar from "./Components/NavBar/NavBar";
import ProductCard from "./Components/Products/ProductCard/ProductCard";
import BasketContextProvider from "./context/BasketContextProvider";
import ProductContextProvider from "./context/ProductContextProvider";
import MainRoutes from "./MainRoutes";

const App = () => {
  return (
    <BasketContextProvider>
      <ProductContextProvider>
        <NavBar />
        <MainRoutes />
        {/* <ProductCard /> */}
        {/* <Basket /> */}
        {/* <Filter /> */}
        <Footer />
      </ProductContextProvider>
    </BasketContextProvider>
  );
};

export default App;
