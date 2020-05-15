import { SAVE_SEARCHED_TERM } from "../actions/types";

//exporting reducer
// null means  request is processing still
export default function (state = null, action) {
  switch (action.type) {
    case SAVE_SEARCHED_TERM:
      console.log("This is searched term in redux", action.payload);
      return action.payload;
    default:
      return state;
  }
}
