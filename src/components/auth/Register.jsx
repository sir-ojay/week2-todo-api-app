import { useState } from "react";
import { Link } from "react-router-dom";
import RegisterContainer from "./styles/registerStyles";
import Button from "./addons/Button";
import AuthImage from "./addons/AuthImage";
import Social from "./addons/Social";

const Register = () => {
  const [data, setData] = useState({});

  const handleChange = (e) => {
    e.preventDefault();
  };
  return (
    <RegisterContainer>
      <AuthImage />

      <div className="main">
        <h2>Sign Up</h2>
        <div className="input">
          <label htmlFor="name">Username</label>
          <input
            type="email"
            name="name"
            id="name"
            placeholder="Input a Username"
          />
        </div>
        <div className="input">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Your Email"
          />
        </div>
        <div className="input">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Your Password"
            onChange={handleChange}
          />
        </div>
        <div className="agree">
          <div className="agreeBox">
            <input type="checkbox" name="agreeTo" id="agreeTo" />
            <label htmlFor="agreeTo">
              I agree to the terms and conditions
            </label>
          </div>
        </div>
        <Button text={"Sign Up"} />
        <Social />
        <p>
          I already have an account <Link to={"/auth"}>Login</Link>
        </p>
      </div>
    </RegisterContainer>
  );
};

export default Register;
