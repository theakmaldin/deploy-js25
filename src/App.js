import React from "react";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import AuthContextProvider from "./context/AuthContexProvider";
import BasketContextProvider from "./context/BasketProductProvider";
import ProductContextProvider from "./context/ProductContextProvider";
import MainRoutes from "./MainRoutes";

function App() {
  return (
    <AuthContextProvider>
      <BasketContextProvider>
        <ProductContextProvider>
          <Navbar />
          <MainRoutes />
          <Footer />
        </ProductContextProvider>
      </BasketContextProvider>
    </AuthContextProvider>
  );
}

export default App;
