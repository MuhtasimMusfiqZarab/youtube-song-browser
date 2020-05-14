import { FETCH_VIDEOS } from "../actions/types";

//exporting reducer
// null means  request is processing still
export default function (state = null, action) {
  console.log(action);
  switch (action.type) {
    //fetch user returns null, false or the user model
    case FETCH_VIDEOS:
      console.log("This ran");
      return action.payload;
    default:
      return state;
  }
}
