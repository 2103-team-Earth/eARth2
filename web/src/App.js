import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import firebase from "firebase";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Create from "./components/Create";
import Welcome from "./components/Welcome";
import Projects from "./components/Projects";

// Firebase API key is public
const firebaseConfig = {
  apiKey: "AIzaSyCycTEcCKba9eQBaKPYT05aGZl-fhyQb9c",
  authDomain: "earth-a2ce0.firebaseapp.com",
  projectId: "earth-a2ce0",
  storageBucket: "earth-a2ce0.appspot.com",
  messagingSenderId: "33112054293",
  appId: "1:33112054293:web:801afc5e9473c7ba050c1c",
  measurementId: "G-6V50YYJBS2"
};

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      loaded: false,
    };
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        this.setState({
          loggedIn: false,
          loaded: true,
        });
      } else {
        this.setState({
          loggedIn: true,
          loaded: true,
        });
      }
    });
  }

  render() {
    const { loggedIn, loaded } = this.state;

    if (!loaded) {
      return (
        <div>
          <h1>Loading</h1>
        </div>
      );
    }

    if (!loggedIn) {
      return (
        <Router>
          <div>
            <nav>
              <Link className="navBar" to="/">Home</Link>
              <Link className="navBar" to="/signup">Sign Up</Link>
              <Link className="navBar" to="/login">Login</Link>
            </nav>
            <nav>
              <Switch>
                <Route path="/signup" component={Signup} />
                <Route path="/login" component={Login} />
                <Route exact path="/" component={Home} />
              </Switch>
            </nav>
          </div>
        </Router>
      );
    }

    return (
      <Router>
        <div>
          <nav>
            <Link className="navBar" to="/">Home</Link>
            <Link className="navBar" to="/projects">Projects</Link>
            <Link className="navBar" to="/logout">Logout</Link>
          </nav>

          <Switch>
            <Route path="/projects" component={Projects} />
            <Route path="/create" component={Create} />
            <Route exact path="/logout" component={Logout} />
            <Route exact path="/" component={Welcome} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
