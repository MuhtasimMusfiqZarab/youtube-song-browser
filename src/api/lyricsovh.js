import axios from "axios";

export default axios.create({
  baseURL: "https://api.lyrics.ovh/v1",
});
