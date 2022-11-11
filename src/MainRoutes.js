import React from "react";
import { Route, Routes } from "react-router-dom";
import AddProduct from "./Components/Admin/AddProduct/AddProduct";
import HomePage from "./Components/HomePage/HomePage";
import ProductsList from "./Components/Product/ProductList/ProductList";
import EditProduct from "./Components/Admin/EditProduct/EditProduct";
import ProductDetails from "./Components/Product/ProductDetails/ProductDetails";
import Authorization from "./Components/Auth/Authorization";
import Basket from "./Components/Basket/Basket";
import Comment from "./Components/Comment/Comment";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/edit/:id" element={<EditProduct />} />
      <Route path="/list" element={<ProductsList />} />
      <Route path="/details/:id" element={<ProductDetails />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/add" element={<AddProduct />} />
      <Route path="/auth" element={<Authorization />} />
      <Route path="/basket" element={<Basket />} />
      <Route path="/comment" element={<Comment />} />
    </Routes>
  );
};

export default MainRoutes;
