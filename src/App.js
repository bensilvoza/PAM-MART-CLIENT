// Libraries
import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// contexts
import NotificationContextProvider from "./contexts/customer/shared/notificationContext";

// Pages
import Home from "./pages/customer/home";
import Login from "./pages/customer/login";
import Register from "./pages/customer/register";
import Product from "./pages/customer/product/product";
import Products from "./pages/customer/product/products";
import Cart from "./pages/customer/checkout/cart";
import Shipping from "./pages/customer/checkout/shipping";
import Summary from "./pages/customer/checkout/summary";
import Payment from "./pages/customer/checkout/payment";
import Confirmation from "./pages/customer/checkout/confirmation";
import Account from "./pages/customer/account";
// administrator
import ProductCreate from "./pages/administrator/product/create";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NotificationContextProvider>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/product/:id" element={<Product />} />
            <Route exact path="/products" element={<Products />} />
            <Route exact path="/cart" element={<Cart />} />
            <Route exact path="/shipping" element={<Shipping />} />
            <Route exact path="/summary" element={<Summary />} />
            <Route exact path="/payment" element={<Payment />} />
            <Route exact path="/confirmation" element={<Confirmation />} />
            <Route exact path="/account" element={<Account />} />
            <Route
              exact
              path="/administrator/product/create"
              element={<ProductCreate />}
            />
          </Routes>
        </NotificationContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
