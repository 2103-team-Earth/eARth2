import React, { Component } from "react";
import firebase from "firebase";
import "firebase/firestore";
import { v4 as uuidv4 } from "uuid";
import { withRouter } from "react-router";
import { SketchPicker } from "react-color";
import { Cube } from "../3DFolder/Cube";
import { Sphere } from "../3DFolder/Sphere";
import { Button } from "react-bootstrap";

export class Shape extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      shape: "sphere",
      colorSelected: "#d3d3d3",
      animation: "no",
      animate: "rotate",
      shapeScaleX: 0.25,
      shapeScaleY: 0.25,
      shapeScaleZ: 0.25,
      lightingModel: "Blinn",
      diffuseTexture: "",
      sound: "",
      view: "shape",
      material:
        "https://threejsfundamentals.org/threejs/resources/images/wall.jpg",
      colorOrTexture: "color",
      imageMarker: "no",
      targetImage: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleChangeColor = this.handleChangeColor.bind(this);
    this.handleFileChange = this.handleFileChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleChangeColor = (color) => {
    this.setState({ colorSelected: color.hex });
  };

  handleFileChange(e) {
    if (e.target.files[0]) {
      const targetImageFile = e.target.files[0];
      const uploadTask = firebase
        .storage()
        .ref(`targetImages/${targetImageFile.name}`)
        .put(targetImageFile);
      uploadTask.on(
        "state_changed",
        (snapshot) => {},
        (error) => {
          console.log(error);
        },
        () => {
          firebase
            .storage()
            .ref("targetImages")
            .child(targetImageFile.name)
            .getDownloadURL()
            .then((url) => {
              this.setState({
                targetImage: url,
              });
            });
        }
      );
    }
  }

  handleSubmit(e) {
    e.preventDefault();

    firebase
      .firestore()
      .collection("users")
      .doc(firebase.auth().currentUser.uid)
      .update({
        projects: firebase.firestore.FieldValue.arrayUnion({
          id: uuidv4(),
          name: this.state.name,
          shape: this.state.shape,
          colorSelected: this.state.colorSelected,
          animation: this.state.animation,
          animate: this.state.animate,
          shapeScaleX: this.state.shapeScaleX,
          shapeScaleY: this.state.shapeScaleY,
          shapeScaleZ: this.state.shapeScaleZ,
          lightingModel: this.state.lightingModel,
          diffuseTexture: this.state.diffuseTexture,
          sound: this.state.sound,
          view: this.state.view,
          material: this.state.material,
          colorOrTexture: this.state.colorOrTexture,
          imageMarker: this.state.imageMarker,
          targetImage: this.state.targetImage,
        }),
      });

    this.props.history.push("/projects");
  }

  render() {
    const { handleChange, handleChangeColor, handleFileChange, handleSubmit } =
      this;
    const {
      animation,
      shape,
      colorSelected,
      animate,
      name,
      shapeScaleX,
      shapeScaleY,
      shapeScaleZ,
      sound,
      colorOrTexture,
      material,
      imageMarker,
    } = this.state;

    return (
      <div>
        {shape === "sphere" ? (
          <Sphere data={this.state} />
        ) : (
          <div>
            <Cube data={this.state} />
          </div>
        )}
        <div className="App">
          <header className="App-header">
            <div className="container">
              <form onSubmit={handleSubmit}>
                <h1>Create 3D Model </h1>
                <div className="names">
                  <label htmlFor="name">
                    Model Name:
                    <input name="name" onChange={handleChange} value={name} />
                  </label>
                </div>

                <div className="shapes">
                  <h3>Display Shape:</h3>
                  <label htmlFor="shape">
                    Shape:
                    <select
                      className="shapes"
                      id="dropbown"
                      name="shape"
                      onChange={handleChange}
                      value={shape}
                    >
                      <option value="sphere">Sphere</option>
                      <option value="cube">Cube</option>
                    </select>
                  </label>
                  <h5>Shape Scale: </h5>
                  <label htmlFor="shapeScale">
                    <label> X: {shapeScaleX}</label>
                    <input
                      name="shapeScaleX"
                      type="range"
                      min="0.05"
                      max="1"
                      step="0.05"
                      onChange={handleChange}
                      value={shapeScaleX}
                    />
                    <label>Y: {shapeScaleY}</label>
                    <input
                      name="shapeScaleY"
                      type="range"
                      min="0.05"
                      max="1"
                      step="0.05"
                      onChange={handleChange}
                      value={shapeScaleY}
                    />
                    <label>Z: {shapeScaleZ}</label>
                    <input
                      name="shapeScaleZ"
                      type="range"
                      min="0.05"
                      max="1"
                      step="0.05"
                      onChange={handleChange}
                      value={shapeScaleZ}
                    />
                  </label>
                </div>

                <div className="colorOrTexture">
                  <h5>
                    Would you like your model to have a color or a specific
                    image material wrapped over it?{" "}
                  </h5>
                  <select
                    id="dropbown"
                    name="colorOrTexture"
                    onChange={handleChange}
                    value={colorOrTexture}
                  >
                    <option value="color">Color</option>
                    <option value="material">Material</option>
                  </select>
                </div>
                {this.state.colorOrTexture === "color" ? (
                  <div className="colors">
                    <h3>Select A Color:</h3>
                    <label htmlFor="color">
                      Color: {colorSelected}
                      <SketchPicker
                        color={this.state.colorSelected}
                        onChangeComplete={handleChangeColor}
                      />
                    </label>
                  </div>
                ) : (
                  <div className="materials">
                    <label htmlFor="material">
                      <label>
                        {" "}
                        Insert an image URL to wrap over your object:{" "}
                      </label>
                      <input
                        name="material"
                        type="text"
                        onChange={handleChange}
                        value={material}
                      />
                    </label>
                  </div>
                )}

                <div className="sound">
                  <label htmlFor="sound">
                    <label>
                      {" "}
                      Insert a URL to a MP3 for a song to be attached to your
                      model:{" "}
                    </label>
                    <input
                      name="sound"
                      type="text"
                      onChange={handleChange}
                      value={sound}
                    />
                  </label>
                </div>

                <div className="animations">
                  <h5>Would you like to animate your model?</h5>
                  <select
                    id="dropbown"
                    name="animation"
                    onChange={handleChange}
                    value={animation}
                  >
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                </div>
                {this.state.animation === "yes" ? (
                  <div>
                    <label htmlFor="animate">
                      <small>Animate options</small>
                    </label>
                    <select
                      id="dropbown"
                      name="animate"
                      onChange={handleChange}
                      value={animate}
                    >
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

                <div className="imageMarker">
                  <h5>
                    Would you like an image marker which you can scan to render
                    your model?
                  </h5>
                  <select
                    id="dropbown"
                    name="imageMarker"
                    onChange={handleChange}
                    value={imageMarker}
                  >
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                </div>
                {this.state.imageMarker === "yes" ? (
                  <div>
                    <label htmlFor="targetImage">
                      <label>
                        {" "}
                        Upload a target image which will render your 3D model
                        once scanned:{" "}
                      </label>
                      <input
                        name="targetImage"
                        type="file"
                        accept=".jpg, .jpeg, .png"
                        onChange={handleFileChange}
                      />
                    </label>
                  </div>
                ) : (
                  <div>
                    <small>
                      You will be presented with three ways to render your model
                      on our mobile app.
                    </small>
                  </div>
                )}

                <div>
                  <Button variant="light" type="submit">
                    Submit
                  </Button>
                </div>
              </form>
            </div>
          </header>
        </div>
      </div>
    );
  }
}
export default withRouter(Shape);
