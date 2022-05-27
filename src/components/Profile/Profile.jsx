import React from "react";
import "./Profile.module.css";
import cl from "./Profile.module.css";
import NewPost from "./NewPost/NewPost";
import Posts from "./Posts/Posts";
import BackgroundPhoto from "./BackgroundPhoto/BackgroundPhoto";
import Cap from "./Cap/Cap";

const Profile = () => {
  return (
    <div className={cl.content}>
      <BackgroundPhoto />
      <Cap />
      <NewPost />
      <Posts />
      <Posts />
      <Posts />
      <Posts />
      <Posts />
      <Posts />
      <Posts />
    </div>
  );
};
export default Profile;
