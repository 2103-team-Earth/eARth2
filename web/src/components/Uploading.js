import React, { Component } from "react";



export class Uploading extends Component {
    	constructor(props) {
    		super(props);
    		this.state = {
    			view: this.props.view,
    		};
    
    		this.handleChange = this.handleChange.bind(this); 	
            this.handleSubmit = this.handleSubmit.bind(this)
             }

            handleChange() {

            }

            handleSubmit() {

            }
render() {
    const {handleSubmit, handleChange} = this
    return (
        <div className="container">
          <form onSubmit={handleSubmit}>
          <h1>New Project </h1>
          <div>
              <label htmlFor="model_name">
                <small>Model Name: </small>
              </label>
              <input name="model_name" type="text"  />
            </div>
            <div>
              <label htmlFor="description">
                <small>Model Description:</small>
              </label>
              <input name="description" type="text" />
            </div>
            <div>
              <label htmlFor="model">
                <small>3D model</small>
              </label>
              <input name="model" type="file" accept=".obj, .vfx"/>
            </div>
            <div>
              <label htmlFor="audio">
                <small>Audio</small>
              </label>
              <input name="audio" type="file" accept="audio/*" />
            </div>
            {/* <div>
              <label htmlFor="view">
                <small>View</small>
              </label>
              <input name="view" type="text" />
            </div> */}
            <div >
                      <small>View:</small>
                     
                          <select value={this.state.quantity} onChange={handleChange}>
                              <option value='1'>AR Plane Selector</option>
                              <option value='2'>Image Marker</option>
                              <option value='3'>AR Plane</option>
                          </select>
                  
                  </div>
            <div>
              <button type="enter">Submit</button>
            </div>
          </form>
        </div>
      );
    }
    }


