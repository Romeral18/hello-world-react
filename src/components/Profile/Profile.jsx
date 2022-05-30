import React from "react";
import "./Profile.module.css";
import cl from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import BackgroundPhoto from "./BackgroundPhoto/BackgroundPhoto";
import Cap from "./Cap/Cap";

const Profile = () => {
  return (
    <div>
      <BackgroundPhoto />
      <Cap />
      <MyPosts />
    </div>
  );
};
export default Profile;
