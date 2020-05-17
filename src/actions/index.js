import {
  FETCH_VIDEOS,
  SAVE_SEARCHED_TERM,
  FETCH_TRENDING_VIDEOS,
  SELECTED_VIDEO,
  FETCH_LYRICS,
  CLEAR_SESSION,
} from "./types";
import youtubeAPI, {
  API_DEFAULT_PARAMS,
  TRENDING_API_DEFAULT_PARAMS,
} from "../api/youtubeAPI";
import lyricsovh from "../api/lyricsovh";

export const saveSearchedTerm = (artist, songTitle) => async (dispatch) => {
  dispatch({ type: SAVE_SEARCHED_TERM, payload: { artist, songTitle } });
};

export const fetchTrendingVideos = (searchedTerm) => async (dispatch) => {
  try {
    const res = await youtubeAPI.get("/videos", {
      params: {
        ...TRENDING_API_DEFAULT_PARAMS,
      },
    });
    dispatch({ type: FETCH_TRENDING_VIDEOS, payload: res.data.items });
  } catch (error) {
    //no lyrics is found, thus clear the previous lyrics stored in the redux
    console.log(error);
  }
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
    //no lyrics is found, thus clear the previous lyrics stored in the redux
    // const { message } = error.response.data.error;
    console.log(error);
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
    dispatch({ type: FETCH_LYRICS, payload: res.data });
  } catch (error) {
    console.log(error.response);
  }
};

//for clearing the redux store when a new search is initiated

export const clearSession = () => async (dispatch) => {
  dispatch({ type: CLEAR_SESSION });
};
