import React, { Component } from "react";
import { Link } from "react-router-dom";
import AuthService from "../auth/auth-service";
import "./Home.css";
import NavDeslog from "../navDeslog/NavDeslog";
// import "../navDeslog/NavDeslog.css";
// import AboutUs from "../aboutUs/AboutUs";
// import Contacts from "../contacts/Contacts";
// import FooterDeslog from "../footer/FooterDeslog";
// import "../footer/FooterDeslog.css";
// import AdoptList from "../adoption/AdoptList";
// import ThumbnailGallery from "../thumbnail-gallery/index";

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
    if (!this.state.loggedInUser) {
      return (
        <div id="home">
          <NavDeslog />
          <div>
            <div className="align-logo-home">
              <div className="logo-home">
                <img src="images/logo.jpg" alt="logo" />
                <h2>DÊ AMOR</h2>
              </div>
            </div>
            <div className="slogan">
              <h3>Um espaço para quem deseja doar ou adotar um bichinho</h3>
            </div>
            <div className="box-cadastro">
              <Link className="box-no-dec" to="/signup">
                Cadastre-se
              </Link>
            </div>
          </div>
          <div id="background-home">
            <div
              id="carouselExampleFade"
              className="carousel slide carousel-fade background"
              data-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    className="d-block w-100"
                    src="/images/slide1.png"
                    alt="Cachorro"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    className="d-block w-100"
                    src="/images/slide2.png"
                    alt="Gato"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    className="d-block w-100"
                    src="/images/slide3.png"
                    alt="Tartaruga"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* <div>
            <div className="faixa" />
            <div>
              <AboutUs />
            </div>
            <div className="faixa" />
            <div>
              <ThumbnailGallery />
            </div>
            <div>
              <Contacts />
            </div>
            <div className="faixa" />
            <div>
              <FooterDeslog />
            </div>
          </div> */}
        </div>
      );
    }
  }
}

export default Home;