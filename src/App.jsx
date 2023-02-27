import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound"
import { ProductsPage } from "./pages/ProductsPage";
import { SignIn } from "./pages/SignIn";
import { SignUp } from "./pages/SignUp";
import { User } from "./pages/User";


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div>
          {/* <Link className="Home" to="/">Home</Link>
          <Link className="ProductsPage" to="/products">Products</Link>
          <Link className="User" to="/user">User</Link>
          <Link className="SignUp" to="/signup">SignUp</Link>
          <Link className="SignIn" to="/signin">SignIn</Link> */}
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/user" element={<User />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}
export default App;