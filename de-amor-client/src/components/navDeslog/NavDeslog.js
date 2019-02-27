import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./NavDeslog.css";

class NavDeslog extends Component {
  render() {
    return (
      <div id="navdeslog">
        <div className="nav-home">
					<img src="/images/logo.jpg" alt="logo" className="logo-deslog"></img>
					<h4>Dê Amor</h4>
          <label for="toggle">&#9776;</label>
          <input type="checkbox" id="toggle" />
          <div className="menu-deslog">
            <Link className="nav-item" to="/aboutUs">
              Quem Somos
            </Link>
            <Link className="nav-item" to="/login">
              Entre
            </Link>
            <Link className="nav-item" to="/signup">
              Cadastre-se
            </Link>
            <Link className="nav-item" to="/contacts">
              Contato
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default NavDeslog;
