import { FETCH_TRENDING_VIDEOS } from "../actions/types";

export default function (state = null, action) {
  switch (action.type) {
    case FETCH_TRENDING_VIDEOS:
      return action.payload;
    default:
      return state;
  }
}
