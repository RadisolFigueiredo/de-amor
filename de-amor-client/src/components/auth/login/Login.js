import React, { Component } from 'react';
import AuthService from '../auth-service';
import { Link } from 'react-router-dom';
import "./login.css";

class Login extends Component {
  constructor(props){
    super(props);
    this.state = {username: '', password: '' };
    this.service = new AuthService();
  }

  handleFormSubmit = (event) => {
    event.preventDefault();

    const { username, password } = this.state;

    this.service.login(username, password)
    .then( response => {
        this.setState({ username: "", password: "" });
        this.props.getUser(response)
    })
    .catch( error => console.log(error) )
  }
    
  handleChange = (event) => {  
    const {name, value} = event.target;
    this.setState({[name]: value});
  }
    
  render() {
    return(
      <div id="background-login" className="grandParentContainer">
        <div className="parentContainer">
          <div align="center">
            <form className="loginForm" role="form" onSubmit={this.handleFormSubmit}>
              <h2>Login</h2>
              <div className="form-group">
                <label for="email" className="col-sm-3 control-label font">Email:</label>
                <div className="col-sm-9">
                  <input type="email" id="email" placeholder="Email" class=" font" name="username" value={this.state.username} onChange={ e => this.handleChange(e)}/>
                </div>
              </div>
              <div className="form-group">
                <label for="password" class="col-sm-3 control-label font">Password:</label>
                <div className="col-sm-9">
                  {/* <textarea name="password" value={this.state.password} onChange={ e => this.handleChange(e)} /> */}
                  <input type="password" id="password" placeholder="Password" class=" font" name="password" value={this.state.password} onChange={ e => this.handleChange(e)}/>
                </div>
              </div>
              <button type="submit" class="btn btn-primary btn-lg btn-ajs">Login</button>
              <span class="help-block"><Link to={'/signup'}>Não tem cadastro? Clique aqui </Link> </span>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Login;