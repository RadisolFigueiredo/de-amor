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
        <div className="container-fluid">
          <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <a className="navbar-brand font" href="#">Olá, {this.state.loggedInUser.name}</a>
            <button className="navbar-toggler" type="button" data-toggler="collapse" data-target="navbarMainToggler" aria-controls="navbarMainToggler" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <section className="collapse navbar-collapse" id="navbarMainToggler">
              <div className="navbar-nav">
                <Link className="nav-item nav-link" to='/cadastro'>Home</Link>
                <Link className="nav-item nav-link" to='/adote'>Home</Link>
                <Link className="nav-item nav-link" onClick={() => this.logoutUser()} to='/'>Sair</Link>
              </div>
            </section>
          </nav>
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
    };
  };
};

export default Navbar;