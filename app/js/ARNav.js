import React, { Component } from "react";
import { Text, View, TouchableHighlight } from "react-native";
import { connect } from "react-redux";
import styles from "./Stylesheet";
import {
  setNavigation,
  AUTO_AR,
  AR_PLANE_SELECTOR,
  AR_IMAGE_MARKER,
} from "./redux/navigation";

export class ARNav extends Component {
  render() {
    return (
      <View style={styles.outer}>
        <View style={styles.inner}>
          <Text style={styles.titleText}>Choose your viewing method:</Text>

          <TouchableHighlight
            style={styles.buttons}
            onPress={() => this.props.setNavType(AUTO_AR)}
            underlayColor={"#68a0ff"}
          >
            <Text style={styles.buttonText}>AUTOMATIC</Text>
          </TouchableHighlight>

          <TouchableHighlight
            style={styles.buttons}
            onPress={() => this.props.setNavType(AR_PLANE_SELECTOR)}
            underlayColor={"#68a0ff"}
          >
            <Text style={styles.buttonText}>CHOOSE BASE</Text>
          </TouchableHighlight>

          <TouchableHighlight
            style={styles.buttons}
            onPress={() => this.props.setNavType(AR_IMAGE_MARKER)}
            underlayColor={"#68a0ff"}
          >
            <Text style={styles.buttonText}>FIND IMAGE</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const mapState = (state) => ({
  navType: state.navigation.navigationType,
});

const mapDispatch = (dispatch) => ({
  setNavType: (type) => dispatch(setNavigation(type)),
});

export default connect(mapState, mapDispatch)(ARNav);
