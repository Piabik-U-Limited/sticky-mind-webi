import React, { useEffect } from "react";
import useProducts from "../api/hooks/useProducts";

import ProductsTable from "./components/ProductsTable";
import { useSelector } from "react-redux";
function Products() {
  const products = useSelector((state) => state.products.products);
  const { handleFetchProducts } = useProducts();
  useEffect(() => {
    handleFetchProducts();
  }, []);
  return (
    <div>
      <ProductsTable data={products} />
    </div>
  );
}

export default Products;
