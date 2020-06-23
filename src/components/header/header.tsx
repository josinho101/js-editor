import React from "react";
import logo from "../../content/images/logo.png";

const Header: React.FunctionComponent = () => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        <img
          src={logo}
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt="JS Editor"
        />
        Editor
      </a>
    </nav>
  );
};

export default Header;
