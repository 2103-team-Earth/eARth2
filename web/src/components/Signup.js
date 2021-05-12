import React from "react";

export const Signup = (props) => {
    const { handleSubmit} = props;
  
    return (
      
      <div className="container">
            <h1>Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">
              <small>Username: </small>
            </label>
            <input name="username" type="text" />
          </div>
          <div>
          <label htmlFor="email">
              <small>Email: </small>
            </label>
            <input name="email" type="email" />  
          </div>
          <div>
            <label htmlFor="password">
              <small>Password: </small>
            </label>
            <input name="password" type="password" />
          </div>
          <div>
          <label htmlFor="profilephoto">
              <small>Profile Photo: </small>
            </label>
            <input name="profilephoto" type="file" accept="image/*" />  
          </div>
          <div>
          <label htmlFor="biography">
              <small>Biography: </small>
            </label>
            <input name="biography" type="text" />  
          </div>
          <div className="enter">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    );
  };