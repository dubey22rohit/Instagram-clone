import React from "react";
import {Link} from 'react-router-dom';
const Login = () => {
  return (
    <div className = "mycard">
      <div className = "card auth-card input-field">
        <h2>Login</h2>
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Password" />
        <button type="submit" className = "btn waves-effect waves-light #64b5f6 blue lighten-2">Submit</button>
        <p><Link to = "/signup">Don't have an account?Sign Up.</Link></p>    
      </div>
    </div>
  );
};
export default Login;
