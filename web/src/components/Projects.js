import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import firebase from 'firebase';
import 'firebase/firestore';

class Projects extends Component {
  constructor() {
    super();

    this.state = {
      userProjects: []
    };

    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    firebase.firestore()
      .collection('users')
      .doc(firebase.auth().currentUser.uid)
      .get()
      .then(snapshot => {
        this.setState({
          userProjects: snapshot.data().projects
        });
      });

    this.setState({
      state: this.state
    });
  }

  handleDelete(e) {
    const projectToDelete = JSON.parse(e.target.name);

    firebase.firestore()
      .collection('users')
      .doc(firebase.auth().currentUser.uid)
      .update({
        projects: firebase.firestore.FieldValue.arrayRemove(projectToDelete)
      });

    firebase.firestore()
      .collection('users')
      .doc(firebase.auth().currentUser.uid)
      .get()
      .then(snapshot => {
        this.setState({
          userProjects: snapshot.data().projects
        });
      });
  }

  render() {
    return (
      <div className="page">

        <h1>Projects</h1>

        <Link to="/create">
          <button>Create New Project</button>
        </Link>

        <br />
        <br />

        <h3>My Projects</h3>

        {
          this.state.userProjects.length === 0
          ?
          <p>You do not currently have any projects. Click the button above to create a project.</p>
          :
          <div className="user-projects-list">
          {
            this.state.userProjects.map(userProject => {
              return (
                <div className="user-project-div" key={userProject.id}>
                  <h4>{userProject.name}</h4>
                  <h5>View: {userProject.view}</h5>
                  {userProject.shape ? <h6>Shape: {userProject.shape}</h6> : null}
                  {userProject.colorSelected ? <h6>Color: {userProject.colorSelected}</h6> : null}
                  {userProject.animation ? <h6>Animation: {userProject.animation}</h6> : null}
                  {userProject.animate ? <h6>Animate: {userProject.animate}</h6> : null}
                  {userProject.text ? <h6>Text: {userProject.text}</h6> : null}
                  {userProject.textScaleX ? <h6>Text Scale X: {userProject.textScaleX}</h6> : null}
                  {userProject.textScaleY ? <h6>Text Scale Y: {userProject.textScaleY}</h6> : null}
                  {userProject.textScaleZ ? <h6>Text Scale Z: {userProject.textScaleZ}</h6> : null}
                  {userProject.shapeScaleX ? <h6>Shape Scale X: {userProject.shapeScaleX}</h6> : null}
                  {userProject.shapeScaleY ? <h6>Shape Scale Y: {userProject.shapeScaleY}</h6> : null}
                  {userProject.shapeScaleZ ? <h6>Shape Scale Z: {userProject.shapeScaleZ}</h6> : null}
                  {userProject.fontSize ? <h6>Font Size: {userProject.fontSize}</h6> : null}
                  {userProject.textColor ? <h6>Text Color: {userProject.textColor}</h6> : null}
                  {userProject.soundName ? <h6>Sound: {userProject.soundName}</h6> : null}
                  <button name={JSON.stringify(userProject)} onClick={this.handleDelete}>Delete this Project</button>
                </div>
              );
            })
          }
          </div>
        }

      </div>
    );
  };
}

export default Projects;
