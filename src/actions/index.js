import { FETCH_VIDEOS, SAVE_SEARCHED_TERM, SELECTED_VIDEO } from "./types";
import youtubeAPI, { API_DEFAULT_PARAMS } from "../api/youtubeAPI";

export const saveSearchedTerm = (searchedTerm) => async (dispatch) => {
  dispatch({ type: SAVE_SEARCHED_TERM, payload: searchedTerm });
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
