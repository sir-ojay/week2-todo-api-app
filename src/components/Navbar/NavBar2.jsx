import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../images/logo.svg";
import styled from "styled-components";

const NavBar = () => {
  return (
    <NavStyles>

        <nav>
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

    </NavStyles>
  );
};

const NavStyles = styled.div`
   display: grid;
   grid-template-column: 1fr 2fr 1fr ;

`;
  


export default NavBar;
