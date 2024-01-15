import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainLayout from "./MainLayout";
import Home from "./home/Home";
import Products from "./products/Products";
import Sales from "./sales/Sales";
import Categories from "./categories/Categories";
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="products" element={<Products />} />
            <Route path="sales" element={<Sales />} />
            <Route path="categories" element={<Categories />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
