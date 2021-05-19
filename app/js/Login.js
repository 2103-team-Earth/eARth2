import React, { Component } from "react";
import { Text, View, TouchableHighlight } from "react-native";
import { connect } from "react-redux";
import styles from "./Stylesheet";
import { setNavigation, AR_NAVIGATOR_TYPE } from "../redux/navigation";

export default class Login extends Component {
  render() {
    return (
      <View style={styles.outer}>
        <View style={styles.inner}>
          <Text style={styles.titleText}>
            Please enter your credentials below to see your models
          </Text>
          <TextInput style={styles.input} placeholder="email" />
          <TextInput style={styles.input} placeholder="password" />
          <TouchableHighlight
            style={styles.buttons}
            onPress={this.props.setNavType(AR_NAVIGATOR_TYPE)}
            underlayColor={"#68A0FF"}
          >
            <Text style={styles.buttonText}>Login</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

//do I need this?
// const mapState = (state) => ({
//   nav: state.navigation,
// });

const mapDispatch = (dispatch) => ({
  setNavType: (type) => dispatch(setNavigation(type)),
});

export default connect(null, mapDispatch)(Login);
