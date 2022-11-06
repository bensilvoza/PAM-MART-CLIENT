// Libraries
import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/customer/home";
import Login from "./pages/customer/login";
import Register from "./pages/customer/register";
// administrator
import ProductCreate from "./pages/administrator/product/create";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route
            exact
            path="/administrator/product/create"
            element={<ProductCreate />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
