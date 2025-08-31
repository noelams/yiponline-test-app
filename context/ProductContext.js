import React, { useState, createContext, useEffect } from "react";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [productList, setProductList] = useState([]);

  const addProduct = (productObject) => {
    setProductList((prev) => [...prev, productObject]);
  };

  const removeProduct = (productId) => {
    setProductList((prev) => prev.filter((item) => item.id !== productId));
  };

  return (
    <ProductContext.Provider value={{ productList, addProduct, removeProduct }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContext;
