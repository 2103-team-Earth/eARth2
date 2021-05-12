import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import { Login } from "./components/Login"
import { Signup } from "./components/Signup"
import { Uploading } from "./components/Uploading";
import { Home } from "./components/Home"
import { Create } from "./components/Create"

export default class Routes extends Component {


  render() {

    return (
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/upload" component={Uploading}/>
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/create" component={Create} />
        </Switch>
      </div>
    );
  }
}

