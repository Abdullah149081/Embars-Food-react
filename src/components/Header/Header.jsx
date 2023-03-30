import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <>
      <nav className="header">
        <div>
          <h2>Embars Food</h2>
        </div>

        <div >
          <a href="/order">Order</a>
          <a href="/contact">Contact</a>
          <a href="/picture">Picture</a>
          <a href="/review">Review</a>
        </div>
      </nav>
    </>
  );
};

export default Header;
