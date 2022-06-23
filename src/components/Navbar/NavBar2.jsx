import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../images/logo.svg";

const NavbarComponent = () => {
  return (
    <div className="header">
      <div className="menu-bar">
        <nav className="navbar navbar-expand-lg navbar-light">
          <Link to={"/"}>
            <img src={Logo} alt="todo-app" />
          </Link>
          <div>
            <ul>
              <li>
                <Link to={"/"}>
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link to={""}>Features</Link>
              </li>
              <li>
                <Link to={""}>Pricing</Link>
              </li>
              <li>
                <Link to={""}>Blog</Link>
              </li>
              <li>
                <Link to={""}>Contact Us</Link>
              </li>
            </ul>
            <div className="nav-right ms-auto">
              <Link to={"/auth"}>
                <span>Sign In</span>
              </Link>
              <Link to={"/auth/register"}>
                <span className="tryforfree">Try for free</span>
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default NavbarComponent;
