import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import { Login } from "./components/Login"
import { Signup } from "./components/Signup"
import { Uploading } from "./components/Uploading";


export default class Routes extends Component {


  render() {

    return (
      <div>
        <Switch>
          <Route path="/upload" component={Uploading}/>
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
        </Switch>
      </div>
    );
  }
}

