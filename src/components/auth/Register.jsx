import { Link } from "react-router-dom";
import RegisterContainer from "./styles/registerStyles";
import Button from "./addons/Button";

const Register = () => {
  return (
    <RegisterContainer>
      <div>
        <div>
          <label htmlFor="name">Username</label>
          <input type="text" name="name" id="name" />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" />
        </div>

        <div>
          <div>
            <input type="checkbox" name="agree" id="agree" />
            <label htmlFor="agree">I agree to the terms and conditions</label>
          </div>
        </div>
        <Button text={"Sign Up"} />
        <p>
          I already have an account <Link to={"/auth"}>Login</Link>
        </p>
      </div>
    </RegisterContainer>
  );
};

export default Register;
