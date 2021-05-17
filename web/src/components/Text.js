import React, { Component } from 'react';
import { SketchPicker } from 'react-color';
import firebase from 'firebase';
import "firebase/firestore";
import "firebase/storage";
import { v4 as uuidv4 } from 'uuid';
import { withRouter } from 'react-router';

class Text extends Component {
  constructor(props) {
    super(props);

    this.state = {
      view: 'text',
      name: '',
      colorSelected: '#d3d3d3',
      animation: 'no',
      animate: 'rotate',
      text: '',
      textScaleX: 0.1,
      textScaleY: 0.1,
      textScaleZ: 0.1,
      fontSize: 12,
      textColor: '#d3d3d3',
      textAlignVertical: 'center',
      textAlign: 'center',
      fontFamily: 'Arial',
      lightingModel: 'Blinn',
      diffuseTexture: '',
      soundUrl: '',
      soundName: '',
    };

    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleColorChange = this.handleColorChange.bind(this);
    this.handleFileChange = this.handleFileChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleTextChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleColorChange = (color) => {
    this.setState({
      colorSelected: color.hex
     });
  }

  handleFileChange(e) {
    if (e.target.files[0]) {
      const soundFile = e.target.files[0];
      const uploadTask = firebase.storage().ref(`sounds/${soundFile.name}`).put(soundFile);
      uploadTask.on(
        'state_changed',
        snapshot => {},
        error => {
          console.log(error);
        },
        () => {
          firebase.storage()
            .ref('sounds')
            .child(soundFile.name)
            .getDownloadURL()
            .then(url => {
              this.setState({
                soundUrl: url,
                soundName: soundFile.name,
              })
            });
        }
      );
    };
  }

  handleSubmit(e) {
    e.preventDefault();

    firebase.firestore()
      .collection('users')
      .doc(firebase.auth().currentUser.uid)
      .update({
        projects: firebase.firestore.FieldValue.arrayUnion({
          id: uuidv4(),
          view: this.state.view,
          name: this.state.name,
          colorSelected: this.state.colorSelected,
          animation: this.state.animation,
          animate: this.state.animate,
          text: this.state.text,
          textScaleX: this.state.textScaleX,
          textScaleY: this.state.textScaleY,
          textScaleZ: this.state.textScaleZ,
          fontSize: this.state.fontSize,
          textColor: this.state.textColor,
          textAlignVertical: this.state.textAlignVertical,
          textAlign: this.state.textAlign,
          fontFamily: this.state.fontFamily,
          lightingModel: this.state.lightingModel,
          diffuseTexture: this.state.diffuseTexture,
          soundUrl: this.state.soundUrl,
          soundName: this.state.soundName,
        })
      });

    this.props.history.push('/projects');
  }

  render() {
    const { handleTextChange, handleColorChange, handleFileChange, handleSubmit } = this;
    const { animation, colorSelected, animate, text, name, textScaleX, textScaleY, textScaleZ, fontSize } = this.state;

    return (
      <div className="page">
        <div className="container">

          <form onSubmit={handleSubmit}>

            <div className="names">
              <label htmlFor="name">
                Model Name:
                <input name="name" onChange={handleTextChange} value={name} />
              </label>
            </div>

            <div>
              <h3>Display Text:</h3>

              <label htmlFor="textScale">
                <label htmlFor="text">
                  Text:
                  <input name="text" onChange={handleTextChange} value={text} />
                </label>

                <div className="fontSizes">
                  <label htmlFor="fontSize">
                    <label>Font Size:</label>
                    <input name="fontSize" type="number" min="2" max="80" onChange={handleTextChange} value={fontSize} />
                  </label>
                </div>

                <h5>Text Scale:</h5>
                <label>X: {textScaleX}</label>
                <input name="textScaleX" type="range" min="0.05" max="1" step="0.05" onChange={handleTextChange} value={textScaleX} />
                <label>Y: {textScaleY}</label>
                <input name="textScaleY" type="range" min="0.05" max="1" step="0.05" onChange={handleTextChange} value={textScaleY}
                />
                <label>Z: {textScaleZ}</label>
                <input name="textScaleZ" type="range" min="0.05" max="1" step="0.05" onChange={handleTextChange} value={textScaleZ}
                />
              </label>
            </div>

            <div className="colors">
              <h3>Select A Color:</h3>
              <label htmlFor="color">
                Color: {colorSelected}
                <SketchPicker color={this.state.colorSelected} onChangeComplete={handleColorChange} />
              </label>
            </div>

            <div className="sound">
              <label htmlFor="sound">
                <label>You can add sound to your model! Upload an audio file here:</label>
                <input name="sound" type="file" accept="audio/*" onChange={handleFileChange} />
              </label>
            </div>

            <div className="animations">
              <h5>You can make your model move! Would you like to add an animation to your model?</h5>
              <select id="dropbown" name="animation" onChange={handleTextChange} value={animation}>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
            {this.state.animation === "yes" ? (
              <div>
                <label htmlFor="animate">
                  <small>Animate Options</small>
                </label>
                <select id="dropbown" name="animate" onChange={handleTextChange} value={animate}>
                  <option value="spin">Spin</option>
                  <option value="jump">Jump</option>
                  <option value="flip">Flip</option>
                  <option value="forward">Forward</option>
                  <option value="backward">Backward</option>
                </select>
              </div>
            ) : (
              <div>
                <p>Your model will be static.</p>
              </div>
            )}

            <div>
              <button className="enter" type="submit">Submit</button>
            </div>

          </form>

        </div>
      </div>
    );
  }
}

export default withRouter(Text);
