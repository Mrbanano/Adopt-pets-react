import React from "react";
import {Link} from "react-router-dom";
import Nav from '../components/Nav';
const Header = () => (
  <div className="Header">
    <div className="Header-container">
      <div className="Header-content">
        <div className="Header-logo">
          <Link to="/">
            <img src="https://para-perros.online/wp-content/uploads/2018/10/dibujo-de-perro-tierno-para-pintar.jpg#main" alt="perraso"/>
          </Link>
        </div>
        <div className="Header-nav">
          <Nav></Nav>
        </div>
      </div>
    </div>
  </div>
);

export default Header;
