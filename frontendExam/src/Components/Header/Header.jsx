import React from "react";
import "./Header.scss";
const Header = () => {
  return (
    <div className="header">
      <div className="left-bg">
        <img
          src="https://jevelin.shufflehound.com/single-product/wp-content/uploads/sites/29/2018/03/Ellipse-974-copy-3.png"
          alt=""
        />
      </div>

      <div className="watch-bg">
        <img
          src="https://jevelin.shufflehound.com/single-product/wp-content/uploads/sites/29/2018/03/Vector-Smart-Object-copy-3.png"
          alt=""
        />
      </div>
      <div className="texts">
        <h1>
          Lifestyle Smart <span>Watch</span>
        </h1>
        <span>TECHNOLOGY OF THE FUTURE</span>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe, enim
          sed, nobis repellendus aspernatur quidem ea, .
        </p>
      </div>
    </div>
  );
};

export default Header;
