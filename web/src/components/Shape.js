import React, { Component } from "react";
import { SketchPicker } from 'react-color';



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
          fontSize: 12,
          lightingModel: "Blinn",
          diffuseTexture: {},
          audio: "",
          view: "shape"
          }
    		
    		this.handleChange = this.handleChange.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);
            this.handleChangeColor = this.handleChangeColor.bind(this);

        }

            handleChange(evt) {
              this.setState({
                [evt.target.name]: evt.target.value
              });

            }

            handleSubmit() {

            }

            handleChangeColor = (color) => {
                this.setState({ colorSelected: color.hex });
              };



        render() {
            const {handleSubmit, handleChange, handleChangeColor} = this
            const {animation, shape, colorSelected, animate, name, shapeScaleX, shapeScaleY, shapeScaleZ, audio} = this.state
            return (
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

                    
                    <div className="shapes">
                    <h3>Display Shape:</h3>
                    <label htmlFor="shape" >Shape:
                    <select className="shapes" id="dropbown" name="shape" onChange={handleChange} value={shape}>
                        <option value="sphere">Sphere</option>
                        <option value="box">Box</option>
                    </select>
                    </label>
                    <h5>Shape Scale: </h5>
                    <label htmlFor="shapeScale" >
                    <label> X: {shapeScaleX}</label>
                    <input name="shapeScaleX" type="range" min="0.05" max="1" step="0.05" onChange={handleChange} value={shapeScaleX} />
                     <label>Y: {shapeScaleY}</label>
                     <input name="shapeScaleY" type="range" min="0.05" max="1" step="0.05" onChange={handleChange} value={shapeScaleY} />
                     <label>Z: {shapeScaleZ}</label>
                     <input name="shapeScaleZ" type="range" min="0.05" max="1" step="0.05" onChange={handleChange} value={shapeScaleZ} />
                    </label>
                    </div>

                    <div className="colors">
                    <h3>Select A Color:</h3>
                    <label htmlFor="color" >Color: {colorSelected}
                    <SketchPicker
                    color={ this.state.colorSelected }
                    onChangeComplete={handleChangeColor} 
                     />
                    </label>
                    </div>

                    <div className="audio">
                    <label htmlFor="audio" >
                    <label> Upload Audio: </label>
                    <input name="audio" type="file" accept="audio/*" onChange={handleChange} value={audio} />
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
                    <div>
                    <button className="enter" type="submit">Submit</button>
                    </div>
                </form>
                </div>

                </header>
                </div>
            );
            }
            }
             export default Shape;
