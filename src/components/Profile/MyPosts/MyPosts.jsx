import React from "react";
import s from "./MyPosts.module.scss";
import Post from "./Post/Post";
import {
  updateNewPostTextActionCreator,
  addPostActionCreator,
} from "../../../redux/profile-reducer.js";

const MyPosts = (props) => {
  let postsElements = props.posts.map((p) => (
    <Post message={p.message} counter={p.counter} />
  ));

  let newPostElement = React.createRef();

  let postChange = () => {
    let text = newPostElement.current.value;
    props.dispatch(updateNewPostTextActionCreator(text));
  };

  let addPost = () => {
    // alert((document.getElementById("textarea").value = "ops, petyh"));
    props.dispatch(addPostActionCreator());
  };

  return (
    <div className={s.postsBlock}>
      <h3>my posts</h3>
      <div>
        <div>
          <textarea
            onChange={postChange}
            ref={newPostElement}
            value={props.newPostText}
          ></textarea>
        </div>
        <div>
          <button onClick={addPost}>Add post</button>
        </div>
      </div>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
