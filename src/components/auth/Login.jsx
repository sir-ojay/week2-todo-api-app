import { useState } from 'react'
import { Link } from "react-router-dom";
import Button from "./addons/Button";
import Social from "./addons/Social";
import LoginContainer from "./styles/loginStyles";
import AuthImage from './addons/AuthImage';

const Login = () => {
  const [data, setData] = useState({})


  const handleChange = (e) => {
    e.preventDefault()
  };

  return (
    <LoginContainer>
      <AuthImage />
      <div className="main">
        <h2>Login</h2>
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

        <div className="reset">
          <div className="remember">
            <input type="checkbox" name="remember-me" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <Link to={"/reset"}>Forgot password</Link>
        </div>
        <Button text={"Login"} />
        <Social />
      </div>
    </LoginContainer>
  );
};

export default Login;
