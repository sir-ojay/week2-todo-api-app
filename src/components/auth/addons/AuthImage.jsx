import styled from "styled-components";
// import authImg from "../icons/auth.svg";

import React from "react";

const AuthImage = () => {
  return (
    <AuthImg className="auth-img">
      <img src={require("../icons/auth.svg").default} alt="" />
    </AuthImg>
  );
};

export default AuthImage;

const AuthImg = styled.div`
  background-image: url("../icons/auth.svg");
  background-color: #be9696;

  img {
    height: 100%;
    width: 100%;
  }

  @media screen and (max-width: 1000px) {
     display: none;
  }
`;
