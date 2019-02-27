import React, { Component } from "react";
import Home from "./components/home/Home";
import "./components//home/Home";
import { Switch, Route, Redirect } from "react-router-dom";
import AnimalDetails from "./components/registeredDonation/AnimalDetails";
import AnimalList from "./components/registeredDonation/AnimalList";
import Navbar from "./components/navbar/Navbar";
import "./components/navbar/Navbar.css";
import Signup from "./components/auth/signup/Signup";
import AuthService from "./components/auth/auth-service";
import Login from "./components/auth/login/Login";
import ProtectedRoute from "./components/auth/protected-route";
import AdoptList from "./components/adoption/AdoptList";
import AboutUs from "./components/aboutUs/AboutUs";
import Contacts from "./components/contacts/Contacts";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { loggedInUser: null };
    this.service = new AuthService();
  }

  fetchUser() {
    if (this.state.loggedInUser === null) {
      this.service
        .loggedin()
        .then(response => {
          this.setState({
            loggedInUser: response
          });
        })
        .catch(err => {
          this.setState({
            loggedInUser: false
          });
        });
    }
  }

  getTheUser = userObj => {
    this.setState({
      loggedInUser: userObj
    });
  };

  render() {
    this.fetchUser();
    if (this.state.loggedInUser) {
      return (
        <div className="App">
          <Navbar
            userInSession={this.state.loggedInUser}
            getUser={this.getTheUser}
          />
          <Redirect from="/login" to="/cadastro" />
          <Switch>
            <ProtectedRoute
              user={this.state.loggedInUser}
              path="/animal/:id"
              component={AnimalDetails}
            />
            <ProtectedRoute
              user={this.state.loggedInUser}
              path="/cadastro"
              component={AnimalList}
            />
            <ProtectedRoute
              user={this.state.loggedInUser}
              path="/adote"
              component={AdoptList}
            />
          </Switch>
        </div>
      );
    } else {
      return (
        <div className="App">
          <Switch>
            <Route
              exact
              path="/signup"
              render={() => <Signup getUser={this.getTheUser} />}
            />
            <Route
              exact
              path="/login"
              render={() => <Login getUser={this.getTheUser} />}
            />
            <Route
              exact
              path="/"
              component={Home}
            />
            <Route
              exact
              path="/aboutUs"
              component={AboutUs}
            />
            <Route
              exact
              path="/contacts"
              component={Contacts}
            />
          </Switch>
        </div>
      );
    }
  }
}

export default App;
