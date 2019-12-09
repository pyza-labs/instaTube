import React, { Fragment, useState, useEffect } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faSearch, faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import Youtube from "../../apis/Youtube/Youtube";
import Navbar from "../../components/Navbar/Navbar";
import Post from "../../components/Post/Post";
import Styles from "./Home.module.css";

library.add(far, fab, faSearch, faTimesCircle);

function Home() {
  const [showSearch = false, setShowSearch] = useState();
  const [text = "", setText] = useState();
  const [vidoes = [], setVidoes] = useState();
  const [isLoading, setIsLoading] = useState();

  useEffect(() => {
    Youtube.get("/videos", {
      params: {
        chart: "mostPopular"
      }
    }).then(response => {
      setVidoes(response.data.items);
    });
  }, []);
  //   const userPost = {
  //     author: selectedVideo && selectedVideo.snippet.channelTitle,
  //     picture_url: selectedVideo && selectedVideo.snippet.thumbnails.medium.url,
  //     likes: selectedVideo && selectedVideo.snippet.title,
  //     description: selectedVideo && selectedVideo.snippet.description,
  //     videoId: selectedVideo && selectedVideo.id.videoId
  //   };

  const showSearchHandler = () => {
    setShowSearch(true);
  };

  const removeSearchHandler = () => {
    setShowSearch(false);
  };

  const searchTextHandler = event => {
    setText(event.target.value);
    setIsLoading(true);
  };

  const submitHandler = async event => {
    event.preventDefault();
    const response = await Youtube.get("/search", {
      params: {
        q: text
      }
    });
    setIsLoading(false);
    setVidoes(response.data.items);
    setShowSearch(false);
  };

  //   const videoClickHandler = video => {
  //     setSelectedVideo(video);
  //   };

  return (
    <Fragment>
      {showSearch && (
        <div className={Styles.Backdrop} onClick={removeSearchHandler} />
      )}
      <Navbar
        clickSearch={showSearchHandler}
        show={showSearch}
        removeSearch={removeSearchHandler}
        change={searchTextHandler}
        text={text}
        submit={submitHandler}
      ></Navbar>
      <div className={Styles.App}>
        {isLoading ? (
          <div className={Styles.loader}></div>
        ) : (
          vidoes.map((video, index) => {
            return (
              <Post
                key={index}
                author={video.snippet.channelTitle}
                picture_url={video.snippet.thumbnails.medium.url}
                description={video.snippet.description}
                likes={video.snippet.title}
                videoId={video.id.videoId}
              ></Post>
            );
          })
        )}
      </div>
    </Fragment>
  );
}

export default Home;
