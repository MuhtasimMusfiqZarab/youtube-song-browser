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

export default axios.create({
  baseURL: "https://api.lyrics.ovh/v1",
});
