import "./App.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Login, Register, Home, Product, Cart, Payment, Profile, Checkout, Addresses } from "./pages/index";
import Footer from "./components/Footer";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Navigate to="/" />} />
        <Route path="/register" element={<Navigate to="/" />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element= {<Login/>}/>
        <Route path="/register" element= {<Register/>}/>
        <Route path="/product" element= {<Product />}/>
        <Route path="/cart" element={<Cart />}/>
        <Route path="/payment" element={<Payment />}/>
        <Route path="/checkout" element={<Checkout />}/>
        <Route path="/profile" element={<Profile />}/>
        <Route path="/addresses" element={<Addresses />}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
