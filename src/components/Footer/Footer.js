import styled from 'styled-components';
import {Link} from 'react-router-dom';
import arrow from '../../images/Vector.svg';
import logo from '../../images/logo.svg';
import linkedin from '../../images/logo-linkedin.svg';
import facebook from '../../images/logo-facebook.svg';
import lucide from '../../images/logo-lucide.svg';

const Footer = () => {
  return (
    <StyledFooter>
      <div className="footer__container">
      <div className="footer__inner">
        <div className="footer__top">
          <ul className="footer__links">
            <li>Product</li>
            <li><Link to="/">Diam orci</Link></li>
            <li><Link to="/">Mi feugiat</Link></li>
            <li><Link to="/">Netus fermentum</Link></li>
            <li><Link to="/">Suspendisse viverra</Link></li>
            <li><Link to="/">Id dolor</Link></li>
            <li><Link to="/">Erat mattis</Link></li>
          </ul>
          <ul className="footer__links">
            <li>Information</li>
            <li><Link to="/">Nibh</Link></li>
            <li><Link to="/">Egestas</Link></li>
            <li><Link to="/">Dictum</Link></li>
          </ul>
          <ul className="footer__links">
            <li>Company</li>
            <li><Link to="/">Id maecenas</Link></li>
            <li><Link to="/">Mi feugiat</Link></li>
            <li><Link to="/">Magna ultricies</Link></li>
            <li><Link to="/">Quis risus</Link></li>
          </ul>
          <SubscribeForm>
            <h3>Subscribe</h3>
            <div className="form">
              <input type="text" placeholder='Email address' />
              <button>
                <img src={arrow} alt="arrow" />
              </button>
            </div>
            <p>Gravida sed justo, justo, id est et. Amet tristique convallis sed porttitor nullam eu ut. Duis et odio aliquam bibendum. Metus et lectus id viverra fringilla magna morbi. </p>
          </SubscribeForm>
        </div>
        <div className="footer__bottom">
          <div className="logo">
            <img src={logo} alt="logo"/>
          </div>
          <ul className="footer__bottom__links">
            <li><a href="#">Terms</a></li>
            <li><a href="#">Privacy</a></li>
            <li><a href="#">Cookies</a></li>
          </ul>
          <div className="socials">
            <img src={linkedin} alt="linkedin"/>
            <img src={facebook} alt="facebook"/>
            <img src={lucide} alt="lucide"/>
          </div>
        </div>
      </div>        
      </div>
      
    </StyledFooter>
  )
}

const StyledFooter = styled.footer`
  background-color: #E3ECF0;
  padding: 3rem 1rem;

  ul {
    list-style-type: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  .footer__container {
    max-width: 1200px;
    margin: 0 auto;
  }

  .footer__top {
    padding: 0 1rem 3rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1.5fr;
    grid-gap: 0.5rem;
    border-bottom: 1px solid #ccc;
  }

  .footer__links {
    padding-top: 2rem;
  }

  .footer__links li {
    line-height: 1.7;
  }

  .footer__links li a {
    color: #616161;
  }

  .footer__links li:first-child {
    font-size: 1.1rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
  }

  .footer__bottom {
    padding: 2rem 0 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .footer__bottom__links {
    display: flex;
    gap: 1rem;
    align-items: center;
  }

  .socials {
    display: flex;
    gap: 1.2rem;

    img {
      width: 35px;
      height: 35px;
    }
  }

  @media(max-width:  769px) {
    .footer__top {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media(max-width:  426px) {
    .footer__top {
      grid-template-columns: 1fr;
      justify-items: center;
      text-align: center;
      padding: 0 0 2rem;
    }

    .footer__links {
      padding-top: 1rem;
    }

    .footer__bottom {
      flex-direction: column;
      gap: 2rem;
      align-items: center;
    }
  }
`;

const SubscribeForm = styled.div`
  padding: 2rem;
  background-color: #0B5A7924;

  h3 {
    margin-bottom: 1rem;
    font-size: 1.2rem;
    font-weight: 600;
  }

  p {
    color: #616161;
    line-height: 1.5;
  }

  .form {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;

    input {
      padding: 0.5rem 1rem;
      height: 45px;
      width: 100%;
      border-radius: 5px 0 0 5px;
      font-size: 1rem;
    }

    button {
      cursor: pointer;
      background-color: #0B5A79;
      padding: 0.8rem 1.2rem;
      height: 45px;
      border-radius: 0 5px 5px 0;
    }
  }

  @media(max-width: 426px) {
    margin-top: 2rem;
  }

`;

export default Footer