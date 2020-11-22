import React from "react";
import '../../App.css'
import classes from "./Home.module.css";

const Home = () => (
  <div className={classes.home}>
    <div className="card">
      <div className="card-content">
        <span className="card-title activator grey-text text-darken-4">
          <p className = {classes.username}>rohitdubey22</p>
        </span>
      </div>
      <div className="card-image waves-effect waves-block waves-light">
        <img className="activator" src="https://images.unsplash.com/photo-1605133104058-6fac9b38f522?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"></img>
      </div>
      <div className="card-content">
      <i className="medium material-icons" style = {{color : 'red' , fontSize : '3rem'}}>favorite</i>
        <span className="card-title activator grey-text text-darken-4">
          Card Title
        </span>
        <p>
          <a href="#">This is a link</a>
          <input type = "text" placeholder = "add a comment"></input>
        </p>
      </div>
      <div className="card-reveal">
        <span className="card-title grey-text text-darken-4">
          Card Title<i className="material-icons right">close</i>
        </span>
        <p>
          Here is some more information about this product that is only revealed
          once clicked on.
        </p>
      </div>
    </div>
    
  </div>
);
export default Home;
