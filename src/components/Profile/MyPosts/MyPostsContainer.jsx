import React from "react";
import {
  updateNewPostTextActionCreator,
  addPostActionCreator,
} from "../../../redux/profile-reducer.js";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
  let state = props.store.getState();

  let addPost = () => {
    // alert((document.getElementById("textarea").value = "ops, petyh"));
    props.store.dispatch(addPostActionCreator());
  };

  let postChange = (text) => {
    let action = updateNewPostTextActionCreator(text);
    props.store.dispatch(action);
  };

  return (
    <MyPosts
      updateNewPostText={postChange}
      addPost={addPost}
      posts={state.profilePage.posts}
      newPostText={state.profilePage.newPostText}
    />
  );
};

export default MyPostsContainer;
