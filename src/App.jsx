import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import { Layout } from "./layout";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound"
import { ProductsPage } from "./pages/ProductsPage";
import { SignIn } from "./pages/SignIn";
import { SignUp } from "./pages/SignUp";
import { User } from "./pages/User";
import { Cart } from "./pages/Cart";


function App() {
  return (
    <div className="App">
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart/>} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/user" element={<User />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </Router>
    </div>
  );
}
export default App;