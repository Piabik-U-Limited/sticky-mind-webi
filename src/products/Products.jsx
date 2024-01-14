import React from "react";
import { products } from "../utils/products";
import ProductsTable from "./components/ProductsTable";
function Products() {
  return (
    <div>
      <ProductsTable data={products} />
    </div>
  );
}

export default Products;
