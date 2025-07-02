import React, { useContext, useState } from "react";
import "./Navbar.css";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const { getCartCount } = useContext(ShopContext);
  const navItems = [
    { name: "Shop", path: "/", key: "shop" },
    { name: "Men", path: "/mens", key: "mens" },
    { name: "Women", path: "/womens", key: "womens" },
    { name: "Kids", path: "/kids", key: "kids" },
  ];

  return (
    <div className="Navbar">
      <div className="nav-logo">
        <img src={logo} alt="Cart" />
        <p>SHOPPER</p>
      </div>
      {/* <ul className="nav-menu">
        <li
          onClick={() => {
            setMenu("shop");
          }}
        >
          <Link style={{ textDecoration: "none", color: "#626262" }} to="/">
            Shop
          </Link>
          {menu === "shop" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("mens");
          }}
        >
          <Link style={{ textDecoration: "none", color: "#626262" }} to="/mens">
            Men
          </Link>
          {menu === "mens" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("womens");
          }}
        >
          <Link
            style={{ textDecoration: "none", color: "#626262" }}
            to="/womens"
          >
            Women
          </Link>
          {menu === "womens" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("kids");
          }}
        >
          <Link style={{ textDecoration: "none", color: "#626262" }} to="/kids">
            Kids
          </Link>
          {menu === "kids" ? <hr /> : <></>}
        </li>
      </ul> */}

      <ul className="nav-menu">
        {navItems.map((item) => (
          <li key={item.key} onClick={() => setMenu(item.key)}>
            <Link
              style={{ textDecoration: "none", color: "#626262" }}
              to={item.path}
            >
              {item.name}
            </Link>
            {menu === item.key && <hr />}
          </li>
        ))}
      </ul>
      <div className="nav-login-cart">
        <Link style={{ textDecoration: "none" }} to="/login">
          <button>Login</button>
        </Link>
        <Link style={{ textDecoration: "none" }} to="/cart">
          <img src={cart_icon} alt="" />
        </Link>
        <div className="nav-cart-count">{getCartCount()}</div>
      </div>
    </div>
  );
};
export default Navbar;
