import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";

import Footer from "./components/Footer/Footer";
import LoginPopip from "./components/LoginPopup/LoginPopup";
import Cart from "./pages/Card/Cart";
import Placeorder from "./pages/Placeorder/Placeorder";

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  return (
    <>
      {showLogin ? <LoginPopip setShowLogin={setShowLogin} /> : <></>}
      <div className="app">
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<Placeorder />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
