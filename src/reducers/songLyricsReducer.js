import { FETCH_LYRICS } from "../actions/types";

// null means  request is processing still
export default function (state = null, action) {
  console.log(action);
  switch (action.type) {
    case FETCH_LYRICS:
      console.log("Selected lyrics payload", action.payload);
      return action.payload;
    default:
      return state;
  }
}
