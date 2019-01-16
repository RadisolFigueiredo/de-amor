import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AuthService from '../auth/auth-service';
import './Navbar.css';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { loggedInUser: null };
    this.service = new AuthService();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ ...this.state, loggedInUser: nextProps["userInSession"] });
  }

  logoutUser = () => {
    this.service.logout()
      .then(() => {
        this.setState({ loggedInUser: null });
        this.props.getUser(null);
      })
  }

  render() {
    if (this.state.loggedInUser) {
      return (
        <div id="cont-navbar">
          <nav className="navbar navbar-expand-md">
            <Link className="navbar-brand font" to="#">Olá, {this.state.loggedInUser.name}</Link>
              <div className="navbar-nav">
                <Link className="nav-item" to='/cadastro'>Quero doar</Link>
                <Link className="nav-item" to='/adote'>Quero adotar</Link>
                <Link className="nav-item" onClick={() => this.logoutUser()} to='/'>Sair</Link>
              </div>
          </nav>
          <h2 className="frase">"Seja qual for os motivos, não abandone seu pet na rua. Doe!"</h2>
        </div>
      )
  } else {
      return (
        <nav className="nav-style">
          <ul>
            <li><Link to='/login'>Login</Link></li>
            <li><Link to='/signup'>Signup</Link></li>
          </ul>
        </nav>
      );
    }
  };
};

export default Navbar;