import React from "react";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <a href="/">
        <img
          className="header_img"
          src="https://i.pinimg.com/originals/33/b8/69/33b869f90619e81763dbf1fccc896d8d.jpg"
        />
      </a>
    </header>
  );
};

export default Header;
