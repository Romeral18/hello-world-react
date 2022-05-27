import React from "react";
import "./Profile.module.css";
import cl from "./Profile.module.css";

const Profile = () => {
  return (
    <div className={cl.content}>
      <div>
        <img
          src="https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg"
          alt=""
        />
      </div>
      <div>ava + description</div>
      <div>
        My posts
        <div>new post</div>
        <div>
          <div>post 1</div>
          <div>post 2</div>
        </div>
      </div>
    </div>
  );
};
export default Profile;
