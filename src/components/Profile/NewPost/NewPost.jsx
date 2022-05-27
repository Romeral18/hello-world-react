import React from "react";
import "./NewPost.module.css";
import cl from "./NewPost.module.css";

const NewPost = () => {
  return (
    <div className={cl.newPosts}>
      <textarea name="post" id="" cols="15" rows="5"></textarea>
      <button>Add</button>
    </div>
  );
};
export default NewPost;
