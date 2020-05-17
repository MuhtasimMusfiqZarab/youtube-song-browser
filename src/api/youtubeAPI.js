import axios from "axios";

//get trending videos
export const TRENDING_API_DEFAULT_PARAMS = {
  part: ["snippet", "contentDetails", "statistics"], //returns videos(part = contentDetails)
  chart: "mostPopular",
  regionCode: "US",
  key: process.env.REACT_APP_YOUTUBE_API_KEY,
  maxResults: 20,
  type: "video",
};

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
