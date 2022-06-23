import React from "react";
import AuthContainer from "./styles/authstyles";
import { Outlet, useLocation } from "react-router-dom";

export const AuthWrapper = () => {
  const location = useLocation();

  const path = location.pathname === "/auth" ? true : false;

  return (
    <AuthContainer>
      <div style={{ display: "flex", justifyContent: "center", margin: "5px" }}>
        <svg
          width="57"
          height="46"
          viewBox="0 0 57 46"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            width="32.8253"
            height="32.8253"
            rx="6"
            transform="matrix(0.866667 0.498887 -0.866667 0.498887 28.4486 14.2478)"
            fill="#5C99D6"
          />
          <rect
            width="32.8253"
            height="32.8253"
            rx="6"
            transform="matrix(0.866667 0.498887 -0.866667 0.498887 28.4486 6.2478)"
            fill="#0275D8"
          />
          <rect
            width="32.8253"
            height="32.8253"
            rx="6"
            transform="matrix(0.866667 0.498887 -0.866667 0.498887 28.4486 -1.7522)"
            fill="#0B5A79"
          />
        </svg>
      </div>
      <div id="main">
        <div className="header">
          <div className="auth-head">login</div>
          <div className="auth-head">sign up</div>
        </div>
        <div className="outlet">
          <Outlet />
        </div>
      </div>
    </AuthContainer>
  );
};
