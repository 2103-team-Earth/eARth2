import firebase from 'firebase';
import "firebase/firestore";
import "firebase/storage";
import { v4 as uuidv4 } from 'uuid';
import { withRouter } from 'react-router';
import React, { Component } from 'react';
import { SketchPicker } from 'react-color';
import { Word } from "../3DFolder/Word"


export class Text extends Component {
    constructor(props) {
        super(props);
        this.state = {
          name: "",
          shape: "sphere",
          colorSelected: "#d3d3d3",
          animation: "no",
          animate: "rotate",
          text: "default",
          textScaleX: 0.6,
          textScaleY: 0.1,
          textScaleZ: 0.1,
          fontSize: 12,
          textColor: "#d3d3d3",
          textAlignVertical: "center",
          textAlign: "center",
          fontFamily: "Arial",
          lightingModel: "Blinn",
          diffuseTexture: {},
          soundUrl: '',
          soundName: '',
          view: "text",
          material: 'https://threejsfundamentals.org/threejs/resources/images/wall.jpg',
          colorOrTexture: 'color',
          imageMarker: 'no',
          targetImage: ''
          }
    		
    		    this.handleChange = this.handleChange.bind(this);
            this.handleChangeColor = this.handleChangeColor.bind(this);
            this.handleFileChange = this.handleFileChange.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);
        }

            handleChange(evt) {
              this.setState({
                [evt.target.name]: evt.target.value
              });

            }

            handleChangeColor = (color) => {
                this.setState({ colorSelected: color.hex });
              };
              
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
            const {handleSubmit, handleChange, handleChangeColor, handleFileChange} = this
            const {animation, colorSelected, animate, text, name, textScaleX, textScaleY, textScaleZ,  fontSize, soundURL, colorOrTexture, material, imageMarker, targetImage} = this.state
            return (
                <div>
                <Word data={this.state }/>
                <div className="App">
                <header className="App-header">

                <div className="container">
                <form onSubmit={handleSubmit}>
                <h1>Create 3D Model </h1>
                    <div className="names">
                    <label htmlFor="name" >Model Name:
                     <input name="name" onChange={handleChange} value={name} />
                    </label>
                    </div>


                    <div>
                    <h3>Display Text:</h3>
                    <label htmlFor="textScale" >
                    <label htmlFor="text" >Text:
                    <input name="text" onChange={handleChange} value={text} />
                    </label>
                    <div className="fontSizes">
                    <label htmlFor="fontSize" >
                    <label>Font Size: </label>
                     <input name="fontSize" type="number" min="2" max="80" onChange={handleChange} value={fontSize} />
                    </label>
                    </div>
                    <h5>Text Scale: </h5>
                    <label>X: {textScaleX}</label>
                     <input name="textScaleX" type="range" min="0.05" max="1" step="0.05" onChange={handleChange} value={textScaleX} />
                     <label>Y: {textScaleY}</label>
                     <input name="textScaleY" type="range" min="0.05" max="1" step="0.05" onChange={handleChange} value={textScaleY} />
                     <label>Z: {textScaleZ}</label>
                     <input name="textScaleZ" type="range" min="0.05" max="1" step="0.05" onChange={handleChange} value={textScaleZ} />
                    </label>
                    </div>

                    <div className="colorOrTexture">
                    <h5>Would you like your model to have a color or a specific image material wrapped over it? </h5>
                    <select  id="dropbown" name="colorOrTexture" onChange={handleChange} value={colorOrTexture}>
                        <option value="color">Color</option>
                        <option value="material">Material</option>
                    </select>
                    </div>
                    {this.state.colorOrTexture === "color" ? (   <div className="colors">
                    <h3>Select A Color:</h3>
                    <label htmlFor="color" >Color: {colorSelected}
                    <SketchPicker
                    color={ this.state.colorSelected }
                    onChangeComplete={handleChangeColor} 
                     />
                    </label>
                    </div>) :
                    (    <div className="materials">
                    <label htmlFor="material" >
                    <label> Insert an image URL to wrap over your object: </label>
                    <input name="material" type="text" onChange={handleChange} value={material} />
                    </label>
                    </div> ) }

                    {/* <div className="audio">
                    <label htmlFor="audio" >
                    <label> Upload Audio: </label>
                    <input name="audio" type="file" accept="audio/*" onChange={handleChange} value={audio} />
                    </label>
                    </div> */}

                    <div className="sound">
                    <label htmlFor="sound" >
                    <label> Insert a URL to a MP3 for a song to be attached to your model: </label>
                    <input name="sound" type="text" onChange={handleChange} value={soundURL} />
                    </label>
                    </div> 

                    <div className="animations">
                    <h5>Would you like to animate your model?</h5>
                    <select  id="dropbown" name="animation" onChange={handleChange} value={animation}>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                    </div>
                    {this.state.animation === "yes" ? (<div>
                    <label htmlFor="animate">
                    <small>Animate options</small>
                    </label>
                    <select  id="dropbown" name="animate" onChange={handleChange} value={animate}>
                        <option value="spin">Spin</option>
                        <option value="jump">Jump</option>
                        <option value="flip">Flip</option>
                        <option value="forward">forward</option>
                        <option value="backward">Backward</option>
                    </select>
                    </div>) :
                    (<div>
                        <p>Your model will be static.</p>
                        </div>) }
                    

                        <div className="imageMarker">
                    <h5>Would you like a image marker which you can scan to render your model?</h5>
                    <select  id="dropbown" name="imageMarker" onChange={handleChange} value={imageMarker}>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                    </div>
                    {this.state.imageMarker === "yes" ? (<div>
                    <label htmlFor="targetImage">
                    <label> Upload a target image which will render your 3D model once scanned: </label>
                    <input name="targetImage" type="file" accept=".jpg, .jpeg, .png" onChange={handleChange} value={targetImage} />
                    </label>
                    </div>) :
                    (<div>
                        <small>You will be presented with three ways to render your model on our mobile app.</small>
                        </div>) }

                    <div>
                    <button className="enter" type="submit">Submit</button>
                    </div>
                </form>
                </div>

                </header>
                </div>
                </div>
            );
            }
            }
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
