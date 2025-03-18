import React, { useContext, useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";

const Navbar = ({ setShowLogin }) => {
  const [menu, Setmenu] = useState("home");
  const { getTotalCartAmount } = useContext(StoreContext);
  return (
    <div className="navbar">
      <Link to={"/"}>
        <img
          src={assets.logo}
          className="logo"
          style={{ width: "150px", height: "70px" }}
        />
      </Link>
      <ul className="navbar-menu">
        <Link
          to="/"
          onClick={() => Setmenu("home")}
          className={menu === "home" ? "active" : ""}
        >
          home
        </Link>
        <a
          href="#explore-menu"
          onClick={() => Setmenu("menu")}
          className={menu === "menu" ? "active" : ""}
        >
          menu
        </a>
        <a
          href="#app-download"
          onClick={() => Setmenu("mobil-app")}
          className={menu === "mobil-app" ? "active" : ""}
        >
          mobil-app
        </a>
        <a
          href="#footer"
          onClick={() => Setmenu("contact-us")}
          className={menu === "contact-us" ? "active" : ""}
        >
          contact us
        </a>
      </ul>
      <div className="navbar-right">
        <i
          class="fa-solid fa-magnifying-glass"
          style={{ fontSize: "20px", color: "#49557e" }}
        ></i>
        <div className="navbar-search-icon">
          <Link to="/cart">
            <i
              class="fa-solid fa-basket-shopping"
              style={{ fontSize: "20px", color: "#49557e" }}
            ></i>
          </Link>
          <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
        </div>
        <button onClick={() => setShowLogin(true)}>sign in</button>
      </div>
    </div>
  );
};

export default Navbar;
