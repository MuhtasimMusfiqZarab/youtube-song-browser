import { SELECTED_VIDEO } from "../actions/types";

//exporting reducer
// null means  request is processing still
export default function (state = null, action) {
  switch (action.type) {
    //fetch user returns null, false or the user model
    case SELECTED_VIDEO:
      return action.payload;
    default:
      return state;
  }
}
