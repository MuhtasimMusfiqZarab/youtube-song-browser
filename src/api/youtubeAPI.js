import axios from "axios";

//passing default url parameters
export const API_DEFAULT_PARAMS = {
  part: "snippet", //returns videos
  id: 10, //returns music category
  key: process.env.REACT_APP_YOUTUBE_API_KEY,
  // key: youtubeAPIkey,
  maxResults: 20,
  type: "video",
  // q: "coldplay", //we will be providing the q==query term
};

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
});
