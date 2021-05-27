import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableHighlight,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import { connect } from 'react-redux';
import styles from './Stylesheet';
import {
  setNavigation,
  AR_NAVIGATOR_TYPE,
  PROFILE_TYPE,
} from './redux/navigation';
import { setProject } from './redux/project';
import firebase from 'firebase';
import 'firebase/firestore';
export class Explore extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
    };
    this.handleProjectPress = this.handleProjectPress.bind(this);
  }
  componentDidMount() {
    firebase
      .firestore()
      .collection('users')
      .get()
      .then((snapshot) => {
        const users = [];
        snapshot.docs.map((doc) => users.push(doc.data()));
        const usersWithProjects = users.filter(
          (user) => user.projects.length > 0
        );
        console.log(usersWithProjects);
        this.setState({
          users: usersWithProjects,
        });
      });
    this.setState({
      state: this.state,
    });
  }
  handleProjectPress(project) {
    this.props.setProject(project);
    this.props.setNavType(AR_NAVIGATOR_TYPE);
  }
  render() {
    console.log(this.props);
    return (
      <View style={styles.outer}>
        <View style={styles.inner}>
          <Image style={styles.tinyLogo} source={require('./res/eARth.png')} />
          <Text style={styles.titleText}>All Projects</Text>
          <Text style={styles.titleText}>
            Explore projects from other Earthlings:
          </Text>
          {this.state.users.length === 0 ? (
            <Text>There are currently no users with projects.</Text>
          ) : (
            <ScrollView>
              {this.state.users.map((user) => (
                <View key={user.email} style={styles.card}>
                  <Text>{user.username}</Text>
                  {user.projects.map((project) => (
                    <TouchableOpacity
                      key={project.id}
                      style={styles.projectCard}
                      onPress={() => this.handleProjectPress(project)}
                    >
                      <Text>{project.name}</Text>
                    </TouchableOpacity>
                  ))}
                </View>
              ))}
            </ScrollView>
          )}
          <TouchableHighlight
            style={styles.buttons}
            onPress={() => this.props.setNavType(PROFILE_TYPE)}
          >
            <Text style={styles.buttonText}>Profile </Text>
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
  setProject: (project) => dispatch(setProject(project)),
});
export default connect(mapState, mapDispatch)(Explore);
