import axios from "axios";

//get searched videos
export const API_DEFAULT_PARAMS = {
  part: "snippet", //returns videos
  id: 10, //returns music category
  key: process.env.REACT_APP_YOUTUBE_API_KEY,
  maxResults: 50,
  type: "video",
};

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
});
