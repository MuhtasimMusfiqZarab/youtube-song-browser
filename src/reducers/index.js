//combine reducers
import { combineReducers } from "redux";
import searchedVideosReducer from "./searchedVideosReducer";
import searchedTermReducer from "./searchedTermReducer";
import selectedVideoReducers from "./selectedVideoReducers";
import songLyricsReducer from "./songLyricsReducer";

//the object we are passing in the combine reducer- whatever key we are passing to the object are going to represent the kes in the state of the redux
export default combineReducers({
  searchedTerm: searchedTermReducer,
  searchedVideos: searchedVideosReducer,
  selectedVideo: selectedVideoReducers,
  songLyrics: songLyricsReducer,
});
