import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Form from "./components/UserForm";
import Profile from "./components/Profile";

class App extends Component {
  state = {
    user: [],
    show: false
  };

  getUser = async e => {
    e.preventDefault();
    const userName = e.target.elements.userName.value;

    fetch(`https://api.github.com/users/${userName}`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          user: data,
          show: true
        });
      });
  };

  render() {
    return (
      <div className="app">
        <div className="container d-flex content-between">
          <header className="app__header-top">
            <img src={logo} className="app__logo" alt="logo" />
            <h2 className="title font-sm">
              GitProfile - Github profile Finder
            </h2>
          </header>
          <Form getUser={this.getUser} />
        </div>
        {this.state.show && <Profile userInfo={this.state.user} />}
      </div>
    );
  }
}

export default App;
