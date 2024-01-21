import React from "react";
import "./Navbar.scss";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="navbar-section">
      <div className="navbar">
        <div className="nav-logo">
          <img
            src="https://jevelin.shufflehound.com/single-product/wp-content/uploads/sites/29/2018/03/Jevelin_logo_light.png"
            alt=""
          />
        </div>
        <div className="nav-menu">
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/add">Add</NavLink>
            </li>
            <li>
              <NavLink to="/wishlist">Wishlist</NavLink>
            </li>
          </ul>
        </div>
        <div className="nav-basket">
          <NavLink to="/basket"><i className="fa-solid fa-cart-shopping"></i></NavLink>
          <button>BUY NOW</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
