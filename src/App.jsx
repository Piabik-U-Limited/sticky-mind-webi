import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainLayout from "./MainLayout";
import Home from "./home/Home";
import Staff from "./staff/Staff";
import Products from "./products/Products";
import Sales from "./sales/Sales";
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="staff" element={<Staff />} />
            <Route path="products" element={<Products />} />
            <Route path="sales" element={<Sales />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
