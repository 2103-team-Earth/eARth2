import {React, Component} from "react";

  export class Login extends Component {
    constructor(props) {
      super(props);
      this.state = {
       username: "",
       password: ""
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
            const {username, password} = this.state
            return (
              <div className="container">
                     <h1>Login</h1>
                <form onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="username">
                      <small>Username: </small>
                    </label>
                    <input name="username" type="text" onChange={handleChange} value={username}/>
                  </div>
                  <div>
                    <label htmlFor="password">
                      <small>Password: </small>
                    </label>
                    <input name="password" type="password" onChange={handleChange} value={password} />
                  </div>
                  <div className="enter">
                    <button type="submit">Submit</button>
                  </div>
                </form>
              </div>
            );
            }
            }
        
        
        
