import {
  FETCH_VIDEOS,
  SAVE_SEARCHED_TERM,
  SELECTED_VIDEO,
  FETCH_LYRICS,
} from "./types";
import youtubeAPI, { API_DEFAULT_PARAMS } from "../api/youtubeAPI";
import lyricsovh from "../api/lyricsovh";

export const saveSearchedTerm = (artist, songTitle) => async (dispatch) => {
  dispatch({ type: SAVE_SEARCHED_TERM, payload: { artist, songTitle } });
};

export const fetchVideos = (searchedTerm) => async (dispatch) => {
  try {
    const res = await youtubeAPI.get("/search", {
      params: {
        ...API_DEFAULT_PARAMS,
        q: searchedTerm,
      },
    });
    dispatch({ type: FETCH_VIDEOS, payload: res.data.items });
  } catch (error) {
    console.log(error.response);
  }
};

//save the selected video
export const getSelectedVideo = (video) => async (dispatch) => {
  dispatch({ type: SELECTED_VIDEO, payload: video });
};

//get the lyrics of the selected video
export const getLyrics = (artist, songTitle) => async (dispatch) => {
  //API request
  try {
    const res = await lyricsovh.get(`/${artist}/${songTitle}`);
    console.log("Lyrics response", res);
    dispatch({ type: FETCH_LYRICS, payload: res.data });
  } catch (error) {
    console.log(error.response);
  }
};
