import axios from "axios";

const KEY = "AIzaSyDkAoy_ZzrfNZsSBb3VTO9XaDlklFpuuSU";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    //Send a snippet of video for basic info like video name , summary etc.
    maxResults: 5,
    key: KEY
  }
});
