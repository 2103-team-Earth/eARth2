import React, { Component } from "react";
import { SketchPicker } from 'react-color';



export class Both extends Component {
    constructor(props) {
        super(props);
        this.state = {
          name: "",
          shape: "sphere",
          colorSelected: "#d3d3d3",
          animation: "no",
          animate: "rotate",
          text: "",
          textScaleX: 0.1,
          textScaleY: 0.1,
          textScaleZ: 0.1,
          shapeScaleX: 0.25,
          shapeScaleY: 0.25,
          shapeScaleZ: 0.25,
          fontSize: 12,
          textColor: "#d3d3d3",
          textAlignVertical: "center",
          textAlign: "center",
          fontFamily: "Arial",
          lightingModel: "Blinn",
          diffuseTexture: {},
          audio: "",
          view: "both"
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
            const {animation, shape, colorSelected, animate, text, name, textScaleX, textScaleY, textScaleZ, shapeScaleX, shapeScaleY, shapeScaleZ, fontSize, audio} = this.state
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

                    
                    <div className="shapes">
                    <h3>Display Shape:</h3>
                    <label htmlFor="shape" >Shape:
                    <select className="shapes" id="dropbown" name="shape" onChange={handleChange} value={ shape}>
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

            export default Both;
