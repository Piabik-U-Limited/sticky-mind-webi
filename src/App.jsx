import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainLayout from "./MainLayout";
import Home from "./home/Home";
import Staff from "./staff/Staff";
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="staff" element={<Staff />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
