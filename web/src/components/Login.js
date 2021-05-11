import React from "react";

export const Login = (props) => {
    const { handleSubmit } = props;
  
    return (
      <div className="container">
             <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">
              <small>Username: </small>
            </label>
            <input name="username" type="text" />
          </div>
          <div>
            <label htmlFor="password">
              <small>Password: </small>
            </label>
            <input name="password" type="password" />
          </div>
          <div className="enter">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    );
  };