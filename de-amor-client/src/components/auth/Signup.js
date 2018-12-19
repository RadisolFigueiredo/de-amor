import React, { Component } from "react";
import AuthService from "./auth-service";
import { Link } from "react-router-dom";
import "./login/login.css";


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
      <div id="background-login" className="grandParentContainer">
        <div lassName="parentContainer">
          <div align="center">
            <form
              className="loginForm"
              role="form"
              onSubmit={this.handleFormSubmit}
            >
              <h2>Cadastre-se</h2>
              <div className="form-group">
                <label className="col-sm-3 control-label font">Nome:</label>
                <div className="col-sm-9">
                  <input
                    placeholder="Nome"
                    class=" font"
                    type="string"
                    name="name"
                    value={this.state.name}
                    onChange={e => this.handleChange(e)}
                  />
                </div>
              </div>
              <div className="form-group">
                <label className="col-sm-3 control-label font">Email:</label>
                <div className="col-sm-9">
                  <input
                    placeholder="Email"
                    class=" font"
                    type="string"
                    name="username"
                    value={this.state.email}
                    onChange={e => this.handleChange(e)}
                  />
                </div>
              </div>
              <div className="form-group">
                <label className="col-sm-3 control-label font">Senha:</label>
                <div className="col-sm-9">
                  <input
                    placeholder="Senha"
                    class=" font"
                    type="string"
                    name="password"
                    value={this.state.password}
                    onChange={e => this.handleChange(e)}
                  />
                </div>
              </div>
              <button type="submit" class="btn btn-primary btn-lg btn-ajs">
                Cadastre-se
              </button>
              <span class="help-block">
                <Link to={"/login"}>Já é cadastrado? Clique aqui </Link>{" "}
              </span>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;
