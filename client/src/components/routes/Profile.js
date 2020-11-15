import React from "react";
import classes from "./Profile.module.css";
const Profile = () => (
  <div className={classes.profile}>
    <div className={classes.bio}>
      <img
        src="https://images.unsplash.com/photo-1604936725386-22a475291f50?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
        className={classes.bio_pic}></img>
      <div className={classes.bio_info}>
        <div className={classes.name_edit_settings}>
          <div className={classes.person_name}>rohitdubey22</div>
          <button>Edit profile</button>
          <div>Settings</div>
        </div>
        <div className={classes.friend_count}>
          <div>
            <b>16</b> Posts
          </div>
          <div>
            <b>304</b> Followers{" "}
          </div>
          <div>
            <b>313</b> Following{" "}
          </div>
        </div>
        <div className={classes.name_bio}>
          <div>Rohit Dubey</div>
          <div>Bio very long no one read</div>
        </div>
      </div>
    </div>

    <div className = {classes.gallery}>
    <img src="https://images.unsplash.com/photo-1604936725386-22a475291f50?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"></img>
    <img src="https://images.unsplash.com/photo-1604936725386-22a475291f50?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"></img>
    <img src="https://images.unsplash.com/photo-1604936725386-22a475291f50?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"></img>
    <img src="https://images.unsplash.com/photo-1604936725386-22a475291f50?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"></img>
    <img src="https://images.unsplash.com/photo-1604936725386-22a475291f50?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"></img>
    <img src="https://images.unsplash.com/photo-1604936725386-22a475291f50?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"></img>
    <img src="https://images.unsplash.com/photo-1604936725386-22a475291f50?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"></img>
    <img src="https://images.unsplash.com/photo-1604936725386-22a475291f50?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"></img>
    <img src="https://images.unsplash.com/photo-1604936725386-22a475291f50?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"></img>
    
    
    </div>
  </div>
);
export default Profile;
