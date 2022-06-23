import SocialContainer, { Icons } from "../styles/socialStyle";
import facebook from "../icons/facebook-f.svg";
import google from "../icons/google.svg";

const Social = () => {
  return (
    <SocialContainer>
      <p>Or continue with</p>
      <Icons>
        <div className="icon">
          <button>
            <img src={facebook} alt="Facebook" />
          </button>
        </div>

        <div className="icon">
          <button>
            <img src={google} alt="Google" />
          </button>
        </div>
      </Icons>
    </SocialContainer>
  );
};

export default Social;
