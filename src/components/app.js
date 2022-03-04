import React, { Component } from 'react';
import { Switch, Route } from "react-router"
import Cookies from "js-cookie"

import Home from "./pages/home"
import Quote from "./pages/quote"
import About from "./pages/about"
import Auth from "./pages/auth"

import Navbar from "./navbar"
import Footer from "./footer"

export default class App extends Component {
  constructor() {
    super()

    this.state = {
      userData: {}
    }

    this.handleSuccesfulLogin = this.handleSuccesfulLogin.bind(this)
    this.handleSuccesfulLogout = this.handleSuccesfulLogout.bind(this)
  }

  componentDidMount() {
    if (Cookies.get("username")) {
      fetch("https://qotd-aoj.herokuapp.com/user/get")
      .then(response => response.json())
      .then(data => {
        const userData = data.filter(user => user.username == Cookies.get("username"))[0]
        this.setState({ userData })
      })
    }
  }

  handleSuccesfulLogin(username) {
    fetch("https://qotd-aoj.herokuapp.com/user/get")
    .then(response => response.json())
    .then(data => {
      const userData = data.filter(user => user.username == username)[0]
      this.setState({ userData })
    })
  }

  handleSuccesfulLogout() {
    this.setState({
      userData: {}
    })
  }

render() {
    return (
      <div className='app'>
        <div className="page-wrapper">
          <Navbar username={this.state.userData.username} handleSuccesfulLogout={this.handleSuccesfulLogout} />

          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/quote" component={Quote} />
            <Route path="/about" component={About} />
            <Route path="/auth" component={props => <Auth {...props} handleSuccesfulLogin={this.handleSuccesfulLogin} />} />
          </Switch>
          
          <Footer />
        </div>
      </div>
    );
  }
}
