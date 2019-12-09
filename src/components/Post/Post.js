import React from "react";
import Styles from "./Post.module.css";
const Post = props => {
  return (
    <div className={Styles.post}>
      <div className={Styles.header}>
        <div className={Styles.circle}>
          <img src={props.picture_url} alt="DP"></img>
          <span className={Styles.accountTitle}>{props.author}</span>
        </div>
      </div>
      <div className={Styles.storyImage}>
        <iframe
          src={`https://www.youtube.com/embed/${props.videoId}`}
          title="youtube Video"
          allowfullscreen="allowfullscreen"
        />
      </div>
      <div className={Styles.likes}>{`${props.likes} likes`}</div>
      <div className={Styles.comment}>{props.description}</div>
    </div>
  );
};
export default Post;
