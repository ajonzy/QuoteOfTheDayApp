import React, { Component } from 'react';
import { Switch, Route } from "react-router"

import Home from "./pages/home"
import Quote from "./pages/quote"
import About from "./pages/about"

export default class App extends Component {
render() {
    return (
      <div className='app'>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/quote" component={Quote} />
          <Route path="/about" component={About} />
        </Switch>
      </div>
    );
  }
}
