import axios from "axios";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/search",
  params: {
    part: "snippet", //returns videos
    id: 10, //returns music category
    key: "AIzaSyARgbJ1NMrR8WSvsGpAJzBWNmUlQ6ohbjk",
    q: "",
  },
});
