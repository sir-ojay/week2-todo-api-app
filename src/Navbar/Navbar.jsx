import React from 'react';
import { Link } from "react-router-dom";
/*import { Container, Navbar, Nav, NavDropdown} from 'react-bootstrap';*/
import Logo from '../../images/logo.png';
import "./Navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";

const NavbarComponent = () => {
  return (
     <div className='header'>
       <div className='menu-bar'>
         <nav className='navbar navbar-expand-lg navbar-light'>
           <a className='navbar-brand' href='#home'><img src={Logo} alt="todo-app" /></a>
           <button className='navbar-toggler' type='button' data-bs-toggle="collapse" data-bs-target="navbarNav" aria-expanded="false">
             <span className='navbar-toggler-icon'></span>
           </button>
           <div className='collapse navbar-collapse' id='navbarNav'>
             <ul className='navbar-nav '>
               <li className='nav-item active'>
                 <a className='nav-link' href='#home'><span>Home</span></a>
               </li> 
               <li className='nav-item'>
                 <a className='nav-link' href='#features'>Features</a>
               </li>
               <li className='nav-item'>
                 <a className='nav-link' href='#pricing'>Pricing</a>
               </li>
               <li className='nav-item'>
                 <a className='nav-link' href='#blog'>Blog</a>
               </li>
               <li className='nav-item'>
                 <a className='nav-link' href='#contact us'>Contact Us</a>
               </li>
             </ul>
             <div className='nav-right ms-auto'>
             <a className='nav-link' href='#signin'><span>Sign In</span></a>
             <a className='nav-link' href='#tryforfree'><span className='tryforfree'>Try for free</span></a>
             </div>
           </div>
         </nav>
       </div>
     </div>
  )
}

export default NavbarComponent