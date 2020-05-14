// import axios from "axios";

import { FETCH_VIDEOS } from "./types";
import youtubeAPI from "../api/youtubeAPI";

export const fetchVideos = (searchedTerm) => async (dispatch) => {
  //getting the searched data
  const res = await youtubeAPI.get("/", {
    params: {
      part: "snippet", //returns videos
      id: 10, //returns music category
      key: "AIzaSyARgbJ1NMrR8WSvsGpAJzBWNmUlQ6ohbjk",
      q: "colddplay",
    },
  });
  console.log(res);
  dispatch({ type: FETCH_VIDEOS, payload: res.data });
};
