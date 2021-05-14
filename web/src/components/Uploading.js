import React, { Component } from 'react';

class Uploading extends Component {
    	constructor(props) {
    		super(props);
    		this.state = {
    			anchor: "no",
          name: "",
          description: "",
          model: "",
          audio: "",
          markerimage: ""
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
    const {anchor, name, description, model, audio, markerimage} = this.state
    return (
      <div className="App">
      <header className="App-header">

        <div className="container">
          <form onSubmit={handleSubmit}>
          <h1>New Project </h1>
          <div>
              <label htmlFor="model_name">
                <small>Model Name:  </small>
              </label>
              <input name="name" onChange={handleChange} value={name} />
            </div>
            <div>
              <label htmlFor="description">
                <small>Model Description: </small>
              </label>
              <input name="description" onChange={handleChange} value={description} />
            </div>
            <div>
              <label htmlFor="model">
                <small>3D model: </small>
              </label>
              <input name="model" type="file" accept=".obj, .vfx" onChange={handleChange} value={model}/>
            </div>
            <div>
              <label htmlFor="audio">
                <small>Audio: </small>
              </label>
              <input name="audio" type="file" accept="audio/*" onChange={handleChange} value={audio} />
            </div>
            <div className="yesOrNo">
              <h5>Would you like to have an image marker to render your AR models?</h5>
              <select  id="dropbown" name="anchor" onChange={handleChange} value={anchor}>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
             {this.state.anchor === "yes" ? (<div>
               <label htmlFor="markerimage">
              <h3>Marker Image </h3>
              <p>(Please upload a image which you can scan to render your 3D model)</p>
              </label>
              <input name="markerimage" type="file" accept="image/*" onChange={handleChange} value={markerimage}/>
              </div>) :
              (<div>
                <p>You will have a default anchor of AR Plane Selector</p>
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

export default Uploading;


