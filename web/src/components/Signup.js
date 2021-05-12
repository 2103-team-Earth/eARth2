import {React, Component} from "react";

// export const Signup = (props) => {
//     const { handleSubmit} = props;

    export class Signup extends Component {
      constructor(props) {
        super(props);
        this.state = {
         username: "",
         email: "",
         password: "",
         profilephoto: "",
         biography: ""
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
          const {username, profilephoto, biography, email, password} = this.state
  
          return (
            
            <div className="container">
                  <h1>Sign Up</h1>
              <form onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="username">
                    <small>Username: </small>
                  </label>
                  <input name="username" type="text" onChange={handleChange} value={username} />
                </div>
                <div>
                <label htmlFor="email">
                    <small>Email: </small>
                  </label>
                  <input name="email" type="email" onChange={handleChange} value={email}/>  
                </div>
                <div>
                  <label htmlFor="password">
                    <small>Password: </small>
                  </label>
                  <input name="password" type="password" onChange={handleChange} value={password}/>
                </div>
                <div>
                <label htmlFor="profilephoto">
                    <small>Profile Photo: </small>
                  </label>
                  <input name="profilephoto" type="file" accept="image/*" onChange={handleChange} value={profilephoto}/>  
                </div>
                <div>
                <label htmlFor="biography">
                    <small>Biography: </small>
                  </label>
                  <input name="biography" type="text" onChange={handleChange} value={biography}/>  
                </div>
                <div className="enter">
                  <button type="submit">Submit</button>
                </div>
              </form>
            </div>
          );
        };
      }