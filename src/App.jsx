import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainLayout from "./MainLayout";
import Home from "./home/Home";
import Products from "./products/Products";
import Sales from "./sales/Sales";
import Categories from "./categories/Categories";
import Settings from "./settings/Settings";
import { Auth, SignIn, SignUp } from "./auth";
import { CreateCompony } from "./companies";
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/auth" element={<Auth />}>
            <Route path="" element={<SignIn />} />
            <Route path="signup" element={<SignUp />} />
          </Route>

          <Route path="/create-company" element={<CreateCompony />} />
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="products" element={<Products />} />
            <Route path="sales" element={<Sales />} />
            <Route path="categories" element={<Categories />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
