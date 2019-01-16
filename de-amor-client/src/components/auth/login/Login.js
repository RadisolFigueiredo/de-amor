import React, { Component } from "react";
import AuthService from "../auth-service";
import { Link } from "react-router-dom";
import "./login.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "" };
    this.service = new AuthService();
  }

  handleFormSubmit = event => {
    event.preventDefault();

    const { username, password } = this.state;

    this.service
      .login(username, password)
      .then(response => {
        this.setState({ username: "", password: "" });
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
								<h1>Login</h1>
							</div>
              <div className="form-group">
                <div>
                  <input
                    type="email"
                    id="email"
                    placeholder="Digite seu email"
                    className="font"
                    name="username"
                    value={this.state.username}
                    onChange={e => this.handleChange(e)}
                  />
                </div>
              </div>
              <div className="form-group">
                <div>
                  <input
                    type="password"
                    id="password"
                    placeholder="Digite a senha"
                    className="font"
                    name="password"
                    value={this.state.password}
                    onChange={e => this.handleChange(e)}
                  />
                </div>
              </div>
              <div>
                <button type="submit" class="btn btn-primary btn-lg btn-ajs">
                  Login
                </button>
              </div>
              <div className="help-block">
                <Link className="help-block" to={"/signup"}>Não tem cadastro? Clique aqui </Link>
              </div>
              <div className="help-block">
                <Link className="help-block" to="/">Voltar</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
