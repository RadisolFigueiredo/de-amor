import React, { Component } from "react";
import { Link } from "react-router-dom";
import AuthService from "../auth/auth-service";
import "./Home.css";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { loggedInUser: null };
    this.service = new AuthService();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ ...this.state, loggedInUser: nextProps["userInSession"] });
  }

  logoutUser = () => {
    this.service.logout().then(() => {
      this.setState({ loggedInUser: null });
      this.props.getUser(null);
    });
  };

  render() {
    if (this.state.loggedInUser) {
      return (
        <div  className="format">
          <nav className="navbar navbar-expand-md navbar-light bg-dark">
            <Link className="navbar-brand" to="#" />
            Olá, {this.state.loggedInUser.name}
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarMainToggler"
              aria-controls="navbarMainToggler"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <section
              className="collapse navbar-collapse"
              id="navbarMainToggler"
            >
              <div className="navbar-nav ml-auto">
                <Link className="nav-item nav-link" to="/cadastro/">
                  Doe
                </Link>
                <Link className="nav-item nav-link" to="/adote">
                  Adote
                </Link>
                <Link
                  className="nav-item nav-link"
                  onClick={() => this.logoutUser()}
                  to="/"
                >
                  Sair
                </Link>
              </div>
            </section>
          </nav>

          <footer>
            <container>
              <i className="fab fa-facebook-f" />
              <i className="fab fa-instagram" />
            </container>
          </footer>
        </div>
      );
    } else {
      return (
        <div id="background-home">
          <div className="format">
            <div className="background">
              <div className="logo">
                <Link to="/">
                  <img src="images/logo2sol.png" alt="logo" />
                </Link>
              </div>
              <nav className="navbar-home navbar-expand-md">
                <div className="navbar-home">
                  <Link className="nav-item nav-link nav-dec" to="/AboutUs">
                    Quem Somos
                  </Link>

                  <Link className="nav-item nav-link nav-dec" to="/signup">
                    Cadastre-se
                  </Link>

                  <Link className="nav-item nav-link nav-dec" to="/login">
                    Entre
                  </Link>
                </div>
              </nav> 
              <div className="box-position">
                <div className="position">
                  <h3 className="font">"Os animais esperam de nós o que nós esperamos dos anjos"</h3>
                </div>
              </div>
              <div className="box-footer">
                <div className="footer-layout">
                  <h4 className="">© Copyright 2018 </h4>
                  <i className="fab fa-facebook-f bolder" />
                  <i className="fab fa-instagram bolder" />
                  <h4 className="">Venha receber ou dar AMOR ♥ </h4>
                </div>
              </div>
            </div>
          </div>
        </div>

      );
    }
  }
}

export default Home;