import React from "react";
import {Link} from 'react-router-dom';
const Signup = () => {
  return (
    <div className = "mycard">
      <div className = "card auth-card input-field">
        <h2>Sign Up</h2>
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Password" />
        <button type="submit" className = "btn waves-effect waves-light #64b5f6 blue lighten-2">Submit</button>
        <p><Link to = "/login">Already have an account?Log In.</Link></p>        
      </div>
    </div>
  );
};
export default Signup;
