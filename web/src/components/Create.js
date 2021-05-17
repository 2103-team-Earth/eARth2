import React, { Component } from "react";
import  Both  from "./Both"
import {Text } from "./Text"
import { Shape } from "./Shape"



class Create extends Component {
    constructor(props) {
        super(props);
        this.state = {
          view: "both"
          }
    		
    		this.handleChange = this.handleChange.bind(this);

        }

            handleChange(evt) {
              this.setState({
                [evt.target.name]: evt.target.value
              });

            }

            render() {
            const {handleChange} = this
            const { view } = this.state
            return (
                <div className="App">
                <header className="App-header">
                
                <form className="views">
                    <div >
                        <h5>Would you like to create a 3D Text model, Shape Model, or Both? </h5>
                        <label>  Text:  </label>
                        <input type="radio" id="text" name="view" onChange={handleChange} value="text" /> |
                        <label>  Shape:  </label>
                        <input type="radio" id="shape" name="view" onChange={handleChange} value="shape" /> |
                        <label>  Both:  </label>
                        <input defaultChecked type="radio" id="both" name="view" onChange={handleChange} value="both" /> 
                    </div>
                    </form>
                    {/* CR * routes instead */}
                    {view === "both" ? (<Both />) : (<div></div>)}
                    {view === "shape" ? (<Shape />) : (<div></div>)}
                    {view === "text" ? (<Text />) : (<div></div>)}

                </header>
                </div>
            );
            }
            }

            export default Create;
