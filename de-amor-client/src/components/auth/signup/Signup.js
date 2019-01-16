import React, { Component } from "react";
import AuthService from "../auth-service";
import { Link } from "react-router-dom";
import "./../login/login.css";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "", username: "", password: "" };
    this.service = new AuthService();
  }

  handleFormSubmit = event => {
    event.preventDefault();
    const { name, username, password } = this.state;

    this.service
      .signup(name, username, password)
      .then(response => {
        console.log(response);
        this.setState({
          name: "",
          username: "",
          password: ""
        });
        this.props.getUser(response);
      })
      .catch(error => console.log(error));
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="format-login">
        <div id="background-login">
          <div className="align-form">
            <form onSubmit={this.handleFormSubmit}>
              <div className="align">
                <h1>Cadastre-se</h1>
              </div>

              <div className="form-group">
                <div>
                  <input
                    placeholder="Digite seu nome"
                    class=" font"
                    type="string"
                    name="name"
                    value={this.state.name}
                    onChange={e => this.handleChange(e)}
                  />
                </div>
              </div>
              <div className="form-group">
                <div>
                  <input
                    placeholder="Digite seu email"
                    class=" font"
                    type="string"
                    name="username"
                    value={this.state.email}
                    onChange={e => this.handleChange(e)}
                  />
                </div>
              </div>
              <div className="form-group">
                <div>
                  <input
                    placeholder="Digite sua senha"
                    class=" font"
                    type="string"
                    name="password"
                    value={this.state.password}
                    onChange={e => this.handleChange(e)}
                  />
                </div>
              </div>
              <div>
                <button type="submit" class="btn btn-primary btn-lg btn-ajs">
                  Cadastrar
                </button>
              </div>
              <div className="help-block">
                <Link className="help-block" to={"/login"}>Já é cadastrado? Clique aqui </Link>
              </div>
              <div className="help-block">
                <Link className="help-block" to={"/"}>
                  Voltar
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;
