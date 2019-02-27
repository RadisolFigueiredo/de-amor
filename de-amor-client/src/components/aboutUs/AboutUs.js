import React, { Component } from "react";
import "./AboutUs.css";
import { Link } from "react-router-dom";
import NavDeslog from "../navDeslog/NavDeslog";

class AboutUs extends Component {
  render() {
    return (
      <div id="about">
        <NavDeslog />
        <div id="background-AboutUs">
          <div className="title-about">
            <h1>Quem Somos</h1>
          </div>
          <div className="text-about">
            <p>
              O DÊ AMOR é uma plataforma para quem se preocupa com seus bichinhos de
              verdade. Seja para quem está em busca de um novo amigo ou até mesmo
              quem precisa, por algum motivo, se desfazer dele. Sabemos que é muito
              triste quando isso acontece, mas melhor do que abandonar seres tão
              bondosos, é doá-los para quem pode e quer cuidar deles.
            </p>
          </div>
          <div className="box-about">
            <h4>Curtiu a idéia? Cadastre-se
              <Link className="link-about" to="/aboutUs"> aqui.</Link>
            </h4>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutUs;
