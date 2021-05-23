import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import firebase from 'firebase';
import 'firebase/firestore';

class Projects extends Component {
  constructor() {
    super();

    this.state = {
      projects: []
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
          projects: snapshot.data().projects
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
          projects: snapshot.data().projects
        });
      });
  }

  render() {
    return (
      <div className="page">

        <h1>Projects</h1>

        <Link to="/create">
          <button className="button-large">Create New Project</button>
        </Link>

        <br />
        <br />

        <h3>My Projects</h3>

        {
          this.state.projects.length === 0
          ?
          <p>You do not currently have any projects. Click the button above to create a project.</p>
          :
          <div className="user-projects-list">
          {
            this.state.projects.map(project => {
              return (
                <div className="user-project-div" key={project.id}>
                  <h4>{project.name}</h4>
                  <h5>View: {project.view}</h5>
                  {project.shape ? <h6>Shape: {project.shape}</h6> : null}
                  {project.colorSelected ? <h6>Color: {project.colorSelected}</h6> : null}
                  {project.animation ? <h6>Animation: {project.animation}</h6> : null}
                  {project.animate ? <h6>Animate: {project.animate}</h6> : null}
                  {project.text ? <h6>Text: {project.text}</h6> : null}
                  {project.textScaleX ? <h6>Text Scale X: {project.textScaleX}</h6> : null}
                  {project.textScaleY ? <h6>Text Scale Y: {project.textScaleY}</h6> : null}
                  {project.textScaleZ ? <h6>Text Scale Z: {project.textScaleZ}</h6> : null}
                  {project.shapeScaleX ? <h6>Shape Scale X: {project.shapeScaleX}</h6> : null}
                  {project.shapeScaleY ? <h6>Shape Scale Y: {project.shapeScaleY}</h6> : null}
                  {project.shapeScaleZ ? <h6>Shape Scale Z: {project.shapeScaleZ}</h6> : null}
                  {project.fontSize ? <h6>Font Size: {project.fontSize}</h6> : null}
                  {project.textColor ? <h6>Text Color: {project.textColor}</h6> : null}
                  {project.sound ? <h6>Sound: {project.sound}</h6> : null}
                  <button className="delete-button" name={JSON.stringify(project)} onClick={this.handleDelete}>Delete this Project</button>
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
