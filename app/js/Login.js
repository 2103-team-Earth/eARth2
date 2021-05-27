import React, { Component } from 'react';
import { Text, View, Image, TouchableHighlight, TextInput } from 'react-native';
import { connect } from 'react-redux';
import styles from './Stylesheet';
import { setNavigation, PROFILE_TYPE } from './redux/navigation';
import firebase from 'firebase';
import 'firebase/firestore';

export class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: 'momack@gmail.com',
      password: 'momack',
    };

    this.onLogin = this.onLogin.bind(this);
  }

  onLogin() {
    const { email, password } = this.state;

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        // console.log(result);
        this.props.setNavType(PROFILE_TYPE);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <View style={styles.outer}>
        <View style={styles.inner}>
          <Image
            style={styles.largeLogo}
            source={require('./res/earthLogo.png')}
          />
          <Text style={styles.titleText}>Welcome home</Text>
          <Text style={styles.titleText}>Please prove your humanity</Text>
          <TextInput
            style={styles.input}
            placeholder='email'
            onChangeText={(email) => this.setState({ email })}
          />
          <TextInput
            style={styles.input}
            placeholder='password'
            secureTextEntry={true}
            onChangeText={(password) => this.setState({ password })}
          />
          <TouchableHighlight
            style={styles.buttons}
            onPress={() => this.onLogin()}
            underlayColor={'#68A0FF'}
          >
            <Text style={styles.buttonText}>Login</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const mapDispatch = (dispatch) => ({
  setNavType: (type) => dispatch(setNavigation(type)),
});

export default connect(null, mapDispatch)(Login);
