//combine reducers
import { combineReducers } from "redux";
import searchedVideosReducer from "./searchedVideosReducer";

//the object we are passing in the combine reducer- whatever key we are passing to the object are going to represent the kes in the state of the redux
export default combineReducers({
  searchedVideos: searchedVideosReducer,
});
