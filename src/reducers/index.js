//combine reducers
import { combineReducers } from "redux";
import searchedVideosReducer from "./searchedVideosReducer";
import searchedTermReducer from "./searchedTermReducer";
import selectedVideoReducers from "./selectedVideoReducers";
import trendingVideosReducer from "./trendingVideosReducer";
import songLyricsReducer from "./songLyricsReducer";

//would remove it
import { CLEAR_SESSION } from "../actions/types";
import { RESET_SAVED_LYRICS } from "../actions/types";

//the object we are passing in the combine reducer- whatever key we are passing to the object are going to represent the kes in the state of the redux
const appReducer = combineReducers({
  searchedTerm: searchedTermReducer,
  searchedVideos: searchedVideosReducer,
  selectedVideo: selectedVideoReducers,
  songLyrics: songLyricsReducer,
  trendingVideos: trendingVideosReducer,
});

//this is for resetting the redux store when necessary
const rootReducer = (state, action) => {
  //reducers return the initial state when they are called with undefined as the first argument

  if (action.type === CLEAR_SESSION) {
    // state = undefined; //we would use it to reset all the keys of redux
    console.log("Clear session ran");
    state = undefined; //resetting all
  }

  if (action.type === RESET_SAVED_LYRICS) {
    //selectively picking what not to reset
    const {
      searchedTerm,
      searchedVideos,
      selectedVideo,
      trendingVideos,
    } = state;
    state = { searchedTerm, searchedVideos, selectedVideo, trendingVideos };
  }
  return appReducer(state, action);
};

export default rootReducer;
