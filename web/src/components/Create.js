import React, { Component } from "react";



export class Create extends Component {
    constructor(props) {
        super(props);
        this.state = {
          shape: "",
          color: "",
          animation: "no",
          animate: "rotate"
    		};
    		this.handleChange = this.handleChange.bind(this); 	
            this.handleSubmit = this.handleSubmit.bind(this)
        }


            handleChange(evt) {
              this.setState({
                [evt.target.name]: evt.target.value
              });

            }

            handleSubmit() {

            }



        render() {
            const {handleSubmit, handleChange} = this
            const {animation, shape, color, animate} = this.state
            return (
                <div className="container">
                <form onSubmit={handleSubmit}>
                <h1>Create 3D Model </h1>
                <div className="shapes">
                    <label htmlFor="shape" >Shape:   
                    <select className="shapes" id="dropbown" name="shape" onChange={handleChange} value={ shape}>
                        <option value="sphere">Sphere</option>
                        <option value="box">Box</option>
                    </select>
                    </label>
                    </div>

                    <div className="colors">
                    <label htmlFor="color" >Colors:  
                    <select className="colors" id="dropbown" name="color" onChange={handleChange} value={ color}>
                        <option value="red">Red</option>
                        <option value="blue">Blue</option>
                        <option value="yellow">Yellow</option>
                        <option value="green">Green</option>
                        <option value="orange">Orange</option>
                    </select>
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
            );
            }
            }