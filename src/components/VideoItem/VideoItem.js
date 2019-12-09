import React from "react";
import Styles from "./VideoItem.module.css";

const VideoItem = props => {
  return (
    <div className={Styles.structItem} onClick={props.click}>
      <img
        src={props.video.snippet.thumbnails.medium.url}
        alt="youtubeThumbnails"
      />
      <h3>{props.video.snippet.title}</h3>
    </div>
  );
};
export default VideoItem;
