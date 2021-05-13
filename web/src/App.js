import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import firebase from 'firebase';

import Home from './components/Home';
import Signup from './components/Signup';
import Login from './components/Login';
import Logout from './components/Logout';
import Uploading from './components/Uploading';
import Create from './components/Create';


const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
};

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
};



class App extends Component {
  constructor(props) {
    super()
    this.state = {
      loaded: false,
    }
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (!user) {
        this.setState({
          loggedIn: false,
          loaded: true,
        })
      } else {
        this.setState({
          loggedIn: true,
          loaded: true,
        })
      }
    })
  }

  render() {
    const { loggedIn, loaded } = this.state;

    if (!loaded) {
      return (
        <div>
          <h1>Loading</h1>
        </div>
      )
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

            <Switch>
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
              <Route exact path="/" component={Home} />
            </Switch>

          </div>
        </Router>
      );
    }

    return (
        <Router>
          <div>

            <nav>
              <Link className="navBar" to="/">Home</Link>
              <Link className="navBar" to="/uploading">Uploading</Link>
              <Link className="navBar" to="/create">Create</Link>
              <Link className="navBar" to="/logout">Logout</Link>
              {/* <Link className="navBar" to="/projects">Projects</Link> */}
              {/* <Link className="navBar" to="/profile">Profile</Link> */}
            </nav>

            <Switch>
              <Route path="/uploading" component={Uploading} />
              <Route path="/create" component={Create} />
              <Route exact path="/logout" component={Logout} />
              <Route exact path="/" component={Home} />
            </Switch>

          </div>
        </Router>
    );
  }
}

export default App;
