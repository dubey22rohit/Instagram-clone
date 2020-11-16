import React from 'react';
import classes from './Home.module.css';

const Home = ()=>(
    <div className = {classes.home}>
            {/* <div className = {`${classes.card}  ${classes.home_card}`}>
                <h5>Rohit</h5>
            </div> */}
    <div class="card">
    <div class="card-image waves-effect waves-block waves-light">
      <img class="activator" src="images/office.jpg" alt = ""></img>
    </div>
    <div class="card-content">
      <span class="card-title activator grey-text text-darken-4">Card Title<i class="material-icons right">more_vert</i></span>
        <p><a href="" >This is a link</a></p>
    </div>
    <div class="card-reveal">
      <span class="card-title grey-text text-darken-4">Card Title<i class="material-icons right">close</i></span>
      <p>Here is some more information about this product that is only revealed once clicked on.</p>
    </div>
  </div>

    </div>
)
export default Home